import { useEffect, useRef } from "react";
import { gsap } from "../../lib/gsap";
import MagneticButton from "../MagneticButton";
import { scrollToSection } from "../../lib/scroll";

const detailBlocks = [
  {
    num: "01",
    title: "What I fix",
    text: "Confusing websites, weak first impressions, and interfaces that make customers work too hard to understand the offer.",
  },
  {
    num: "02",
    title: "How I work",
    text: "I turn business goals into structure, messaging, polished UI, and implementation-ready screens that feel intentional.",
  },
  {
    num: "03",
    title: "What you get",
    text: "A calmer, more credible product experience that helps people trust the business faster and move toward action.",
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

  const headingWords = "Design that makes businesses easier to trust".split(" ");

  return (
    <section id="about" ref={sectionRef} className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div
          ref={(element) => {
            glowRefs.current[0] = element;
          }}
          className="absolute left-[-8%] top-[8%] h-[280px] w-[280px] rounded-full opacity-70 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgb(var(--accent-rgb) / 0.18) 0%, transparent 68%)",
          }}
        />
        <div
          ref={(element) => {
            glowRefs.current[1] = element;
          }}
          className="absolute right-[4%] top-[22%] h-[340px] w-[340px] rounded-full opacity-60 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgb(var(--accent-secondary-rgb) / 0.16) 0%, transparent 70%)",
          }}
        />
        <div
          ref={(element) => {
            glowRefs.current[2] = element;
          }}
          className="absolute bottom-[10%] left-[34%] h-[240px] w-[240px] rounded-full opacity-40 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgb(var(--text-primary-rgb) / 0.08) 0%, transparent 72%)",
          }}
        />
        <div
          ref={frameRef}
          className="absolute inset-x-[8%] top-20 hidden h-[500px] border border-border-subtle lg:block"
        />
        <div
          className="absolute inset-x-[10%] bottom-12 h-[220px] opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgb(var(--hero-grid-rgb) / 0.26) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--hero-grid-rgb) / 0.26) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="section-padding max-container relative z-10">
        <div
          ref={(element) => {
            lineRefs.current[0] = element;
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
              ref={(element) => {
                lineRefs.current[1] = element;
              }}
              className="mt-8 max-w-xl text-base leading-relaxed text-text-secondary md:text-lg"
            >
              I help founders and service teams turn complex offers into calm,
              credible interfaces that guide people toward the next step with less
              friction.
            </p>

            <div
              ref={(element) => {
                lineRefs.current[2] = element;
              }}
              className="mt-8 inline-flex items-center gap-3 border border-border-medium bg-bg-elevated/70 px-4 py-3 backdrop-blur-sm"
            >
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span className="font-code text-[10px] uppercase tracking-[0.32em] text-text-secondary">
                UX/UI for clarity and conversion
              </span>
            </div>

            <MagneticButton strength={0.35}>
              <button
                type="button"
                ref={(element) => {
                  lineRefs.current[3] = element;
                }}
                onClick={() => scrollToSection("projects", { offset: -80 })}
                className="mt-8 inline-flex items-center gap-3 text-sm text-accent transition-all duration-300 hover:gap-5"
                data-cursor="magnetic"
              >
                <span className="h-[1px] w-8 bg-accent" />
                See Business Proof
              </button>
            </MagneticButton>
          </div>

          <div ref={rightColRef} className="space-y-5">
            {detailBlocks.map((block, index) => (
              <div
                key={block.title}
                ref={(element) => {
                  blockRefs.current[index] = element;
                }}
                className="group relative overflow-hidden border border-border-subtle bg-bg-elevated/60 px-5 py-5 transition-all duration-500 hover:border-border-medium hover:bg-bg-elevated"
              >
                <div className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-accent/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="flex items-start gap-4">
                  <span className="mt-1 font-code text-xs text-text-tertiary">
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
