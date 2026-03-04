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

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading text unmask with smoother, more pronounced reveal
      if (headingRef.current) {
        const words = headingRef.current.querySelectorAll(".word-mask");
        gsap.fromTo(
          words,
          { y: "120%", opacity: 0, rotateX: -40 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            stagger: 0.06,
            duration: 1,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }

      // Lines reveal with blur effect
      gsap.fromTo(
        lineRefs.current.filter(Boolean),
        { y: 30, opacity: 0, filter: "blur(4px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          stagger: 0.12,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Detail blocks with staggered slide-up
      gsap.fromTo(
        blockRefs.current.filter(Boolean),
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.14,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: blockRefs.current[0],
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Parallax: left column moves slightly slower than right
      if (leftColRef.current) {
        gsap.to(leftColRef.current, {
          yPercent: -4,
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
          yPercent: 3,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const headingWords = "Building secure experiences with product-level polish".split(" ");

  return (
    <section id="about" ref={sectionRef} className="relative">
      <div className="section-padding max-container">
        {/* Section label */}
        <div
          ref={(el) => { lineRefs.current[0] = el; }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="text-label">About</span>
          <div className="flex-1 h-[1px] bg-border-subtle" />
        </div>

        {/* Two-column asymmetric layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-16 lg:gap-24">
          {/* Left — Large heading with word-by-word reveal */}
          <div ref={leftColRef}>
            <h2
              ref={headingRef}
              className="text-display font-display text-text-primary"
              style={{ perspective: "600px" }}
            >
              {headingWords.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
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
              ref={(el) => { lineRefs.current[1] = el; }}
              className="mt-8 text-text-secondary text-base md:text-lg leading-relaxed max-w-lg"
            >
              I combine offensive-security thinking with clean UI engineering to
              create interfaces that are both dependable and memorable.
            </p>

            <MagneticButton strength={0.35}>
              <button
                type="button"
                ref={(el) => { lineRefs.current[2] = el; }}
                onClick={() => scrollToSection("projects", { offset: -80 })}
                className="inline-flex items-center gap-3 mt-8 text-sm text-accent hover:gap-5 transition-all duration-300"
                data-cursor="magnetic"
              >
                <span className="w-8 h-[1px] bg-accent" />
                View Projects
              </button>
            </MagneticButton>
          </div>

          {/* Right — Detail blocks */}
          <div ref={rightColRef} className="space-y-8">
            {detailBlocks.map((block, i) => (
              <div
                key={block.title}
                ref={(el) => { blockRefs.current[i] = el; }}
                className="group"
              >
                <div className="flex items-start gap-4">
                  <span className="text-xs font-code text-text-tertiary mt-1">
                    {block.num}
                  </span>
                  <div>
                    <h3 className="text-text-primary font-semibold text-lg mb-2 group-hover:text-accent transition-colors duration-300">
                      {block.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {block.text}
                    </p>
                  </div>
                </div>
                {i < detailBlocks.length - 1 && (
                  <div className="mt-8 h-[1px] bg-border-subtle" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeMain;
