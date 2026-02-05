import SingleSkill from "./SingleSkill";
import { FaReact, FaNodeJs, FaJava, FaPython, FaGitAlt, FaShieldAlt, FaBug } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiJavascript, SiMongodb, SiMysql, SiLinux } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Cybersécurité & Analyse",
    skills: [
      { skill: "IDA Pro", icon: FaShieldAlt },
      { skill: "Ghidra", icon: FaShieldAlt },
      { skill: "Malware Analysis", icon: FaBug },
    ]
  },
  {
    category: "Développement Web",
    skills: [
      { skill: "Next.js", icon: SiNextdotjs },
      { skill: "React.js", icon: FaReact },
      { skill: "Node.js", icon: FaNodeJs },
      { skill: "Tailwind CSS", icon: SiTailwindcss },
    ]
  },
  {
    category: "Programmation",
    skills: [
      { skill: "Python", icon: FaPython },
      { skill: "C/C++", icon: TbBrandCpp },
      { skill: "Java", icon: FaJava },
      { skill: "JavaScript", icon: SiJavascript },
    ]
  },
  {
    category: "Bases de Données & Outils",
    skills: [
      { skill: "MongoDB", icon: SiMongodb },
      { skill: "MySQL", icon: SiMysql },
      { skill: "Linux", icon: SiLinux },
      { skill: "Git & GitHub", icon: FaGitAlt },
    ]
  }
];

const AllSkills = () => {
  return (
    <div className="section-container">
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="section-title text-gray-900">Compétences Techniques</h2>
        <p className="text-gray-600 mt-4 max-w-2xl">
          Une boîte à outils complète alliant développement moderne et expertise en sécurité offensive.
        </p>
      </div>

      <div className="flex flex-col gap-12">
        {skillsData.map((group, groupIndex) => (
          <div key={groupIndex} className="relative">
            {/* Category Title with 3D Float */}
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-accent pl-4 flex items-center gap-2"
            >
              {group.category}
            </motion.h3>

            {/* 3D Grid for this Category */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 perspective-1000">
              {group.skills.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20, rotateX: -10 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  viewport={{ once: true }}
                >
                  <SingleSkill
                    text={item.skill}
                    imgSvg={<item.icon className="text-3xl" />}
                  />
                </motion.div>
              ))}
            </div>

            {/* Decorative Divider */}
            {groupIndex !== skillsData.length - 1 && (
              <div className="absolute -bottom-6 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllSkills;
