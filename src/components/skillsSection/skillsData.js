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
    id: "ux-audits",
    skill: "UX Audits",
    icon: FaBug,
    score: 90,
    domain: "Product Design",
    aliases: ["ux audit", "ui audit", "usability audit"],
    keywords: ["ux", "ui", "audit", "clarity", "journey", "conversion"],
  },
  {
    id: "workflow-automation",
    skill: "Workflow Automation",
    icon: FaPython,
    score: 89,
    domain: "Delivery",
    aliases: ["automation", "workflow automation"],
    keywords: ["automation", "process", "ops", "handoff", "workflow"],
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
    id: "launch-readiness",
    skill: "Launch Readiness",
    icon: SiLinux,
    score: 88,
    domain: "Delivery",
    aliases: ["launch", "deployment", "handoff"],
    keywords: ["launch", "deploy", "performance", "qa", "handoff"],
  },
  {
    id: "git",
    skill: "Git & GitHub",
    icon: FaGitAlt,
    score: 90,
    domain: "Delivery",
    aliases: ["git", "github", "version control"],
    keywords: ["ci", "automation", "workflow", "deploy", "team"],
  },
  {
    id: "design-systems",
    skill: "Design Systems",
    icon: FaShieldAlt,
    score: 86,
    domain: "Product Design",
    aliases: ["design system", "ui system"],
    keywords: ["components", "system", "consistency", "ui", "scale"],
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
    id: "interaction-logic",
    skill: "Interaction Logic",
    icon: TbBrandCpp,
    score: 79,
    domain: "Frontend",
    aliases: ["interaction", "motion logic"],
    keywords: ["interaction", "animation", "logic", "behavior", "ui"],
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
    items: ["React", "Next.js", "Responsive Layouts", "Motion & States"],
  },
  {
    title: "Product Design",
    items: ["UX Audits", "UI Systems", "Journey Clarity", "Conversion Thinking"],
  },
  {
    title: "Backend",
    items: ["Node.js", "REST APIs", "MongoDB", "MySQL"],
  },
  {
    title: "Delivery",
    items: ["Launch Readiness", "Git", "Automation", "Handoffs"],
  },
];

export const skillDomainMap = skillsData.reduce((acc, skill) => {
  acc[skill.id] = skill.domain || "Other";
  return acc;
}, {});
