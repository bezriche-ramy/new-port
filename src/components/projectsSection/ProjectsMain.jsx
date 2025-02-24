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
    name: "Simple Chat App",
    year: "2025",
    align: "left",
    image: "https://i.ibb.co/ymmS94Jb/simplechatapp.png",
    demoLink: "https://simple-chat-app-z4te.onrender.com/",
    githubLink: "https://github.com/bezriche-ramy/simple-chat-app",
    description: "Real-time chat application built with Python",
    technologies: ["Python", "Flask", "WebSocket", "HTML/CSS"]
  },
  {
    name: "Vamos",
    year: "2025",
    align: "right",
    image: "https://i.ibb.co/QjxH2Lz4/Screenshot-from-2025-02-24-17-39-54.png",
    demoLink: "https://islam04.pythonanywhere.com/",
    githubLink: "https://github.com/user/vamos",
    description: "Vamos application platform",
    technologies: ["Python", "Django", "React"]
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
