import { useEffect, useRef } from "react";
import { gsap } from "../../lib/gsap";
import SkillLab from "./SkillLab";
import { domains, skillsData } from "./skillsData";

const SkillsMain = () => {
  const sectionRef = useRef(null);
  const introShellRef = useRef(null);
  const headingRef = useRef(null);
  const tickerTopRef = useRef(null);
  const tickerBottomRef = useRef(null);
  const domainRefs = useRef([]);
  const labRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const domainsList = domainRefs.current.filter(Boolean);

      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { y: 40, opacity: 0, filter: "blur(6px)" },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }

      if (domainsList.length) {
        gsap.fromTo(
          domainsList,
          { y: 36, opacity: 0, rotateX: -8 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            stagger: 0.12,
            duration: 0.72,
            ease: "power3.out",
            scrollTrigger: {
              trigger: domainsList[0],
              start: "top 80%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }

      if (labRef.current) {
        gsap.fromTo(
          labRef.current,
          { y: 48, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: labRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      }

      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        if (introShellRef.current) {
          gsap.to(introShellRef.current, {
            yPercent: -8,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          });
        }

        if (tickerTopRef.current) {
          gsap.to(tickerTopRef.current, {
            yPercent: -10,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          });
        }

        if (tickerBottomRef.current) {
          gsap.to(tickerBottomRef.current, {
            yPercent: 10,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.15,
            },
          });
        }

        if (glowRef.current) {
          gsap.to(glowRef.current, {
            yPercent: -14,
            xPercent: 8,
            scale: 1.1,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          });
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const marqueeSkills = [...skillsData, ...skillsData];

  return (
    <section id="skills" ref={sectionRef} className="relative overflow-hidden">
      <div
        ref={glowRef}
        className="pointer-events-none absolute right-[8%] top-[18%] hidden h-64 w-64 rounded-full opacity-50 blur-[110px] lg:block"
        style={{
          background:
            "radial-gradient(circle, rgba(196,255,0,0.16) 0%, transparent 72%)",
        }}
      />

      <div className="section-padding max-container relative z-10">
        <div className="mb-12 flex items-center gap-4">
          <span className="text-label">Skills</span>
          <div className="h-[1px] flex-1 bg-border-subtle" />
        </div>

        <div ref={introShellRef}>
          <div ref={headingRef}>
            <h2 className="max-w-3xl text-display font-display text-text-primary">
              Technical Arsenal
            </h2>
            <p className="mt-4 max-w-xl text-text-secondary">
              Development, security, and infrastructure capabilities used to
              ship resilient digital products.
            </p>
          </div>
        </div>
      </div>

      <div
        ref={tickerTopRef}
        className="mt-12 overflow-hidden border-y border-border-subtle py-6"
      >
        <div className="marquee-track">
          {marqueeSkills.map((item, index) => (
            <div
              key={`${item.skill}-${index}`}
              className="whitespace-nowrap px-8 text-text-secondary transition-colors duration-200 hover:text-text-primary"
            >
              <div className="flex items-center gap-3">
                <item.icon className="text-lg" />
                <span className="text-sm font-medium">{item.skill}</span>
                <span className="font-code text-[10px] text-text-tertiary">
                  {item.score}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        ref={tickerBottomRef}
        className="overflow-hidden border-b border-border-subtle py-6"
      >
        <div
          className="marquee-track"
          style={{ animationDirection: "reverse", animationDuration: "35s" }}
        >
          {[...marqueeSkills].reverse().map((item, index) => (
            <div
              key={`${item.skill}-rev-${index}`}
              className="whitespace-nowrap px-8 text-text-secondary transition-colors duration-200 hover:text-text-primary"
            >
              <div className="flex items-center gap-3">
                <item.icon className="text-lg" />
                <span className="text-sm font-medium">{item.skill}</span>
                <span className="font-code text-[10px] text-text-tertiary">
                  {item.score}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-padding-sm max-container">
        <div className="grid grid-cols-1 gap-px bg-border-subtle sm:grid-cols-2 lg:grid-cols-4">
          {domains.map((domain, index) => (
            <div
              key={domain.title}
              ref={(el) => {
                domainRefs.current[index] = el;
              }}
              className="group bg-bg-primary p-6 transition-colors duration-300 hover:bg-bg-elevated md:p-8"
            >
              <h3 className="mb-4 text-base font-semibold text-text-primary transition-colors duration-300 group-hover:text-accent">
                {domain.title}
              </h3>
              <ul className="space-y-2">
                {domain.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-text-secondary"
                  >
                    <span className="h-1 w-1 rounded-full bg-text-tertiary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div ref={labRef} className="section-padding-sm max-container pt-0">
        <SkillLab skills={skillsData} domains={domains} />
      </div>
    </section>
  );
};

export default SkillsMain;
