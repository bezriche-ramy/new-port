import { useEffect, useRef } from "react";
import { FaBug, FaGitAlt, FaJava, FaNodeJs, FaPython, FaReact, FaShieldAlt } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { SiJavascript, SiLinux, SiMongodb, SiMysql, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { gsap } from "../../lib/gsap";

const skillsData = [
  { skill: "Next.js", icon: SiNextdotjs, level: "Advanced", score: 92 },
  { skill: "React.js", icon: FaReact, level: "Advanced", score: 95 },
  { skill: "Malware Analysis", icon: FaBug, level: "Advanced", score: 90 },
  { skill: "Python", icon: FaPython, level: "Advanced", score: 89 },
  { skill: "Tailwind CSS", icon: SiTailwindcss, level: "Advanced", score: 91 },
  { skill: "Ghidra", icon: FaShieldAlt, level: "Advanced", score: 86 },
  { skill: "Node.js", icon: FaNodeJs, level: "Intermediate", score: 80 },
  { skill: "C/C++", icon: TbBrandCpp, level: "Intermediate", score: 79 },
  { skill: "MongoDB", icon: SiMongodb, level: "Intermediate", score: 78 },
  { skill: "JavaScript", icon: SiJavascript, level: "Advanced", score: 93 },
  { skill: "Linux", icon: SiLinux, level: "Advanced", score: 88 },
  { skill: "MySQL", icon: SiMysql, level: "Intermediate", score: 76 },
  { skill: "Java", icon: FaJava, level: "Intermediate", score: 77 },
  { skill: "Git & GitHub", icon: FaGitAlt, level: "Advanced", score: 90 },
];

const palette = [
  {
    panel: "bg-[#101722]",
    accent: "bg-cyan-300",
    icon: "bg-cyan-400/10 text-cyan-200",
    chip: "bg-cyan-400/10 text-cyan-100",
    meter: "bg-cyan-300",
  },
  {
    panel: "bg-[#14172a]",
    accent: "bg-indigo-300",
    icon: "bg-indigo-400/10 text-indigo-200",
    chip: "bg-indigo-400/10 text-indigo-100",
    meter: "bg-indigo-300",
  },
  {
    panel: "bg-[#11221d]",
    accent: "bg-emerald-300",
    icon: "bg-emerald-400/10 text-emerald-200",
    chip: "bg-emerald-400/10 text-emerald-100",
    meter: "bg-emerald-300",
  },
  {
    panel: "bg-[#26151b]",
    accent: "bg-rose-300",
    icon: "bg-rose-400/10 text-rose-200",
    chip: "bg-rose-400/10 text-rose-100",
    meter: "bg-rose-300",
  },
];

const AllSkills = () => {
  const gridRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const cards = cardRefs.current.filter(Boolean);

    if (!cards.length || !gridRef.current) {
      return undefined;
    }

    const shouldReduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (shouldReduceMotion) {
        gsap.set(cards, { opacity: 1, y: 0, scale: 1 });
        return;
      }

      gsap.fromTo(
        cards,
        { opacity: 0, y: 28, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.58,
          stagger: 0.06,
          ease: "power2.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
      {skillsData.map((item, index) => {
        const theme = palette[index % palette.length];

        return (
          <article
            key={item.skill}
            ref={(node) => {
              cardRefs.current[index] = node;
            }}
            className={`group relative overflow-hidden p-5 md:p-6 min-h-[200px] flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(6,14,28,0.55)] ${theme.panel}`}
          >
            <span className={`pointer-events-none absolute left-0 top-0 h-1 w-full ${theme.accent}`} />

            <div className="relative z-10 flex items-start justify-between">
              <div
                className={`h-11 w-11 flex items-center justify-center text-xl md:text-2xl transition-transform duration-200 group-hover:scale-105 ${theme.icon}`}
              >
                <item.icon />
              </div>
              <span className={`text-[10px] uppercase tracking-[0.18em] px-2.5 py-1 ${theme.chip}`}>
                {item.level}
              </span>
            </div>

            <div className="relative z-10 mt-4 space-y-2">
              <p className="font-semibold text-text-primary text-base leading-tight">{item.skill}</p>
              <p className="text-[11px] uppercase tracking-[0.14em] text-text-secondary">Skill Level</p>
            </div>

            <div className="relative z-10 mt-4">
              <div className="flex items-center justify-between text-xs text-text-secondary">
                <span>Confidence</span>
                <span>{item.score}%</span>
              </div>
              <div className="mt-2 h-[7px] bg-white/10 overflow-hidden">
                <div className={`h-full ${theme.meter}`} style={{ width: `${item.score}%` }} />
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default AllSkills;
