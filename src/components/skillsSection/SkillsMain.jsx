import { useEffect, useRef } from "react";
import { FaBug, FaGitAlt, FaJava, FaNodeJs, FaPython, FaReact, FaShieldAlt } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { SiJavascript, SiLinux, SiMongodb, SiMysql, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { gsap } from "../../lib/gsap";

const skillsData = [
  { skill: "React.js", icon: FaReact, score: 95 },
  { skill: "Next.js", icon: SiNextdotjs, score: 92 },
  { skill: "JavaScript", icon: SiJavascript, score: 93 },
  { skill: "Malware Analysis", icon: FaBug, score: 90 },
  { skill: "Python", icon: FaPython, score: 89 },
  { skill: "Tailwind CSS", icon: SiTailwindcss, score: 91 },
  { skill: "Linux", icon: SiLinux, score: 88 },
  { skill: "Git & GitHub", icon: FaGitAlt, score: 90 },
  { skill: "Ghidra", icon: FaShieldAlt, score: 86 },
  { skill: "Node.js", icon: FaNodeJs, score: 80 },
  { skill: "C/C++", icon: TbBrandCpp, score: 79 },
  { skill: "MongoDB", icon: SiMongodb, score: 78 },
  { skill: "MySQL", icon: SiMysql, score: 76 },
  { skill: "Java", icon: FaJava, score: 77 },
];

const domains = [
  {
    title: "Frontend",
    items: ["React", "JavaScript/TypeScript", "Responsive Design", "Redux"],
  },
  {
    title: "Backend",
    items: ["Node.js", "REST APIs", "Databases", "Server Security"],
  },
  {
    title: "Security",
    items: ["Pentesting", "Malware Analysis", "Reverse Engineering", "Audits"],
  },
  {
    title: "DevOps",
    items: ["Git", "Docker", "Linux", "CI/CD"],
  },
];

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
    </section>
  );
};

export default SkillsMain;
