import { useEffect, useRef } from "react";
import { gsap } from "../../lib/gsap";

const experiences = [
  {
    job: "Full Stack Developer (Freelance)",
    company: "Remote",
    date: "Sep 2025 — Present",
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
    date: "Jul 2024 — Sep 2024",
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
  const timelineRef = useRef(null);
  const lineRef = useRef(null);
  const cardRefs = useRef([]);
  const barRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Grow the timeline line with scroll
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

      // Stagger card reveals
      gsap.fromTo(
        cardRefs.current.filter(Boolean),
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 75%",
          },
        }
      );

      // Animate expertise bars
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
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="relative z-[2] bg-bg-primary">
      <div className="section-padding max-container">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-label">Experience</span>
          <div className="flex-1 h-[1px] bg-border-subtle" />
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
          {/* Left — Heading */}
          <div>
            <h2 className="text-display font-display text-text-primary">
              Professional
              <br />
              Experience
            </h2>

            <div className="mt-8 flex gap-8">
              <div>
                <span className="text-3xl font-display text-accent">3+</span>
                <p className="text-xs text-text-tertiary uppercase tracking-wider mt-1">Years</p>
              </div>
              <div>
                <span className="text-3xl font-display text-accent">20+</span>
                <p className="text-xs text-text-tertiary uppercase tracking-wider mt-1">Projects</p>
              </div>
            </div>

            {/* Expertise bars */}
            <div className="mt-10 space-y-4">
              {expertiseAreas.map((area) => (
                <div key={area.name}>
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-text-secondary">{area.name}</span>
                    <span className="text-text-tertiary font-code">{area.level}%</span>
                  </div>
                  <div className="h-[2px] bg-border-subtle overflow-hidden">
                    <div
                      ref={(el) => { barRefs.current.push(el); }}
                      data-level={area.level}
                      className="h-full bg-accent will-change-transform"
                      style={{ width: 0 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Timeline */}
          <div ref={timelineRef} className="relative">
            {/* Vertical line */}
            <div
              ref={lineRef}
              className="absolute left-4 top-0 bottom-0 w-[1px] bg-accent hidden md:block"
            />

            <div className="space-y-12">
              {experiences.map((exp, i) => (
                <article
                  key={exp.job}
                  ref={(el) => { cardRefs.current[i] = el; }}
                  className="relative md:pl-12"
                >
                  {/* Timeline dot */}
                  <span className="hidden md:block absolute left-[11px] top-2 w-[9px] h-[9px] border-2 border-accent bg-bg-primary rounded-full" />

                  <p className="text-xs text-text-tertiary uppercase tracking-widest mb-2 font-code">
                    {exp.date}
                  </p>
                  <h3 className="text-xl md:text-2xl font-display text-text-primary">
                    {exp.job}
                  </h3>
                  <p className="text-sm text-accent mt-1">{exp.company}</p>

                  <ul className="mt-5 space-y-3">
                    {exp.responsibilities.map((resp, j) => (
                      <li
                        key={j}
                        className="text-sm text-text-secondary leading-relaxed flex gap-3"
                      >
                        <span className="text-text-tertiary mt-1 shrink-0">—</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  {i < experiences.length - 1 && (
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
