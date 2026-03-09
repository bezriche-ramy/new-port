import { useEffect, useRef } from "react";
import { gsap } from "../../lib/gsap";
import MagneticButton from "../MagneticButton";
import { scrollToSection } from "../../lib/scroll";

const detailBlocks = [
  {
    num: "01",
    title: "Profil",
    text: "Computer science student focused on cybersecurity, reverse engineering, and practical front-end delivery.",
  },
  {
    num: "02",
    title: "Formation",
    text: "State engineering cycle at USTHB (2022-2027), with specialization in security systems and software architecture.",
  },
  {
    num: "03",
    title: "Engagement",
    text: "Active in GDG Algeria and Shellmates communities, contributing to developer education and project mentorship.",
  },
];

const AboutMeMain = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const lineRefs = useRef([]);
  const blockRefs = useRef([]);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);
  const glowRefs = useRef([]);
  const frameRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const lines = lineRefs.current.filter(Boolean);
      const blocks = blockRefs.current.filter(Boolean);
      const glows = glowRefs.current.filter(Boolean);

      if (headingRef.current) {
        const words = headingRef.current.querySelectorAll(".word-mask");
        gsap.fromTo(
          words,
          { y: "115%", opacity: 0, rotateX: -45 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            stagger: 0.055,
            duration: 0.95,
            ease: "back.out(1.15)",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 68%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      if (lines.length) {
        gsap.fromTo(
          lines,
          { y: 36, opacity: 0, filter: "blur(6px)" },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            stagger: 0.12,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 64%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      if (blocks.length) {
        gsap.fromTo(
          blocks,
          { y: 56, opacity: 0, rotateX: -8 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            stagger: 0.14,
            duration: 0.82,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 62%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

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

      if (rightColRef.current) {
        gsap.to(rightColRef.current, {
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

      glows.forEach((glow, index) => {
        gsap.to(glow, {
          yPercent: index === 1 ? -18 : index === 2 ? 14 : -10,
          xPercent: index === 0 ? -8 : index === 2 ? 10 : 6,
          rotation: index % 2 === 0 ? 12 : -14,
          scale: index === 2 ? 1.18 : 1.08,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1 + index * 0.2,
          },
        });
      });

      if (frameRef.current) {
        gsap.fromTo(
          frameRef.current,
          { scaleX: 0.84, opacity: 0.18 },
          {
            scaleX: 1,
            opacity: 0.42,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.1,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const headingWords =
    "Building secure experiences with product-level polish".split(" ");

  return (
    <section id="about" ref={sectionRef} className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div
          ref={(el) => {
            glowRefs.current[0] = el;
          }}
          className="absolute left-[-8%] top-[8%] h-[280px] w-[280px] rounded-full opacity-70 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(196,255,0,0.18) 0%, transparent 68%)",
          }}
        />
        <div
          ref={(el) => {
            glowRefs.current[1] = el;
          }}
          className="absolute right-[4%] top-[22%] h-[340px] w-[340px] rounded-full opacity-60 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(116,247,212,0.16) 0%, transparent 70%)",
          }}
        />
        <div
          ref={(el) => {
            glowRefs.current[2] = el;
          }}
          className="absolute bottom-[10%] left-[34%] h-[240px] w-[240px] rounded-full opacity-40 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 72%)",
          }}
        />
        <div
          ref={frameRef}
          className="absolute inset-x-[8%] top-20 hidden h-[500px] border border-white/6 lg:block"
        />
        <div
          className="absolute inset-x-[10%] bottom-12 h-[220px] opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.45) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.45) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="section-padding max-container relative z-10">
        <div
          ref={(el) => {
            lineRefs.current[0] = el;
          }}
          className="mb-12 flex items-center gap-4"
        >
          <span className="text-label">About</span>
          <div className="h-[1px] flex-1 bg-border-subtle" />
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.35fr_1fr] lg:gap-24">
          <div ref={leftColRef}>
            <h2
              ref={headingRef}
              className="text-display font-display text-text-primary"
              style={{ perspective: "600px" }}
            >
              {headingWords.map((word) => (
                <span key={word} className="mr-[0.3em] inline-block overflow-hidden">
                  <span
                    className="word-mask inline-block will-change-transform"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {word}
                  </span>
                </span>
              ))}
            </h2>

            <p
              ref={(el) => {
                lineRefs.current[1] = el;
              }}
              className="mt-8 max-w-xl text-base leading-relaxed text-text-secondary md:text-lg"
            >
              I combine offensive-security thinking with clean UI engineering to
              create interfaces that are both dependable and memorable.
            </p>

            <div
              ref={(el) => {
                lineRefs.current[2] = el;
              }}
              className="mt-8 inline-flex items-center gap-3 border border-white/10 bg-white/[0.02] px-4 py-3 backdrop-blur-sm"
            >
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span className="text-[10px] font-code uppercase tracking-[0.32em] text-text-secondary">
                Secure by design
              </span>
            </div>

            <MagneticButton strength={0.35}>
              <button
                type="button"
                ref={(el) => {
                  lineRefs.current[3] = el;
                }}
                onClick={() => scrollToSection("projects", { offset: -80 })}
                className="mt-8 inline-flex items-center gap-3 text-sm text-accent transition-all duration-300 hover:gap-5"
                data-cursor="magnetic"
              >
                <span className="h-[1px] w-8 bg-accent" />
                View Projects
              </button>
            </MagneticButton>
          </div>

          <div ref={rightColRef} className="space-y-5">
            {detailBlocks.map((block, index) => (
              <div
                key={block.title}
                ref={(el) => {
                  blockRefs.current[index] = el;
                }}
                className="group relative overflow-hidden border border-transparent bg-white/[0.015] px-5 py-5 transition-all duration-500 hover:border-white/10 hover:bg-white/[0.03]"
              >
                <div className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-accent/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="flex items-start gap-4">
                  <span className="mt-1 text-xs font-code text-text-tertiary">
                    {block.num}
                  </span>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-text-primary transition-colors duration-300 group-hover:text-accent">
                      {block.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-text-secondary">
                      {block.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeMain;
