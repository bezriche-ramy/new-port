import SingleSkill from "./SingleSkill";
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaGitAlt, FaDocker, FaNpm, FaDatabase } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, SiFirebase, SiRedux, SiVite } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { BiTestTube } from "react-icons/bi";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  { skill: "React.js", icon: FaReact },
  { skill: "Next.js", icon: SiNextdotjs },
  { skill: "JavaScript", icon: SiJavascript },
  { skill: "TypeScript", icon: SiTypescript },
  { skill: "Node.js", icon: FaNodeJs },
  { skill: "HTML5", icon: FaHtml5 },
  { skill: "CSS3", icon: FaCss3 },
  { skill: "Tailwind CSS", icon: SiTailwindcss },
  { skill: "Redux", icon: SiRedux },
  { skill: "Vite", icon: SiVite },
  { skill: "MongoDB", icon: SiMongodb },
  { skill: "Firebase", icon: SiFirebase },
  { skill: "REST APIs", icon: TbApi },
  { skill: "Git", icon: FaGitAlt },
  { skill: "Docker", icon: FaDocker },
  { skill: "NPM", icon: FaNpm },
  { skill: "SQL", icon: FaDatabase },
  { skill: "Testing", icon: BiTestTube }
];

const AllSkills = () => {
  return (
    <div className="relative w-full overflow-hidden bg-black/30 backdrop-blur-sm 
                    sm:py-8 md:py-12 lg:py-16 border-t border-b border-accent/20">
      <div className="absolute inset-0 binary-rain opacity-20"></div>
      
      <div className="relative flex overflow-hidden hover:[animation-play-state:paused] 
                    sm:px-2 md:px-4">
        <div className="animate-skill-loop flex sm:gap-4 md:gap-6 lg:gap-8 pl-8 shrink-0">
          {skills.map((item, index) => (
            <SingleSkill
              key={index}
              text={item.skill}
              imgSvg={<item.icon className="sm:text-xl md:text-2xl" />}
            />
          ))}
        </div>
        <div className="animate-skill-loop flex sm:gap-4 md:gap-6 lg:gap-8 pl-8 shrink-0">
          {skills.map((item, index) => (
            <SingleSkill
              key={`dup-${index}`}
              text={item.skill}
              imgSvg={<item.icon className="sm:text-xl md:text-2xl" />}
            />
          ))}
        </div>
      </div>

      {/* Mobile touch hint */}
      <div className="sm:block md:hidden text-center mt-4">
        <p className="text-accent/50 font-code text-xs">{">"} swipe to explore</p>
      </div>
    </div>
  );
};

export default AllSkills;
