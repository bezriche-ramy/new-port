import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import WaitingSection from './WaitingSection';

const projects = [
  {
    name: "Crypto Website",
    year: "2024-2025",
    align: "right",
    image: "https://i.ibb.co/VWTzzcKd/Screenshot-from-2025-05-01-16-53-08.png",
    demoLink: "https://crypto-project-sable-nu.vercel.app/",
    githubLink: "https://github.com/bezriche-ramy/crypto-project",
    description: "Advanced web-based encryption and decryption platform with modern cryptographic algorithms and secure file handling capabilities",
    technologies: ["React", "TailwindCSS", "CryptoJS", "Node.js"]
  },
  {
    name: "Tawba",
    year: "2024-2025",
    align: "left",
    isVideo: false,
    image: "https://i.ibb.co/RTfKYKRN/Screenshot-from-2025-05-02-13-19-31.png",
    demoLink: "https://tawba-a1af3.web.app/",
    githubLink: "https://github.com/bezriche-ramy/tawba",
    description: "Islamic application focused on spiritual growth and guidance",
    technologies: ["React", "TailwindCSS", "Firebase"]
  },
  {
    name: "GDG Hack Project",
    year: "2024-2025",
    align: "right",
    image: "https://i.ibb.co/PZ6G8vD0/project1.png",
    demoLink: "https://gdg-hack.example.com",
    githubLink: "https://github.com/user/gdg-hack",
    description: "A collaborative project developed during GDG Hackathon",
    technologies: ["React", "Node.js", "MongoDB"]
  },
  {
    name: "Simple Chat App",
    year: "2024-2025",
    align: "left",
    image: "https://i.ibb.co/ymmS94Jb/simplechatapp.png",
    demoLink: "https://simple-chat-app-z4te.onrender.com/",
    githubLink: "https://github.com/bezriche-ramy/simple-chat-app",
    description: "Real-time chat application built with Python",
    technologies: ["Python", "Flask", "WebSocket", "HTML/CSS"]
  },
  {
    name: "Vamos",
    year: "2024-2025",
    align: "right",
    image: "https://i.ibb.co/QjxH2Lz4/Screenshot-from-2025-02-24-17-39-54.png",
    demoLink: "https://islam04.pythonanywhere.com/",
    githubLink: "https://github.com/user/vamos",
    description: "Vamos application platform",
    technologies: ["Python", "Django", "React"]
  },
  {
    name: "Python QSM",
    year: "2024-2025",
    align: "left",
    image: "https://i.ibb.co/1Gj6v9Vr/project4.png",
    demoLink: "https://qsm.example.com",
    githubLink: "https://github.com/user/python-qsm",
    description: "Quality Service Management tool in Python",
    technologies: ["Python", "Django", "React", "Docker"]
  },
  {
    name: "Djezzy Internship Project",
    year: "2024-2025",
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
    <section className="section-background py-20">
      <div id="projects" className="section-container">
        <motion.div
          variants={fadeIn("top", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
        >
          <ProjectsText />
        </motion.div>
        <div className="grid grid-cols-1 gap-16 md:gap-24 mt-16">
          {projects.map((project, index) => (
            <SingleProject
              key={index}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsMain;
