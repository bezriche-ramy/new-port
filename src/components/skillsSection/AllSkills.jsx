import SingleSkill from "./SingleSkill";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython, FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiNextdotjs, SiMysql, SiLinux, SiWireshark, SiMetasploit, SiBurpsuite } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiGit } from "react-icons/di";
import { TbBrandCpp } from "react-icons/tb";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  { skill: "HTML", icon: FaHtml5 },
  { skill: "CSS", icon: FaCss3Alt },
  { skill: "JavaScript", icon: IoLogoJavascript },
  { skill: "React.js", icon: FaReact },
  { skill: "Next.js", icon: SiNextdotjs },
  { skill: "Tailwind", icon: RiTailwindCssFill },
  { skill: "Node.js", icon: FaNodeJs },
  { skill: "C/C++", icon: TbBrandCpp },
  { skill: "Java", icon: FaJava },
  { skill: "Python", icon: FaPython },
  { skill: "MySQL", icon: SiMysql },
  { skill: "Linux", icon: SiLinux },
  { skill: "Git", icon: DiGit },
  { skill: "Wireshark", icon: SiWireshark },
  { skill: "Metasploit", icon: SiMetasploit },
  { skill: "Burp Suite", icon: SiBurpsuite }
];

const AllSkills = () => {
  return (
    <div className="relative w-full overflow-hidden bg-secondary/5 backdrop-blur-sm py-16">
      {/* Gradient fade edges */}
      <div className="absolute inset-y-0 left-0 w-[15%] bg-gradient-to-r from-background to-transparent z-20"></div>
      <div className="absolute inset-y-0 right-0 w-[15%] bg-gradient-to-l from-background to-transparent z-20"></div>
      
      <div className="relative flex overflow-hidden hover:[animation-play-state:paused] px-4">
        <div className="animate-skill-loop flex gap-8 pl-8 shrink-0">
          {skills.map((item, index) => (
            <SingleSkill
              key={index}
              text={item.skill}
              imgSvg={<item.icon />}
            />
          ))}
        </div>
        <div className="animate-skill-loop flex gap-8 pl-8 shrink-0">
          {skills.map((item, index) => (
            <SingleSkill
              key={`dup-${index}`}
              text={item.skill}
              imgSvg={<item.icon />}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllSkills;
