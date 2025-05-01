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
                    sm:py-6 md:py-8 lg:py-10 border-t border-b border-accent/20">
      <div className="absolute inset-0 binary-rain opacity-10"></div>
      
      <div className="relative flex overflow-hidden hover:[animation-play-state:paused]">
        <div className="animate-skill-loop flex sm:gap-3 md:gap-4 lg:gap-6 pl-6 shrink-0"
             style={{ willChange: 'transform' }}>
          {skills.map((item, index) => (
            <SingleSkill
              key={index}
              text={item.skill}
              imgSvg={<item.icon className="sm:text-lg md:text-xl" />}
            />
          ))}
        </div>
        <div className="animate-skill-loop flex sm:gap-3 md:gap-4 lg:gap-6 pl-6 shrink-0"
             style={{ willChange: 'transform' }}>
          {skills.map((item, index) => (
            <SingleSkill
              key={`dup-${index}`}
              text={item.skill}
              imgSvg={<item.icon className="sm:text-lg md:text-xl" />}
            />
          ))}
        </div>
      </div>

      <div className="sm:block md:hidden text-center mt-3">
        <p className="text-accent/50 font-code text-xs">{">"} swipe to explore</p>
      </div>
    </div>
  );
};

export default AllSkills;
