import { useEffect, useMemo, useRef, useState } from "react";
import { BsArrowRight, BsGithub } from "react-icons/bs";
import { gsap } from "../../lib/gsap";
import MagneticButton from "../MagneticButton";

const roles = [
  "Cybersecurity Student",
  "Frontend Developer",
  "Malware Analyst",
  "React Specialist",
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
      // Cinematic character reveal with 3D flip
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
          delay: 2.0,
        }
      );

      // Subtitle and CTA reveal with staggered slide-up
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
      setRoleIndex((c) => (c + 1) % roles.length);
    }, 2600);

    return () => {
      window.clearInterval(interval);
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    if (!roleRef.current) return;
    gsap.fromTo(
      roleRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
    );
  }, [roleIndex]);

  return (
    <div ref={wrapperRef} style={{ perspective: "1000px" }}>
      {/* Role tag */}
      <div className="hero-reveal mb-8">
        <span
          ref={roleRef}
          className="inline-block text-sm md:text-base text-accent font-medium tracking-wide"
        >
          {roles[roleIndex]}
        </span>
      </div>

      {/* Giant name — typography as primary visual */}
      <h1 className="font-display text-hero leading-[0.88] tracking-tighter">
        <span className="block overflow-hidden pb-2">
          {firstNameChars.map((char, i) => (
            <span
              key={`f-${i}`}
              ref={(el) => { firstLineRefs.current[i] = el; }}
              className="inline-block will-change-transform"
              style={{ transformStyle: "preserve-3d" }}
            >
              {char}
            </span>
          ))}
        </span>
        <span className="block overflow-hidden pb-2">
          {lastNameChars.map((char, i) => (
            <span
              key={`l-${i}`}
              ref={(el) => { lastLineRefs.current[i] = el; }}
              className="inline-block will-change-transform"
              style={{ transformStyle: "preserve-3d" }}
            >
              {char}
            </span>
          ))}
          <span
            className="inline-block will-change-transform text-accent"
            ref={(el) => { lastLineRefs.current[lastNameChars.length] = el; }}
            style={{ transformStyle: "preserve-3d" }}
          >
            .
          </span>
        </span>
      </h1>

      {/* Description */}
      <p className="hero-reveal mt-8 md:mt-12 text-base md:text-lg text-text-secondary max-w-xl leading-relaxed">
        Crafting secure digital experiences with modern front-end engineering,
        performance-first execution, and practical security depth.
      </p>

      {/* CTA Row */}
      <div className="hero-reveal mt-10 flex flex-col sm:flex-row gap-4">
        <MagneticButton strength={0.3}>
          <a
            className="inline-flex items-center gap-3 px-7 py-3.5 bg-accent text-bg-primary text-sm font-semibold hover:gap-5 transition-all duration-300"
            href="https://github.com/bezriche-ramy"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="magnetic"
          >
            <BsGithub className="text-lg" />
            Explore GitHub
          </a>
        </MagneticButton>

        <MagneticButton strength={0.3}>
          <a
            className="inline-flex items-center gap-3 px-7 py-3.5 border border-border-medium text-text-primary text-sm font-medium hover:border-text-primary hover:gap-5 transition-all duration-300"
            href="#projects"
            data-cursor="magnetic"
          >
            View Projects
            <BsArrowRight className="text-lg" />
          </a>
        </MagneticButton>
      </div>

      {/* Horizontal info line */}
      <div className="hero-reveal mt-16 flex items-center gap-8 text-xs text-text-tertiary uppercase tracking-widest">
        <span>Based in Algiers</span>
        <span className="w-12 h-[1px] bg-border-medium" />
        <span>3+ Years Experience</span>
        <span className="w-12 h-[1px] bg-border-medium hidden sm:block" />
        <span className="hidden sm:inline">20+ Projects</span>
      </div>
    </div>
  );
};

export default HeroText;
