import { useEffect, useRef } from "react";
import { gsap } from "../../lib/gsap";

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

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading text unmask on scroll
      if (headingRef.current) {
        const words = headingRef.current.querySelectorAll(".word-mask");
        gsap.fromTo(
          words,
          { y: "100%", opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.08,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
            },
          }
        );
      }

      // Lines reveal
      gsap.fromTo(
        lineRefs.current.filter(Boolean),
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
          },
        }
      );

      // Detail blocks
      gsap.fromTo(
        blockRefs.current.filter(Boolean),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.14,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: blockRefs.current[0],
            start: "top 80%",
          },
        }
      );
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
          <div>
            <h2
              ref={headingRef}
              className="text-display font-display text-text-primary"
            >
              {headingWords.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
                  <span className="word-mask inline-block will-change-transform">
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

            <a
              ref={(el) => { lineRefs.current[2] = el; }}
              href="#projects"
              className="inline-flex items-center gap-3 mt-8 text-sm text-accent hover:gap-5 transition-all duration-300"
              data-cursor="magnetic"
            >
              <span className="w-8 h-[1px] bg-accent" />
              View Projects
            </a>
          </div>

          {/* Right — Detail blocks */}
          <div className="space-y-8">
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
