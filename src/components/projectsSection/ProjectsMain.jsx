import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";

const projects = [
  {
    name: "Trading Dashboard",
    year: "2025",
    align: "right",
    image: "https://i.ibb.co/XfNNR1nj/Screenshot-2026-02-04-145339.png",
    demoLink: "#",
    githubLink: "https://github.com/bezriche-ramy/",
    description: "Interactive finance dashboard with real-time market visualizations and user portfolio tracking.",
    technologies: ["React", "Tailwind CSS", "Charting"],
  },
  {
    name: "CryptDecrypt",
    year: "2024",
    align: "left",
    image: "https://i.ibb.co/VWTzzcKd/Screenshot-from-2025-05-01-16-53-08.png",
    demoLink: "https://crypto-project-sable-nu.vercel.app/",
    githubLink: "https://github.com/bezriche-ramy/crypto-project",
    description: "Cryptography playground implementing multiple encryption/decryption algorithms with educational visual feedback.",
    technologies: ["Java", "Python", "Security"],
  },
  {
    name: "Cloud Security Lab",
    year: "2024",
    align: "right",
    image: "https://media.licdn.com/dms/image/v2/D4E12AQG7P3VLCqaD7Q/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1711223766818",
    demoLink: "#",
    githubLink: "https://github.com/bezriche-ramy/",
    description: "Virtualized penetration-testing environment focused on hardening and attack-surface reduction.",
    technologies: ["Virtualization", "Cloud", "Security"],
  },
  {
    name: "Tawba",
    year: "2024",
    align: "left",
    image: "https://i.ibb.co/RTfKYKRN/Screenshot-from-2025-05-02-13-19-31.png",
    demoLink: "https://tawba-a1af3.web.app/",
    githubLink: "https://github.com/bezriche-ramy/tawba",
    description: "Faith-focused platform with dynamic content, dark/light themes, and progressive user interactions.",
    technologies: ["Next.js", "Tailwind CSS", "Firebase"],
  },
  {
    name: "VAMOS",
    year: "2024",
    align: "right",
    image: "https://i.ibb.co/QjxH2Lz4/Screenshot-from-2025-02-24-17-39-54.png",
    demoLink: "https://islam04.pythonanywhere.com/",
    githubLink: "https://github.com/user/vamos",
    description: "Travel-agency management platform for package booking, itinerary operations, and customer workflows.",
    technologies: ["Full Stack", "Booking Systems"],
  },
  {
    name: "KPI Analyzer",
    year: "2024",
    align: "left",
    image: "https://i.ibb.co/BVCP3xhM/project3.png",
    demoLink: "#",
    githubLink: "https://github.com/user/djezzy",
    description: "Telecom KPI analysis suite with alerting, visual reporting, and operational trend insights.",
    technologies: ["Data Analysis", "Reporting"],
  },
];

const ProjectsMain = () => {
  return (
    <section id="projects" className="relative">
      <div className="section-container">
        <ProjectsText />

        <div className="mt-14 grid grid-cols-1 gap-10 md:gap-12">
          {projects.map((project) => (
            <SingleProject key={project.name} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsMain;
