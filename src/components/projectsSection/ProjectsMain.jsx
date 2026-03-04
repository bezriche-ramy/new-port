import { useEffect, useRef } from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { gsap, ScrollTrigger } from "../../lib/gsap";

const projects = [
  {
    name: "Trading Dashboard",
    year: "2025",
    image: "https://i.ibb.co/Jjtfj6K9/image.png",
    demoLink: "#",
    githubLink: "https://github.com/bezriche-ramy/",
    description:
      "Interactive finance dashboard with real-time market visualizations and user portfolio tracking.",
    technologies: ["React", "Tailwind CSS", "Charting"],
  },
  {
    name: "CryptDecrypt",
    year: "2024",
    image: "https://i.ibb.co/VWTzzcKd/Screenshot-from-2025-05-01-16-53-08.png",
    demoLink: "https://crypto-project-sable-nu.vercel.app/",
    githubLink: "https://github.com/bezriche-ramy/crypto-project",
    description:
      "Cryptography playground implementing multiple encryption/decryption algorithms with educational visual feedback.",
    technologies: ["Java", "Python", "Security"],
  },
  {
    name: "Cloud Security Lab",
    year: "2024",
    image: "https://i.ibb.co/GQdDKqGS/image.png",
    demoLink: "#",
    githubLink: "https://github.com/bezriche-ramy/",
    description:
      "Virtualized penetration-testing environment focused on hardening and attack-surface reduction.",
    technologies: ["Virtualization", "Cloud", "Security"],
  },
  {
    name: "Tawba",
    year: "2024",
    image: "https://i.ibb.co/RTfKYKRN/Screenshot-from-2025-05-02-13-19-31.png",
    demoLink: "https://tawba-a1af3.web.app/",
    githubLink: "https://github.com/bezriche-ramy/tawba",
    description:
      "Faith-focused platform with dynamic content, dark/light themes, and progressive user interactions.",
    technologies: ["Next.js", "Tailwind CSS", "Firebase"],
  },
  {
    name: "VAMOS",
    year: "2024",
    image: "https://i.ibb.co/QjxH2Lz4/Screenshot-from-2025-02-24-17-39-54.png",
    demoLink: "https://islam04.pythonanywhere.com/",
    githubLink: "https://github.com/user/vamos",
    description:
      "Travel-agency management platform for package booking, itinerary operations, and customer workflows.",
    technologies: ["Full Stack", "Booking Systems"],
  },
  {
    name: "KPI Analyzer",
    year: "2024",
    image: "https://i.ibb.co/WSMx6DR/image.png",
    demoLink: "#",
    githubLink: "https://github.com/user/djezzy",
    description:
      "Telecom KPI analysis suite with alerting, visual reporting, and operational trend insights.",
    technologies: ["Data Analysis", "Reporting"],
  },
  {
    name: "EcoWebDZ",
    year: "2025",
    image: "https://i.ibb.co/spVhbsH9/image.png",
    demoLink: "https://ecowebdz.vercel.app/en",
    githubLink: "https://github.com/bezriche-ramy/",
    description:
      "Landing page generator that helps businesses showcase their products with polished, conversion-focused web pages.",
    technologies: ["Next.js", "Tailwind CSS", "Vercel"],
  },
  {
    name: "Mehdi Doctor",
    year: "2025",
    image: "https://i.ibb.co/hRsPRspK/image.png",
    demoLink: "https://medhi-doctor.vercel.app/",
    githubLink: "https://github.com/bezriche-ramy/",
    description:
      "Management system for a veterinary doctor — appointments, patient records, and clinic workflow automation.",
    technologies: ["React", "Full Stack", "Dashboard"],
  },
];

const ProjectsMain = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return undefined;

    const ctx = gsap.context(() => {
      // Header reveal
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
            },
          }
        );
      }

      // Horizontal scroll — stop exactly when last card is fully visible
      const getScrollAmount = () => {
        return -(track.scrollWidth - window.innerWidth);
      };

      gsap.to(track, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${Math.abs(getScrollAmount())}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="relative z-[1] bg-bg-primary overflow-hidden">
      {/* Sticky header area inside the pinned section */}
      <div className="section-padding-sm max-container" ref={headerRef}>
        <div className="flex items-center gap-4 mb-6">
          <span className="text-label">Projects</span>
          <div className="flex-1 h-[1px] bg-border-subtle" />
          <span className="text-xs text-text-tertiary font-code">
            {String(projects.length).padStart(2, "0")} Works
          </span>
        </div>
        <h2 className="text-display font-display text-text-primary">
          Selected Work
        </h2>
      </div>

      {/* Horizontal scroll track */}
      <div
        ref={trackRef}
        className="flex gap-6 md:gap-8 pl-6 md:pl-10 pr-6 md:pr-10 pt-8 pb-16"
        style={{ width: "max-content" }}
      >
        {projects.map((project, i) => (
          <article
            key={project.name}
            className="group relative w-[85vw] sm:w-[70vw] md:w-[50vw] lg:w-[40vw] shrink-0 flex flex-col"
          >
            {/* Image with hover reveal */}
            <div className="relative overflow-hidden bg-bg-elevated aspect-[16/10]">
              <img
                src={project.image}
                alt={`${project.name} preview`}
                loading="lazy"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-700"
              />
              {/* Overlay with links */}
              <div className="absolute inset-0 bg-bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-bg-primary text-sm font-semibold hover:gap-3 transition-all duration-200"
                  data-cursor-label="View"
                >
                  Demo
                  <BsArrowUpRight />
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-text-primary text-text-primary text-sm font-medium hover:gap-3 transition-all duration-200"
                  data-cursor-label="Code"
                >
                  Code
                  <BsGithub />
                </a>
              </div>
            </div>

            {/* Info */}
            <div className="mt-5 flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs text-text-tertiary font-code">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg md:text-xl font-display text-text-primary">
                    {project.name}
                  </h3>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed max-w-md">
                  {project.description}
                </p>
              </div>
              <span className="text-xs text-text-tertiary font-code shrink-0">
                {project.year}
              </span>
            </div>

            {/* Tech tags */}
            <div className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={`${project.name}-${tech}`}
                  className="text-[11px] text-text-tertiary border border-border-subtle px-2.5 py-1"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectsMain;
