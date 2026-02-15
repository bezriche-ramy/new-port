import SingleSkill from "./SingleSkill";
import { FaReact, FaNodeJs, FaJava, FaPython, FaGitAlt, FaShieldAlt, FaBug } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiJavascript, SiMongodb, SiMysql, SiLinux } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { motion } from "framer-motion";

// Bento Grid layout - different sized cards for visual interest
const skillsData = [
  { skill: "Next.js", icon: SiNextdotjs, size: "large", category: "Frontend" },
  { skill: "React.js", icon: FaReact, size: "medium", category: "Frontend" },
  { skill: "IDA Pro", icon: FaShieldAlt, size: "large", category: "Security" },
  { skill: "Python", icon: FaPython, size: "medium", category: "Programming" },
  { skill: "Tailwind CSS", icon: SiTailwindcss, size: "small", category: "Frontend" },
  { skill: "Ghidra", icon: FaShieldAlt, size: "medium", category: "Security" },
  { skill: "Node.js", icon: FaNodeJs, size: "small", category: "Backend" },
  { skill: "C/C++", icon: TbBrandCpp, size: "medium", category: "Programming" },
  { skill: "Malware Analysis", icon: FaBug, size: "large", category: "Security" },
  { skill: "MongoDB", icon: SiMongodb, size: "small", category: "Database" },
  { skill: "JavaScript", icon: SiJavascript, size: "medium", category: "Programming" },
  { skill: "Linux", icon: SiLinux, size: "small", category: "DevOps" },
  { skill: "MySQL", icon: SiMysql, size: "small", category: "Database" },
  { skill: "Java", icon: FaJava, size: "medium", category: "Programming" },
  { skill: "Git & GitHub", icon: FaGitAlt, size: "small", category: "DevOps" },
];

const AllSkills = () => {
  // Bento Grid size mapping
  const getSizeClass = (size) => {
    switch (size) {
      case "large": return "col-span-2 row-span-2";
      case "medium": return "col-span-1 row-span-1";
      case "small": return "col-span-1 row-span-1";
      default: return "col-span-1 row-span-1";
    }
  };

  return (
    <div className="section-container">
      {/* Premium Title Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center text-center mb-20"
      >
        <h2 className="section-title gradient-text mb-6">
          Technical Arsenal
        </h2>
        <p className="text-black text-xl max-w-3xl">
          A complete toolkit combining modern development with offensive security expertise
        </p>
      </motion.div>

      {/* Bento Grid Layout - Uneven, Visual Interest */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] gap-6 perspective-1000">
        {skillsData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: index * 0.05, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className={`${getSizeClass(item.size)} relative group`}
          >
            {/* Glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-electric/0 to-accent/0 group-hover:from-accent/20 group-hover:via-electric/20 group-hover:to-accent/20 rounded-3xl blur-xl transition-all duration-500 -z-10" />

            <div className="w-full h-full">
              <BentoSkillCard
                text={item.skill}
                icon={item.icon}
                category={item.category}
                size={item.size}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Bento-style skill card
const BentoSkillCard = ({ text, icon: Icon, category, size }) => {
  return (
    <div className="w-full h-full bg-slate/40 backdrop-blur-glass border border-white/10 rounded-3xl p-6 flex flex-col justify-between hover:border-accent/50 hover:shadow-glow-cyan transition-all duration-500 group hover:scale-105 hover-magnetic">
      {/* Category Badge */}
      <div className="flex items-start justify-between">
        <span className="text-xs font-bold text-accent/70 uppercase tracking-wider">
          {category}
        </span>
        {size === "large" && (
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
        )}
      </div>

      {/* Icon - Large and centered for large cards */}
      <div className={`flex items-center justify-center ${size === "large" ? "text-7xl" : "text-4xl"} text-black group-hover:text-accent transition-colors duration-300`}>
        <Icon />
      </div>

      {/* Skill Name */}
      <div className="text-center">
        <p className={`font-black text-black ${size === "large" ? "text-2xl" : "text-base"} tracking-tight`}>
          {text}
        </p>
      </div>
    </div>
  );
};

export default AllSkills;
