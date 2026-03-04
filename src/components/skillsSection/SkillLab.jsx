import { useEffect, useMemo, useRef, useState } from "react";
import PropTypes from "prop-types";

const DESKTOP_MEDIA_QUERY = "(hover: hover) and (pointer: fine) and (min-width: 1024px)";
const REDUCED_MOTION_MEDIA_QUERY = "(prefers-reduced-motion: reduce)";
const DND_DATA_KEY = "text/plain";
const AUTO_FILL_LIMIT = 5;
const MAX_TOKEN_COUNT = 120;

const DOMAIN_KEYWORDS = {
  Frontend: ["ui", "landing", "responsive", "dashboard", "animation"],
  Backend: ["api", "server", "database", "auth", "performance"],
  Security: ["pentest", "malware", "reverse", "audit", "secure"],
  DevOps: ["deploy", "docker", "linux", "ci", "automation"],
};

const normalizeText = (value) =>
  String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const tokenizeText = (value) => normalizeText(value).split(" ").filter(Boolean).slice(0, MAX_TOKEN_COUNT);

const hasTermMatch = (normalizedText, tokenSet, term) => {
  const normalizedTerm = normalizeText(term);
  if (!normalizedTerm) return false;
  if (normalizedTerm.includes(" ")) {
    return normalizedText.includes(normalizedTerm);
  }
  return tokenSet.has(normalizedTerm);
};

const getProfileSentence = (groupedDomains, selectedCount) => {
  if (!selectedCount) {
    return "Drag skills from inventory into the board to build your stack profile.";
  }

  if (groupedDomains.length === 1) {
    return `This loadout leans into ${groupedDomains[0][0]} specialization.`;
  }

  if (groupedDomains.length === 2) {
    const [first, second] = groupedDomains;
    const difference = Math.abs(first[1] - second[1]);

    if (difference <= 1) {
      return `This is a hybrid ${first[0]} + ${second[0]} stack with balanced depth.`;
    }

    return `This build prioritizes ${first[0]} with ${second[0]} support.`;
  }

  return "This build is a balanced full-stack and security blend.";
};

const rankSkillsFromNeed = (skills, needText, maxSelected) => {
  const tokens = tokenizeText(needText);
  if (!tokens.length) {
    return {
      error: "Describe your need first.",
      fallbackUsed: false,
      recommendedIds: [],
      boardIds: [],
    };
  }

  const normalizedNeed = tokens.join(" ");
  const tokenSet = new Set(tokens);

  const scored = skills
    .map((skill) => {
      let matchScore = skill.score / 100;

      if (hasTermMatch(normalizedNeed, tokenSet, skill.skill)) {
        matchScore += 6;
      }

      const aliasHits = new Set();
      (skill.aliases || []).forEach((alias) => {
        if (hasTermMatch(normalizedNeed, tokenSet, alias)) {
          aliasHits.add(normalizeText(alias));
        }
      });
      matchScore += aliasHits.size * 4;

      const keywordHits = new Set();
      (skill.keywords || []).forEach((keyword) => {
        if (hasTermMatch(normalizedNeed, tokenSet, keyword)) {
          keywordHits.add(normalizeText(keyword));
        }
      });
      matchScore += keywordHits.size * 3;

      const domainTerms = DOMAIN_KEYWORDS[skill.domain] || [];
      const hasDomainHit = domainTerms.some((term) => hasTermMatch(normalizedNeed, tokenSet, term));
      if (hasDomainHit) {
        matchScore += 2;
      }

      return { id: skill.id, skillScore: skill.score, matchScore };
    })
    .sort((a, b) => b.matchScore - a.matchScore || b.skillScore - a.skillScore);

  const positiveMatches = scored.filter((item) => item.matchScore > 0);
  let fallbackUsed = false;
  let recommendedIds = [];

  if (positiveMatches.length) {
    recommendedIds = positiveMatches.slice(0, AUTO_FILL_LIMIT).map((item) => item.id);
  } else {
    fallbackUsed = true;
    recommendedIds = [...skills]
      .sort((a, b) => b.score - a.score)
      .slice(0, AUTO_FILL_LIMIT)
      .map((item) => item.id);
  }

  const uniqueRecommended = [...new Set(recommendedIds)];

  return {
    error: "",
    fallbackUsed,
    recommendedIds: uniqueRecommended,
    boardIds: uniqueRecommended.slice(0, maxSelected),
  };
};

const SkillLab = ({ skills, domains, maxSelected = 8 }) => {
  const [isDesktopInteractive, setIsDesktopInteractive] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [selectedSkillIds, setSelectedSkillIds] = useState([]);
  const [analysisSkillIds, setAnalysisSkillIds] = useState([]);
  const [analysisMessage, setAnalysisMessage] = useState("");
  const [analysisError, setAnalysisError] = useState("");
  const [clientNeed, setClientNeed] = useState("");
  const needTextareaRef = useRef(null);
  const [draggingSkillId, setDraggingSkillId] = useState(null);
  const [isDropActive, setIsDropActive] = useState(false);
  const [limitNotice, setLimitNotice] = useState("");

  const skillsById = useMemo(
    () => new Map(skills.map((skill) => [skill.id, skill])),
    [skills]
  );

  const selectedSkills = useMemo(
    () => selectedSkillIds.map((id) => skillsById.get(id)).filter(Boolean),
    [selectedSkillIds, skillsById]
  );

  const analysisSkills = useMemo(
    () => analysisSkillIds.map((id) => skillsById.get(id)).filter(Boolean),
    [analysisSkillIds, skillsById]
  );

  const groupedDomainEntries = useMemo(() => {
    const groups = selectedSkills.reduce((acc, skill) => {
      const domainName = skill.domain || "Other";
      if (!acc[domainName]) {
        acc[domainName] = [];
      }
      acc[domainName].push(skill);
      return acc;
    }, {});

    return Object.entries(groups).sort((a, b) => b[1].length - a[1].length);
  }, [selectedSkills]);

  const groupedDomainCounts = useMemo(
    () => groupedDomainEntries.map(([domainName, list]) => [domainName, list.length]),
    [groupedDomainEntries]
  );

  const profileSentence = useMemo(
    () => getProfileSentence(groupedDomainCounts, selectedSkills.length),
    [groupedDomainCounts, selectedSkills.length]
  );

  const recommendedDomains = useMemo(
    () => new Set(domains.map((domain) => domain.title)),
    [domains]
  );

  useEffect(() => {
    const media = window.matchMedia(DESKTOP_MEDIA_QUERY);
    const syncState = () => setIsDesktopInteractive(media.matches);

    syncState();

    if (media.addEventListener) {
      media.addEventListener("change", syncState);
      return () => media.removeEventListener("change", syncState);
    }

    media.addListener(syncState);
    return () => media.removeListener(syncState);
  }, []);

  useEffect(() => {
    const media = window.matchMedia(REDUCED_MOTION_MEDIA_QUERY);
    const syncState = () => setReduceMotion(media.matches);

    syncState();

    if (media.addEventListener) {
      media.addEventListener("change", syncState);
      return () => media.removeEventListener("change", syncState);
    }

    media.addListener(syncState);
    return () => media.removeListener(syncState);
  }, []);

  useEffect(() => {
    if (selectedSkillIds.length < maxSelected && limitNotice) {
      setLimitNotice("");
    }
  }, [limitNotice, maxSelected, selectedSkillIds.length]);

  useEffect(() => {
    if (!isDesktopInteractive) {
      setIsDropActive(false);
      setDraggingSkillId(null);
    }
  }, [isDesktopInteractive]);

  useEffect(() => {
    const textarea = needTextareaRef.current;
    if (!textarea || typeof ResizeObserver === "undefined") return undefined;

    let previousHeight = textarea.offsetHeight;
    let refreshTimeoutId = 0;

    const queueLayoutRefresh = () => {
      if (refreshTimeoutId) {
        window.clearTimeout(refreshTimeoutId);
      }

      refreshTimeoutId = window.setTimeout(() => {
        window.dispatchEvent(new Event("app:layout-updated"));
      }, 90);
    };

    const resizeObserver = new ResizeObserver((entries) => {
      const nextHeight = entries[0]?.contentRect?.height ?? textarea.offsetHeight;
      if (Math.abs(nextHeight - previousHeight) < 0.5) return;

      previousHeight = nextHeight;
      queueLayoutRefresh();
    });

    resizeObserver.observe(textarea);

    return () => {
      resizeObserver.disconnect();
      if (refreshTimeoutId) {
        window.clearTimeout(refreshTimeoutId);
      }
    };
  }, [isDesktopInteractive]);

  const handleAnalyzeNeed = () => {
    const ranked = rankSkillsFromNeed(skills, clientNeed, maxSelected);

    if (ranked.error) {
      setAnalysisError(ranked.error);
      setAnalysisMessage("");
      setAnalysisSkillIds([]);
      return;
    }

    setAnalysisError("");
    setAnalysisSkillIds(ranked.recommendedIds);
    setSelectedSkillIds(ranked.boardIds);
    setLimitNotice("");

    if (ranked.fallbackUsed) {
      setAnalysisMessage("No direct keyword match, showing strongest core skills.");
    } else {
      setAnalysisMessage("Based on your request, these are my strongest matching skills:");
    }
  };

  const handleResetAnalysis = () => {
    setClientNeed("");
    setAnalysisError("");
    setAnalysisMessage("");
    setAnalysisSkillIds([]);
  };

  const handleDragStart = (event, skillId) => {
    if (!isDesktopInteractive) return;
    event.dataTransfer.setData(DND_DATA_KEY, skillId);
    event.dataTransfer.effectAllowed = "copy";
    setDraggingSkillId(skillId);
  };

  const handleDragEnd = () => {
    setDraggingSkillId(null);
    setIsDropActive(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    if (!isDesktopInteractive) return;

    const skillId = event.dataTransfer.getData(DND_DATA_KEY);
    setIsDropActive(false);
    setDraggingSkillId(null);

    if (!skillId || !skillsById.has(skillId)) {
      return;
    }

    if (selectedSkillIds.includes(skillId)) {
      return;
    }

    if (selectedSkillIds.length >= maxSelected) {
      setLimitNotice(`Board limit reached (${maxSelected}). Remove one skill to continue.`);
      return;
    }

    setSelectedSkillIds((current) => [...current, skillId]);
    setLimitNotice("");
  };

  const handleRemoveSkill = (skillId) => {
    setSelectedSkillIds((current) => current.filter((id) => id !== skillId));
  };

  const handleClearBoard = () => {
    setSelectedSkillIds([]);
    setLimitNotice("");
  };

  const renderNeedPanel = (readOnlyPreview) => (
    <div className="border border-border-subtle bg-bg-primary/60 p-5">
      <h4 className="text-sm uppercase tracking-[0.16em] text-text-secondary">Client Need</h4>
      <p className="text-xs text-text-tertiary mt-2">
        Describe the task and I will map the strongest skills.
      </p>
      <label htmlFor={readOnlyPreview ? "client-need-preview" : "client-need"} className="sr-only">
        What do you need me to build?
      </label>
      <textarea
        ref={needTextareaRef}
        id={readOnlyPreview ? "client-need-preview" : "client-need"}
        value={clientNeed}
        onChange={(event) => setClientNeed(event.target.value)}
        placeholder="Example: Need a secure React dashboard with API auth and database integration."
        className="mt-4 w-full min-h-[120px] border border-border-subtle bg-bg-elevated p-3 text-sm text-text-primary focus:outline-none focus:border-accent resize-y"
      />
      <div className="mt-4 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handleAnalyzeNeed}
          className="text-xs uppercase tracking-[0.16em] border border-accent/40 bg-accent-dim px-4 py-2 text-text-primary hover:border-accent transition-colors duration-200"
        >
          Analyze Need
        </button>
        <button
          type="button"
          onClick={handleResetAnalysis}
          className="text-xs uppercase tracking-[0.16em] border border-border-subtle px-4 py-2 text-text-secondary hover:text-text-primary hover:border-border-medium transition-colors duration-200"
        >
          Reset Analysis
        </button>
      </div>

      {!!analysisError && (
        <p className="text-xs text-accent mt-3 border border-accent/30 bg-accent-dim px-3 py-2">
          {analysisError}
        </p>
      )}

      {!!analysisMessage && (
        <p className="text-xs text-text-secondary mt-3 border border-border-subtle px-3 py-2">
          {analysisMessage}
        </p>
      )}

      {!!analysisSkills.length && (
        <div className="mt-3 flex flex-wrap gap-2">
          {analysisSkills.map((skill) => {
            const Icon = skill.icon;
            return (
              <span
                key={`analysis-${skill.id}`}
                className="inline-flex items-center gap-2 border border-accent/40 bg-accent-dim px-3 py-1.5 text-xs text-text-primary"
              >
                <Icon className="text-[11px]" />
                {skill.skill}
              </span>
            );
          })}
        </div>
      )}

      {readOnlyPreview && (
        <p className="text-xs text-text-tertiary mt-4">
          Drag-and-drop board is desktop only. Open this section on desktop to refine the stack manually.
        </p>
      )}
    </div>
  );

  if (!isDesktopInteractive) {
    return (
      <div className="accent-glow-shell border border-border-subtle bg-bg-elevated p-6 md:p-8">
        <div className="flex items-start justify-between gap-6 mb-6">
          <div>
            <p className="text-label">Skill Lab</p>
            <h3 className="text-heading font-display text-text-primary mt-2">
              Tell me what you need. I&apos;ll map the right skills.
            </h3>
            <p className="text-sm text-text-secondary mt-3 max-w-2xl">
              This view gives you a read-only recommendation preview. Drag-and-drop refinement is available on desktop.
            </p>
          </div>
          <span className="text-[11px] uppercase tracking-[0.16em] text-text-tertiary border border-border-subtle px-3 py-1.5 h-fit">
            View Only
          </span>
        </div>
        {renderNeedPanel(true)}
      </div>
    );
  }

  return (
    <div className="accent-glow-shell relative overflow-visible border border-border-subtle bg-bg-elevated p-6 md:p-8">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="text-label">Skill Lab</p>
          <h3 className="text-heading font-display text-text-primary mt-2">
            Tell me what you need. I&apos;ll map the right skills.
          </h3>
          <p className="text-sm text-text-secondary mt-3 max-w-2xl">
            Analyze your need to auto-fill top matches, then refine the board manually with drag and drop.
          </p>
        </div>
        <button
          type="button"
          onClick={handleClearBoard}
          className="text-xs uppercase tracking-[0.16em] border border-border-subtle px-4 py-2 hover:border-accent hover:text-text-primary transition-colors duration-200 disabled:opacity-40 disabled:hover:border-border-subtle"
          disabled={!selectedSkillIds.length}
        >
          Clear Board
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-6 mt-8">
        <div className="space-y-6">
          {renderNeedPanel(false)}
          <div className="border border-border-subtle bg-bg-primary/60 p-5">
            <h4 className="text-sm uppercase tracking-[0.16em] text-text-secondary">Inventory</h4>
            <p className="text-xs text-text-tertiary mt-2">
              Drag skills from here into your board to fine tune recommendations.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {skills.map((skill) => {
                const Icon = skill.icon;
                const isSelected = selectedSkillIds.includes(skill.id);
                const isDragging = draggingSkillId === skill.id;

                return (
                  <div
                    key={skill.id}
                    draggable
                    onDragStart={(event) => handleDragStart(event, skill.id)}
                    onDragEnd={handleDragEnd}
                    className={[
                      "skill-chip inline-flex items-center gap-2 border px-3 py-2 text-sm",
                      isSelected
                        ? "border-accent/60 bg-accent-dim text-text-primary"
                        : "border-border-subtle bg-bg-elevated text-text-secondary hover:text-text-primary hover:border-border-medium",
                      isDragging ? "chip-dragging" : "",
                      reduceMotion ? "transition-none" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    <Icon className="text-sm" />
                    <span>{skill.skill}</span>
                    <span className="text-[10px] text-text-tertiary">{skill.score}%</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div
          onDragOver={(event) => {
            event.preventDefault();
            setIsDropActive(true);
          }}
          onDragLeave={(event) => {
            const nextTarget = event.relatedTarget;
            if (nextTarget && event.currentTarget.contains(nextTarget)) {
              return;
            }
            setIsDropActive(false);
          }}
          onDrop={handleDrop}
          className={[
            "border bg-bg-primary/70 p-5 min-h-[340px]",
            isDropActive ? "drop-active accent-glow-active" : "border-border-subtle",
            reduceMotion ? "transition-none" : "transition-colors duration-150",
          ].join(" ")}
        >
          <div className="flex items-center justify-between gap-3">
            <h4 className="text-sm uppercase tracking-[0.16em] text-text-secondary">Build Board</h4>
            <span className="text-xs text-text-tertiary">
              {selectedSkillIds.length}/{maxSelected}
            </span>
          </div>

          {!!limitNotice && (
            <p className="text-xs text-accent mt-3 border border-accent/30 bg-accent-dim px-3 py-2">
              {limitNotice}
            </p>
          )}

          {!selectedSkills.length ? (
            <div className="mt-5 border border-dashed border-border-subtle p-5 text-sm text-text-tertiary">
              Analyze your need or drag skills here to generate your summary.
            </div>
          ) : (
            <div className="mt-5 flex flex-wrap gap-3">
              {selectedSkills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.id}
                    className="inline-flex items-center gap-2 border border-border-medium bg-bg-elevated px-3 py-2 text-sm"
                  >
                    <Icon className="text-sm text-accent" />
                    <span className="text-text-primary">{skill.skill}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveSkill(skill.id)}
                      className="ml-2 text-text-tertiary hover:text-text-primary transition-colors duration-200"
                      aria-label={`Remove ${skill.skill}`}
                    >
                      x
                    </button>
                  </div>
                );
              })}
            </div>
          )}

          <div className="mt-6 pt-5 border-t border-border-subtle">
            <h5 className="text-xs uppercase tracking-[0.16em] text-text-secondary">Build Summary</h5>
            <p className="text-sm text-text-primary mt-3">{profileSentence}</p>
            <div className="mt-4 space-y-2">
              {groupedDomainEntries.map(([domainName, list]) => {
                const mappedDomainName = recommendedDomains.has(domainName) ? domainName : "Other";
                return (
                  <div
                    key={domainName}
                    className="flex items-center justify-between gap-3 text-xs border border-border-subtle px-3 py-2"
                  >
                    <span className="text-text-secondary">{mappedDomainName}</span>
                    <span className="text-text-primary">{list.length} skills</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SkillLab.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      skill: PropTypes.string.isRequired,
      icon: PropTypes.elementType.isRequired,
      score: PropTypes.number.isRequired,
      domain: PropTypes.string,
      aliases: PropTypes.arrayOf(PropTypes.string),
      keywords: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
  domains: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
  maxSelected: PropTypes.number,
};

export default SkillLab;
