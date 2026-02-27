import { useEffect, useMemo, useRef, useState } from "react";
import { BsArrowRight, BsGithub } from "react-icons/bs";
import { gsap } from "../../lib/gsap";

const roles = [
  "Cybersecurity Student",
  "Frontend Developer",
  "Malware Analyst",
  "React Specialist",
];

const HeroText = () => {
  const wrapperRef = useRef(null);
  const charRefs = useRef([]);
  const roleRef = useRef(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const firstNameChars = useMemo(() => "Ramy".split(""), []);
  const lastNameChars = useMemo(() => "Bezriche".split(""), []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        charRefs.current,
        { y: 48, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "elastic.out(1, 0.8)",
          stagger: 0.03,
          delay: 0.18,
        }
      );

      gsap.fromTo(
        ".hero-line",
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power2.out", stagger: 0.12, delay: 0.45 }
      );

      gsap.fromTo(
        ".hero-cta",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.55, ease: "power2.out", stagger: 0.09, delay: 0.78 }
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
      { y: 18, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
    );
  }, [roleIndex]);

  return (
    <div ref={wrapperRef} className="text-center lg:text-left">
      <p className="hero-line uppercase tracking-[0.35em] text-[11px] sm:text-xs text-text-secondary font-semibold mb-4">
        Digital Alchemist
      </p>

      <h1 className="font-display text-[clamp(2.8rem,8.2vw,6.6rem)] font-extrabold leading-[0.92] text-text-primary mb-4">
        <span className="block">
          {firstNameChars.map((char, index) => (
            <span
              key={`first-${char}-${index}`}
              ref={(node) => {
                charRefs.current[index] = node;
              }}
              className="inline-block"
            >
              {char}
            </span>
          ))}
        </span>
        <span className="block">
          {lastNameChars.map((char, index) => (
            <span
              key={`last-${char}-${index}`}
              ref={(node) => {
                charRefs.current[firstNameChars.length + index] = node;
              }}
              className="inline-block"
            >
              {char}
            </span>
          ))}
        </span>
      </h1>

      <p ref={roleRef} className="hero-line gradient-text text-2xl sm:text-3xl md:text-4xl font-bold min-h-[2.4rem] sm:min-h-[3rem]">
        {roles[roleIndex]}
      </p>

      <p className="hero-line mt-6 text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl mx-auto lg:mx-0 leading-relaxed">
        Crafting secure digital experiences with modern front-end engineering, performance-first execution, and practical security depth.
      </p>

      <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
        <a
          className="hero-cta btn-primary"
          href="https://github.com/bezriche-ramy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub className="text-lg" />
          Explore GitHub
        </a>

        <a className="hero-cta btn-secondary" href="#projects">
          View Projects
          <BsArrowRight className="text-lg" />
        </a>
      </div>
    </div>
  );
};

export default HeroText;
