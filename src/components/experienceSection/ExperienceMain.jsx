import { useEffect, useRef } from "react";
import { gsap } from "../../lib/gsap";

const experiences = [
  {
    job: "Full Stack Developer (Freelance)",
    company: "Remote",
    date: "Sep 2025 - Present",
    responsibilities: [
      "Built performant web applications with React and Next.js for independent clients.",
      "Delivered responsive UI systems and production-ready component libraries.",
      "Collaborated directly with stakeholders to translate business requirements into code.",
      "Improved loading performance and baseline security posture on active deployments.",
    ],
  },
  {
    job: "Travel Agency Front-End",
    company: "Client based in Nice, France",
    date: "2025",
    responsibilities: [
      "Built a fast, responsive, and mobile-first user interface for a European travel booking platform.",
      "Focused heavily on accessible UI components, high conversion rates, and modern styling with Tailwind CSS to enhance the user booking experience.",
    ],
  },
  {
    job: "Enterprise UI Presentation Layer",
    company: "Shams El Djazair, Algiers, Algeria",
    date: "2025",
    responsibilities: [
      "Engineered the front-end presentation layer for one of Algeria's largest enterprises.",
      "Ensured cross-browser compatibility, UI/UX consistency, and strict security best practices across the application.",
    ],
  },
  {
    job: "Telecom Engineering Intern",
    company: "Djezzy, Algiers",
    date: "Jul 2024 - Sep 2024",
    responsibilities: [
      "Analyzed LTE, RRC, and S1 performance indicators across production datasets.",
      "Supported automated KPI reporting and alerting workflows.",
      "Improved PRB usage reporting and operational visibility for network teams.",
    ],
  },
];

const expertiseAreas = [
  { name: "Frontend Development", level: 95 },
  { name: "React Ecosystem", level: 92 },
  { name: "Security Practice", level: 90 },
  { name: "Backend Development", level: 86 },
];

const ExperienceMain = () => {
  const sectionRef = useRef(null);
  const leftColRef = useRef(null);
  const timelineRef = useRef(null);
  const lineRef = useRef(null);
  const cardRefs = useRef([]);
  const dotRefs = useRef([]);
  const barRefs = useRef([]);
  const glowRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardRefs.current.filter(Boolean);

      if (lineRef.current && timelineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0, transformOrigin: "top center" },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: timelineRef.current,
              start: "top 70%",
              end: "bottom 30%",
              scrub: true,
            },
          }
        );
      }

      if (cards.length) {
        gsap.fromTo(
          cards,
          {
            y: 52,
            opacity: 0,
            x: (index) => (index % 2 === 0 ? 30 : -30),
          },
          {
            y: 0,
            x: 0,
            opacity: 1,
            stagger: 0.16,
            duration: 0.84,
            ease: "power3.out",
            scrollTrigger: {
              trigger: timelineRef.current,
              start: "top 75%",
              once: true,
            },
          }
        );
      }

      dotRefs.current.filter(Boolean).forEach((dot, index) => {
        gsap.fromTo(
          dot,
          {
            scale: 0.72,
            boxShadow: "0 0 0 0 rgba(196,255,0,0.45)",
          },
          {
            scale: 1,
            boxShadow: "0 0 0 10px rgba(196,255,0,0)",
            duration: 0.72,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardRefs.current[index],
              start: "top 76%",
              once: true,
            },
          }
        );
      });

      barRefs.current.filter(Boolean).forEach((bar) => {
        const width = bar.dataset.level;
        gsap.fromTo(
          bar,
          { width: "0%" },
          {
            width: `${width}%`,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: bar,
              start: "top 85%",
              once: true,
            },
          }
        );
      });

      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        if (leftColRef.current) {
          gsap.to(leftColRef.current, {
            yPercent: -6,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          });
        }

        if (timelineRef.current) {
          gsap.to(timelineRef.current, {
            yPercent: 4,
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
            yPercent: -16,
            xPercent: 10,
            scale: 1.08,
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

  return (
    <section id="experience" ref={sectionRef} className="relative bg-bg-primary overflow-hidden">
      <div
        ref={glowRef}
        className="pointer-events-none absolute right-[10%] top-[14%] hidden h-72 w-72 rounded-full opacity-55 blur-[120px] lg:block"
        style={{
          background:
            "radial-gradient(circle, rgba(196,255,0,0.14) 0%, transparent 72%)",
        }}
      />

      <div className="section-padding max-container relative z-10">
        <div className="mb-12 flex items-center gap-4">
          <span className="text-label">Experience</span>
          <div className="h-[1px] flex-1 bg-border-subtle" />
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div ref={leftColRef}>
            <h2 className="text-display font-display text-text-primary">
              Professional
              <br />
              Experience
            </h2>

            <div className="mt-8 flex gap-8">
              <div>
                <span className="font-display text-3xl text-accent">3+</span>
                <p className="mt-1 text-xs uppercase tracking-wider text-text-tertiary">
                  Years
                </p>
              </div>
              <div>
                <span className="font-display text-3xl text-accent">20+</span>
                <p className="mt-1 text-xs uppercase tracking-wider text-text-tertiary">
                  Projects
                </p>
              </div>
            </div>

            <div className="mt-10 space-y-4">
              {expertiseAreas.map((area, index) => (
                <div key={area.name}>
                  <div className="mb-2 flex justify-between text-xs">
                    <span className="text-text-secondary">{area.name}</span>
                    <span className="font-code text-text-tertiary">
                      {area.level}%
                    </span>
                  </div>
                  <div className="overflow-hidden bg-border-subtle h-[2px]">
                    <div
                      ref={(el) => {
                        barRefs.current[index] = el;
                      }}
                      data-level={area.level}
                      className="h-full bg-accent will-change-transform"
                      style={{ width: 0 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div ref={timelineRef} className="relative">
            <div
              ref={lineRef}
              className="absolute bottom-0 left-4 top-0 hidden w-[1px] bg-accent md:block"
            />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <article
                  key={exp.job}
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  className="relative md:pl-12"
                >
                  <span
                    ref={(el) => {
                      dotRefs.current[index] = el;
                    }}
                    className="absolute left-[11px] top-2 hidden h-[9px] w-[9px] rounded-full border-2 border-accent bg-bg-primary md:block"
                  />

                  <p className="mb-2 font-code text-xs uppercase tracking-widest text-text-tertiary">
                    {exp.date}
                  </p>
                  <h3 className="font-display text-xl text-text-primary md:text-2xl">
                    {exp.job}
                  </h3>
                  <p className="mt-1 text-sm text-accent">{exp.company}</p>

                  <ul className="mt-5 space-y-3">
                    {exp.responsibilities.map((resp, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex gap-3 text-sm leading-relaxed text-text-secondary"
                      >
                        <span className="mt-1 shrink-0 text-text-tertiary">-</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  {index < experiences.length - 1 && (
                    <div className="mt-12 h-[1px] bg-border-subtle" />
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceMain;
