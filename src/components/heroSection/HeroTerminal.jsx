import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "../../lib/gsap";

const ASCII_LOGO = `
  ____  ____
 |  _ \\| __ )
 | |_) |  _ \\
 |  _ <| |_) |
 |_| \\_\\____/
`;

const commands = {
  help: () => [
    "Available commands:",
    "",
    "  whoami        — Who is Ramy?",
    "  skills        — Technical stack",
    "  experience    — Work history",
    "  projects      — Featured builds",
    "  contact       — Get in touch",
    "  education     — Academic background",
    "  neofetch      — System info",
    "  clear         — Clear terminal",
    "  secret        — ???",
    "  matrix        — Take the red pill",
  ],
  whoami: () => [
    "Ramy Bezriche",
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
    "Cybersecurity student & Frontend developer",
    "based in Algiers, Algeria.",
    "",
    "I build secure, polished web experiences",
    "with React, Next.js, and a security-first mindset.",
  ],
  skills: () => [
    "Technical Arsenal",
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
    "Frontend   → React, Next.js, Tailwind CSS",
    "Languages  → JavaScript, TypeScript, Python, C/C++",
    "Security   → Malware Analysis, Ghidra, Pentesting",
    "Backend    → Node.js, REST APIs, MongoDB, MySQL",
    "DevOps     → Git, Docker, Linux, CI/CD",
  ],
  experience: () => [
    "Work Experience",
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
    "▸ Full Stack Developer (Freelance)  — Remote, 2025-Present",
    "▸ Travel Agency Front-End           — Nice, France, 2025",
    "▸ Enterprise UI, Shams El Djazair   — Algiers, 2025",
    "▸ Telecom Engineering Intern        — Djezzy, 2024",
  ],
  projects: () => [
    "Featured Projects",
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
    "01 → Trading Dashboard      [React, Charting]",
    "02 → CryptDecrypt            [Java, Python, Security]",
    "03 → Cloud Security Lab      [Virtualization]",
    "04 → Tawba                   [Next.js, Firebase]",
    "05 → VAMOS                   [Full Stack]",
    "06 → KPI Analyzer            [Data Analysis]",
    "07 → EcoWebDZ                [Next.js, Vercel]",
    "08 → Mehdi Doctor            [React, Dashboard]",
  ],
  contact: () => [
    "Get In Touch",
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
    "Email    → ramybezriche@gmail.com",
    "GitHub   → github.com/bezriche-ramy",
    "LinkedIn → linkedin.com/in/ramy-bezriche",
    "Phone    → +213 552 173 451",
    "",
    "Or scroll down to the contact section ↓",
  ],
  education: () => [
    "Education",
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
    "State Engineering Cycle — USTHB",
    "2022 — 2027",
    "Specialization: Security Systems & Software Architecture",
    "",
    "Communities: GDG Algeria, Shellmates",
  ],
  neofetch: () => [
    ...ASCII_LOGO.split("\n"),
    "  ramy@portfolio",
    "  ─────────────────",
    "  OS      → Arch Linux (btw)",
    "  Shell   → zsh 5.9",
    "  Editor  → Neovim / VS Code",
    "  Stack   → React + Next.js + Tailwind",
    "  Theme   → Brutalist Monochrome",
    "  Uptime  → 3+ years coding",
  ],
  secret: () => [
    "┌─────────────────────────────────┐",
    "│                                 │",
    "│   You found the secret! 🔓     │",
    "│                                 │",
    "│   「 The best code is the one   │",
    "│     that never gets hacked. 」  │",
    "│                                 │",
    "│   — Ramy, probably             │",
    "│                                 │",
    "│   Hint: There's another secret  │",
    "│   hidden on this page...        │",
    "│   ↑ ↑ ↓ ↓ ← → ← → B A        │",
    "│                                 │",
    "└─────────────────────────────────┘",
  ],
  sudo: () => [
    "Nice try. You don't have root access here.",
    "But I appreciate the ambition.",
  ],
  ls: () => [
    "about.txt  skills.md  projects/  experience.log  contact.cfg",
  ],
  cat: () => [
    "Usage: Try 'whoami', 'skills', 'projects', or 'help'",
  ],
  pwd: () => ["/home/ramy/portfolio"],
  date: () => [new Date().toString()],
  matrix: () => {
    window.dispatchEvent(new CustomEvent("activate-matrix"));
    return [
      "Entering the Matrix...",
      "Wake up, Neo...",
    ];
  },
};

const INITIAL_LINES = [
  { type: "system", text: "Welcome to ramy@portfolio — Type 'help' to get started" },
  { type: "system", text: "" },
];

const HeroTerminal = () => {
  const [history, setHistory] = useState(INITIAL_LINES);
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const terminalRef = useRef(null);
  const inputRef = useRef(null);
  const containerRef = useRef(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  // Animate in
  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 3.0 }
      );
    }
  }, []);

  const executeCommand = useCallback(
    (cmd) => {
      const trimmed = cmd.trim().toLowerCase();
      const newLines = [{ type: "input", text: cmd }];

      if (trimmed === "clear") {
        setHistory(INITIAL_LINES);
        return;
      }

      if (trimmed === "") {
        setHistory((prev) => [...prev, ...newLines]);
        return;
      }

      // Check for partial match (e.g., "sudo rm -rf /")
      const baseCmd = trimmed.split(" ")[0];
      const handler = commands[baseCmd];

      if (handler) {
        const output = handler();
        output.forEach((line) => {
          newLines.push({ type: "output", text: line });
        });
      } else {
        newLines.push({
          type: "error",
          text: `command not found: ${trimmed}. Type 'help' for available commands.`,
        });
      }

      newLines.push({ type: "output", text: "" });
      setHistory((prev) => [...prev, ...newLines]);
    },
    []
  );

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (input.trim()) {
        setCmdHistory((prev) => [input, ...prev]);
      }
      executeCommand(input);
      setInput("");
      setHistoryIndex(-1);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIndex < cmdHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(cmdHistory[newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(cmdHistory[newIndex]);
      } else {
        setHistoryIndex(-1);
        setInput("");
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const partial = input.trim().toLowerCase();
      if (partial) {
        const match = Object.keys(commands).find((c) => c.startsWith(partial));
        if (match) setInput(match);
      }
    }
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  // Stop Lenis from hijacking scroll when mouse is over the terminal
  useEffect(() => {
    const el = terminalRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      const { scrollTop, scrollHeight, clientHeight } = el;
      const atTop = scrollTop === 0 && e.deltaY < 0;
      const atBottom = scrollTop + clientHeight >= scrollHeight - 1 && e.deltaY > 0;

      // Only let the page scroll if terminal is at its boundary
      if (!atTop && !atBottom) {
        e.stopPropagation();
      }
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full max-w-md opacity-0"
      style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace" }}
    >
      {/* Terminal window */}
      <div className="accent-glow-shell border border-border-medium bg-bg-elevated overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-bg-surface border-b border-border-subtle">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          </div>
          <span className="text-[10px] text-text-tertiary ml-2 tracking-wide">
            ramy@portfolio:~
          </span>
        </div>

        {/* Terminal body */}
        <div
          ref={terminalRef}
          onClick={focusInput}
          data-lenis-prevent
          className="h-[280px] md:h-[320px] overflow-y-auto p-4 text-[12px] leading-[1.7] select-text"
          style={{ cursor: "text", overscrollBehavior: "contain" }}
        >
          {history.map((line, i) => (
            <div key={i} className="whitespace-pre-wrap break-all">
              {line.type === "input" ? (
                <span>
                  <span className="text-accent">❯</span>{" "}
                  <span className="text-text-primary">{line.text}</span>
                </span>
              ) : line.type === "error" ? (
                <span className="text-[#ff5f57]">{line.text}</span>
              ) : line.type === "system" ? (
                <span className="text-text-tertiary">{line.text}</span>
              ) : (
                <span className="text-text-secondary">{line.text}</span>
              )}
            </div>
          ))}

          {/* Active input line */}
          <div className="flex items-center">
            <span className="text-accent shrink-0">❯</span>
            <span className="ml-1.5 text-text-primary">{input}</span>
            <span className="terminal-input-signal ml-2" aria-hidden="true" />
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="absolute opacity-0 w-0 h-0"
              autoFocus
              spellCheck={false}
              autoComplete="off"
            />
          </div>
        </div>
      </div>

      {/* Hint */}
      <p className="mt-3 text-[10px] text-text-tertiary tracking-wider text-center">
        Try: help, whoami, neofetch, skills, secret
      </p>
    </div>
  );
};

export default HeroTerminal;

