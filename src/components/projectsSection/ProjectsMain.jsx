import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import WaitingSection from './WaitingSection';

const projects = [
  {
    name: "Trading Dashboard",
    year: "2025",
    align: "right",
    image: "https://i.ibb.co/XfNNR1nj/Screenshot-2026-02-04-145339.png",
    demoLink: "#",
    githubLink: "https://github.com/bezriche-ramy/",
    description: "Tableau de bord financier interactif. Visualisation de données boursières en temps réel et gestion de portefeuille utilisateur.",
    technologies: ["React", "Tailwind CSS"]
  },
  {
    name: "CryptDecrypt",
    year: "2024",
    align: "left",
    image: "https://i.ibb.co/VWTzzcKd/Screenshot-from-2025-05-01-16-53-08.png",
    demoLink: "https://crypto-project-sable-nu.vercel.app/",
    githubLink: "https://github.com/bezriche-ramy/crypto-project",
    description: "Application de démonstration de cryptographie incluant l'implémentation de plusieurs algorithmes de chiffrement.",
    technologies: ["Java", "Python"]
  },
  {
    name: "Cloud Security Lab",
    year: "2024",
    align: "right",
    image: "https://media.licdn.com/dms/image/v2/D4E12AQG7P3VLCqaD7Q/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1711223766818?e=2147483647&v=beta&t=MO8tFuYsLJQcNNCAsvZ_Fu8g4yp2ILtgbDvz5e_uN4I",
    demoLink: "#",
    githubLink: "https://github.com/bezriche-ramy/",
    description: "Environnement de test d'intrusion virtualisé avec renforcement de la sécurité (Hardening).",
    technologies: ["Virtualisation", "Security"]
  },
  {
    name: "Tawba",
    year: "2024",
    align: "left",
    image: "https://i.ibb.co/RTfKYKRN/Screenshot-from-2025-05-02-13-19-31.png",
    demoLink: "https://tawba-a1af3.web.app/",
    githubLink: "https://github.com/bezriche-ramy/tawba",
    description: "Plateforme sur le thème du Ramadan. Inclut des modes sombre/clair, des ressources coraniques et des réflexions quotidiennes.",
    technologies: ["Next.js", "Tailwind CSS"]
  },
  {
    name: "VAMOS",
    year: "2024",
    align: "right",
    image: "https://i.ibb.co/QjxH2Lz4/Screenshot-from-2025-02-24-17-39-54.png",
    demoLink: "https://islam04.pythonanywhere.com/",
    githubLink: "https://github.com/user/vamos",
    description: "Application web pour agences de voyage : gestion et réservation de forfaits, suivi d'itinéraires et interaction client.",
    technologies: ["Full Stack"]
  },
  {
    name: "Green Eat",
    year: "2024",
    align: "left",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    demoLink: "#",
    githubLink: "https://github.com/bezriche-ramy/",
    description: "Application web axée sur la santé et l'alimentation. Plans de repas, informations nutritionnelles et suivi du bien-être.",
    technologies: ["React"]
  },
  {
    name: "Compiler",
    year: "2024",
    align: "right",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    demoLink: "#",
    githubLink: "https://github.com/bezriche-ramy/",
    description: "Créé pour l'analyse lexicale et syntaxique, incluant la gestion complète des rapports d'erreurs.",
    technologies: ["C", "Flex/Bison"]
  },
  {
    name: "KPI Analyzer",
    year: "2024",
    align: "left",
    image: "https://i.ibb.co/BVCP3xhM/project3.png",
    demoLink: "#",
    githubLink: "https://github.com/user/djezzy",
    description: "Outil d'analyse des KPI télécom pour la gestion des alertes, la visualisation des données et l'automatisation.",
    technologies: ["Data Analysis"]
  },
];

const ProjectsMain = () => {
  return (
    <section className="py-20">
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
