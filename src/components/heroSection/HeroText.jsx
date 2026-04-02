import { useEffect, useMemo, useRef, useState } from "react";
import { BsArrowRight, BsSend } from "react-icons/bs";
import { gsap } from "../../lib/gsap";
import MagneticButton from "../MagneticButton";
import { scrollToSection } from "../../lib/scroll";

const roles = [
  "UX/UI Designer for Business Owners",
  "Conversion-Focused Website Partner",
  "Product Designer Who Ships",
  "Interface Designer for Growth Teams",
];

const HeroText = () => {
  const wrapperRef = useRef(null);
  const firstLineRefs = useRef([]);
  const lastLineRefs = useRef([]);
  const roleRef = useRef(null);
  const [roleIndex, setRoleIndex] = useState(0);

  const firstNameChars = useMemo(() => "Ramy".split(""), []);
  const lastNameChars = useMemo(() => "Bezriche".split(""), []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const allChars = [...firstLineRefs.current, ...lastLineRefs.current].filter(Boolean);

      gsap.fromTo(
        allChars,
        { y: 120, rotateX: -90, opacity: 0, scale: 0.8 },
        {
          y: 0,
          rotateX: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "back.out(1.4)",
          stagger: {
            each: 0.04,
            from: "start",
          },
          delay: 2,
        }
      );

      gsap.fromTo(
        ".hero-reveal",
        { y: 50, opacity: 0, filter: "blur(4px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.15,
          delay: 2.8,
        }
      );
    }, wrapperRef);

    const interval = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length);
    }, 2600);

    return () => {
      window.clearInterval(interval);
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    if (!roleRef.current) {
      return;
    }

    gsap.fromTo(
      roleRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
    );
  }, [roleIndex]);

  return (
    <div ref={wrapperRef} style={{ perspective: "1000px" }}>
      <div className="hero-reveal mb-8">
        <span
          ref={roleRef}
          className="inline-block text-sm font-medium tracking-wide text-accent md:text-base"
        >
          {roles[roleIndex]}
        </span>
      </div>

      <h1 className="font-display text-hero leading-[0.88] tracking-tighter">
        <span className="block overflow-hidden pb-2">
          {firstNameChars.map((char, index) => (
            <span
              key={`first-${index}`}
              ref={(element) => {
                firstLineRefs.current[index] = element;
              }}
              className="inline-block will-change-transform"
              style={{ transformStyle: "preserve-3d" }}
            >
              {char}
            </span>
          ))}
        </span>
        <span className="block overflow-hidden pb-2">
          {lastNameChars.map((char, index) => (
            <span
              key={`last-${index}`}
              ref={(element) => {
                lastLineRefs.current[index] = element;
              }}
              className="inline-block will-change-transform"
              style={{ transformStyle: "preserve-3d" }}
            >
              {char}
            </span>
          ))}
          <span
            ref={(element) => {
              lastLineRefs.current[lastNameChars.length] = element;
            }}
            className="inline-block text-accent will-change-transform"
            style={{ transformStyle: "preserve-3d" }}
          >
            .
          </span>
        </span>
      </h1>

      <p className="hero-reveal mt-8 max-w-2xl text-base leading-relaxed text-text-secondary md:mt-12 md:text-lg">
        I design clear websites and product interfaces that help business owners
        explain their value faster, build trust quickly, and turn more visitors
        into qualified conversations.
      </p>

      <div className="hero-reveal mt-10 flex flex-col gap-4 sm:flex-row">
        <MagneticButton strength={0.3}>
          <button
            type="button"
            className="inline-flex items-center gap-3 bg-accent px-7 py-3.5 text-sm font-semibold text-bg-primary transition-all duration-300 hover:gap-5"
            onClick={() => scrollToSection("projects", { offset: -80 })}
            data-cursor="magnetic"
          >
            See Client Work
            <BsArrowRight className="text-lg" />
          </button>
        </MagneticButton>

        <MagneticButton strength={0.3}>
          <button
            type="button"
            className="inline-flex items-center gap-3 border border-border-medium px-7 py-3.5 text-sm font-medium text-text-primary transition-all duration-300 hover:gap-5 hover:border-text-primary"
            onClick={() => scrollToSection("contact", { offset: -80 })}
            data-cursor="magnetic"
          >
            Discuss Your Project
            <BsSend className="text-lg" />
          </button>
        </MagneticButton>
      </div>

      <div className="hero-reveal mt-16 flex flex-wrap items-center gap-5 text-xs uppercase tracking-widest text-text-tertiary md:gap-8">
        <span>Business-first UX/UI</span>
        <span className="h-[1px] w-10 bg-border-medium" />
        <span>White background ready</span>
        <span className="hidden h-[1px] w-10 bg-border-medium sm:block" />
        <span className="hidden sm:inline">Design plus frontend delivery</span>
      </div>
    </div>
  );
};

export default HeroText;
