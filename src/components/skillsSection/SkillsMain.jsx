import { useEffect, useRef } from "react";
import { gsap } from "../../lib/gsap";
import SkillLab from "./SkillLab";
import { domains, skillsData } from "./skillsData";

const SkillsMain = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const domainRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }

      // Domains
      gsap.fromTo(
        domainRefs.current.filter(Boolean),
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: domainRefs.current[0],
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Double the skills for infinite marquee
  const marqueeSkills = [...skillsData, ...skillsData];

  return (
    <section id="skills" ref={sectionRef} className="relative overflow-hidden">
      <div className="section-padding max-container">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-label">Skills</span>
          <div className="flex-1 h-[1px] bg-border-subtle" />
        </div>

        <div ref={headingRef}>
          <h2 className="text-display font-display text-text-primary max-w-3xl">
            Technical Arsenal
          </h2>
          <p className="mt-4 text-text-secondary max-w-xl">
            Development, security, and infrastructure capabilities used to ship
            resilient digital products.
          </p>
        </div>
      </div>

      {/* Infinite marquee — skills ticker */}
      <div className="mt-12 overflow-hidden border-t border-b border-border-subtle py-6">
        <div className="marquee-track">
          {marqueeSkills.map((item, i) => (
            <div
              key={`${item.skill}-${i}`}
              className="flex items-center gap-3 px-8 text-text-secondary hover:text-text-primary transition-colors duration-200 whitespace-nowrap"
            >
              <item.icon className="text-lg" />
              <span className="text-sm font-medium">{item.skill}</span>
              <span className="text-[10px] text-text-tertiary font-code">
                {item.score}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Reverse marquee */}
      <div className="overflow-hidden border-b border-border-subtle py-6">
        <div
          className="marquee-track"
          style={{ animationDirection: "reverse", animationDuration: "35s" }}
        >
          {[...marqueeSkills].reverse().map((item, i) => (
            <div
              key={`${item.skill}-rev-${i}`}
              className="flex items-center gap-3 px-8 text-text-secondary hover:text-text-primary transition-colors duration-200 whitespace-nowrap"
            >
              <item.icon className="text-lg" />
              <span className="text-sm font-medium">{item.skill}</span>
              <span className="text-[10px] text-text-tertiary font-code">
                {item.score}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Domain grid */}
      <div className="section-padding-sm max-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border-subtle">
          {domains.map((domain, i) => (
            <div
              key={domain.title}
              ref={(el) => { domainRefs.current[i] = el; }}
              className="bg-bg-primary p-6 md:p-8 group hover:bg-bg-elevated transition-colors duration-300"
            >
              <h3 className="text-text-primary font-semibold text-base mb-4 group-hover:text-accent transition-colors duration-300">
                {domain.title}
              </h3>
              <ul className="space-y-2">
                {domain.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-text-secondary flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-text-tertiary rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="section-padding-sm max-container pt-0">
        <SkillLab skills={skillsData} domains={domains} />
      </div>
    </section>
  );
};

export default SkillsMain;
