import {
  FaBug,
  FaGitAlt,
  FaJava,
  FaNodeJs,
  FaPython,
  FaReact,
  FaShieldAlt,
} from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import {
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

/**
 * @typedef {Object} SkillItem
 * @property {string} id
 * @property {string} skill
 * @property {import("react").ComponentType} icon
 * @property {number} score
 * @property {string} domain
 * @property {string[]=} aliases
 * @property {string[]=} keywords
 */

/** @type {SkillItem[]} */
export const skillsData = [
  {
    id: "react",
    skill: "React.js",
    icon: FaReact,
    score: 95,
    domain: "Frontend",
    aliases: ["react", "reactjs"],
    keywords: ["ui", "frontend", "component", "dashboard", "responsive", "spa"],
  },
  {
    id: "next",
    skill: "Next.js",
    icon: SiNextdotjs,
    score: 92,
    domain: "Frontend",
    aliases: ["next", "nextjs"],
    keywords: ["landing", "seo", "frontend", "performance", "ssr", "fullstack"],
  },
  {
    id: "javascript",
    skill: "JavaScript",
    icon: SiJavascript,
    score: 93,
    domain: "Frontend",
    aliases: ["javascript", "js", "typescript"],
    keywords: ["interactive", "animation", "web", "frontend", "logic"],
  },
  {
    id: "malware-analysis",
    skill: "Malware Analysis",
    icon: FaBug,
    score: 90,
    domain: "Security",
    aliases: ["malware", "malware analysis"],
    keywords: ["malware", "reverse", "audit", "secure", "threat"],
  },
  {
    id: "python",
    skill: "Python",
    icon: FaPython,
    score: 89,
    domain: "Security",
    aliases: ["python", "automation scripting"],
    keywords: ["automation", "api", "analysis", "secure", "scripting"],
  },
  {
    id: "tailwind",
    skill: "Tailwind CSS",
    icon: SiTailwindcss,
    score: 91,
    domain: "Frontend",
    aliases: ["tailwind", "tailwindcss"],
    keywords: ["ui", "landing", "responsive", "design", "frontend"],
  },
  {
    id: "linux",
    skill: "Linux",
    icon: SiLinux,
    score: 88,
    domain: "DevOps",
    aliases: ["linux", "ubuntu", "kali"],
    keywords: ["server", "deploy", "automation", "devops", "hardening"],
  },
  {
    id: "git",
    skill: "Git & GitHub",
    icon: FaGitAlt,
    score: 90,
    domain: "DevOps",
    aliases: ["git", "github", "version control"],
    keywords: ["ci", "automation", "workflow", "deploy", "team"],
  },
  {
    id: "ghidra",
    skill: "Ghidra",
    icon: FaShieldAlt,
    score: 86,
    domain: "Security",
    aliases: ["ghidra", "reverse engineering"],
    keywords: ["reverse", "malware", "binary", "security", "audit"],
  },
  {
    id: "node",
    skill: "Node.js",
    icon: FaNodeJs,
    score: 80,
    domain: "Backend",
    aliases: ["node", "nodejs"],
    keywords: ["api", "server", "auth", "performance", "backend", "rest"],
  },
  {
    id: "cpp",
    skill: "C/C++",
    icon: TbBrandCpp,
    score: 79,
    domain: "Security",
    aliases: ["c", "c++", "cpp"],
    keywords: ["systems", "performance", "secure", "reverse", "low level"],
  },
  {
    id: "mongodb",
    skill: "MongoDB",
    icon: SiMongodb,
    score: 78,
    domain: "Backend",
    aliases: ["mongodb", "mongo"],
    keywords: ["database", "nosql", "backend", "api", "scalable"],
  },
  {
    id: "mysql",
    skill: "MySQL",
    icon: SiMysql,
    score: 76,
    domain: "Backend",
    aliases: ["mysql", "sql"],
    keywords: ["database", "sql", "query", "backend", "performance"],
  },
  {
    id: "java",
    skill: "Java",
    icon: FaJava,
    score: 77,
    domain: "Backend",
    aliases: ["java", "jvm"],
    keywords: ["backend", "server", "api", "performance", "enterprise"],
  },
];

export const domains = [
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

export const skillDomainMap = skillsData.reduce((acc, skill) => {
  acc[skill.id] = skill.domain || "Other";
  return acc;
}, {});
