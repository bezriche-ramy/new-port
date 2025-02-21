import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import WaitingSection from './WaitingSection';

const projects = [
  {
    name: "GDG Hack Project",
    year: "2023",
    align: "right",
    image: "https://i.ibb.co/PZ6G8vD0/project1.png",
    demoLink: "https://gdg-hack.example.com",
    githubLink: "https://github.com/user/gdg-hack",
    description: "A collaborative project developed during GDG Hackathon",
    technologies: ["React", "Node.js", "MongoDB"]
  },
  {
    name: "Compiler Project",
    year: "2023",
    align: "left",
    image: "https://i.ibb.co/GvBXtM4y/project2.png",
    demoLink: "https://compiler.example.com",
    githubLink: "https://github.com/user/compiler",
    description: "Custom programming language compiler implementation",
    technologies: ["Python", "LLVM", "Flex", "Bison"]
  },
  {
    name: "Djezzy Internship Project",
    year: "2023",
    align: "right",
    image: "https://i.ibb.co/BVCP3xhM/project3.png",
    demoLink: "https://djezzy.example.com",
    githubLink: "https://github.com/user/djezzy",
    description: "Telecom management system developed during internship",
    technologies: ["Angular", "Spring Boot", "PostgreSQL"]
  },
  {
    name: "Python QSM",
    year: "2023",
    align: "left",
    image: "https://i.ibb.co/1Gj6v9Vr/project4.png",
    demoLink: "https://qsm.example.com",
    githubLink: "https://github.com/user/python-qsm",
    description: "Quality Service Management tool in Python",
    technologies: ["Python", "Django", "React", "Docker"]
  }
];


const ProjectsMain = () => {
  return (
    <>
      <div id="projects" className="max-w-[1200px] mx-auto px-4">
        <motion.div
          variants={fadeIn("top", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
        >
          <ProjectsText />
        </motion.div>
        <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
          {projects.map((project, index) => {
            return (
              <SingleProject
                key={index}
                {...project}
                isComingSoon={project.isComingSoon}
              />
            );
          })}
        </div>
      </div>
      <div className="w-full bg-gradient-to-b from-transparent to-cyan/5 mt-32 py-20">
        <WaitingSection />
      </div>
    </>
  );
};

export default ProjectsMain;
