import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython, FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiNextdotjs, SiMysql, SiLinux, SiWireshark, SiMetasploit, SiBurpsuite } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiGit } from "react-icons/di";
import { TbBrandCpp } from "react-icons/tb";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  { skill: "C/C++", icon: TbBrandCpp },
  { skill: "Java", icon: FaJava },
  { skill: "Python", icon: FaPython },
  { skill: "JavaScript", icon: IoLogoJavascript },
  { skill: "React.js", icon: FaReact },
  { skill: "Next.js", icon: SiNextdotjs },
  { skill: "HTML", icon: FaHtml5 },
  { skill: "CSS", icon: FaCss3Alt },
  { skill: "Tailwind", icon: RiTailwindCssFill },
  { skill: "Node.js", icon: FaNodeJs },
  { skill: "MySQL", icon: SiMysql },
  { skill: "Linux", icon: SiLinux },
  { skill: "Git", icon: DiGit },
  { skill: "Wireshark", icon: SiWireshark },
  { skill: "Metasploit", icon: SiMetasploit },
  { skill: "Burp Suite", icon: SiBurpsuite }
];

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            key={index}
            className="flex flex-col items-center"
          >
            <item.icon className="text-7xl text-orange" />
            <p className="text-center mt-4">{item.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;
