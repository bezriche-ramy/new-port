import SingleSkill from "./SingleSkill";
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaGitAlt, FaPython, FaJava } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiNextdotjs, SiTailwindcss, SiMysql, SiLinux } from "react-icons/si";
import { TbApi, TbBrandCpp } from "react-icons/tb";
import { BiTestTube } from "react-icons/bi";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  // Core Programming Languages
  { skill: "JavaScript", icon: SiJavascript },
  { skill: "TypeScript", icon: SiTypescript },
  { skill: "Python", icon: FaPython },
  { skill: "Java", icon: FaJava },
  { skill: "C/C++", icon: TbBrandCpp },
  // Frontend Technologies
  { skill: "React.js", icon: FaReact },
  { skill: "Next.js", icon: SiNextdotjs },
  { skill: "HTML5", icon: FaHtml5 },
  { skill: "CSS3", icon: FaCss3 },
  { skill: "Tailwind CSS", icon: SiTailwindcss },
  // Backend & Database
  { skill: "Node.js", icon: FaNodeJs },
  { skill: "MySQL", icon: SiMysql },
  { skill: "REST APIs", icon: TbApi },
  // Development Tools
  { skill: "Git", icon: FaGitAlt },
  { skill: "Linux", icon: SiLinux },
  { skill: "Testing", icon: BiTestTube }
];

const AllSkills = () => {
  return (
    <div className="bg-white rounded-lg shadow-card border border-gray-200 p-6 overflow-hidden">
      <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
        Core Technologies
      </h3>
      
      {/* Desktop View - Continuous scroll */}
      <div className="hidden md:block relative overflow-hidden hover:[animation-play-state:paused]">
        <div className="flex">
          <div className="animate-skill-loop flex gap-4 pl-6 shrink-0"
               style={{ willChange: 'transform' }}>
            {skills.map((item, index) => (
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon className="text-xl" />}
              />
            ))}
          </div>
          <div className="animate-skill-loop flex gap-4 pl-6 shrink-0"
               style={{ willChange: 'transform' }}>
            {skills.map((item, index) => (
              <SingleSkill
                key={`dup-${index}`}
                text={item.skill}
                imgSvg={<item.icon className="text-xl" />}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile View - Grid showing 2 items per row */}
      <div className="md:hidden grid grid-cols-2 gap-3">
        {skills.slice(0, 8).map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <SingleSkill
              text={item.skill}
              imgSvg={<item.icon className="text-xl" />}
            />
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-4">
        <p className="text-gray-600 text-sm">
          <span className="hidden md:inline">Hover to pause • </span>
          Continuously expanding skillset
        </p>
      </div>
    </div>
  );
};

export default AllSkills;
