import { useEffect, useRef, useCallback } from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { gsap } from "../../lib/gsap";

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

const TiltCard = ({ children, className }) => {
  const cardRef = useRef(null);

  const handleMove = useCallback((e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    gsap.to(card, {
      rotateY: x * 8,
      rotateX: -y * 6,
      duration: 0.4,
      ease: "power2.out",
    });
  }, []);

  const handleLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;

    gsap.to(card, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.5)",
    });
  }, []);

  return (
    <div
      ref={cardRef}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ transformStyle: "preserve-3d", perspective: "800px" }}
    >
      {children}
    </div>
  );
};

const ProjectsMain = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const headerRef = useRef(null);
  const imageRefs = useRef([]);
  const refreshRafRef = useRef(0);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return undefined;

    const debugMarkers = import.meta.env.DEV && window.__DEBUG_SCROLL === true;
    const queueLayoutRefresh = () => {
      if (refreshRafRef.current) {
        cancelAnimationFrame(refreshRafRef.current);
      }

      refreshRafRef.current = requestAnimationFrame(() => {
        window.dispatchEvent(new Event("app:layout-updated"));
      });
    };

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
              once: true,
            },
          }
        );
      }

      const getScrollDistance = () => {
        return Math.max(track.scrollWidth - window.innerWidth, 0);
      };

      const getScrollEnd = () => {
        return Math.max(getScrollDistance(), 1);
      };

      // Horizontal scroll (pinned)
      const horizontalTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getScrollEnd()}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          fastScrollEnd: true,
          invalidateOnRefresh: true,
          markers: debugMarkers,
        },
      });

      horizontalTl.to(track, {
        x: () => -getScrollDistance(),
        ease: "none",
      });

      // Parallax on project images
      imageRefs.current.filter(Boolean).forEach((img) => {
        gsap.fromTo(
          img,
          { xPercent: -8 },
          {
            xPercent: 8,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: () => `+=${getScrollEnd()}`,
              scrub: 1,
              invalidateOnRefresh: true,
              markers: debugMarkers,
            },
          }
        );
      });
    }, section);

    const pendingImages = [];
    let pendingImageCount = 0;
    const onImageSettled = (event) => {
      const img = event.currentTarget;
      img.removeEventListener("load", onImageSettled);
      img.removeEventListener("error", onImageSettled);
      pendingImageCount = Math.max(pendingImageCount - 1, 0);

      if (pendingImageCount === 0) {
        queueLayoutRefresh();
      }
    };
    const imgs = track.querySelectorAll("img");
    imgs.forEach((img) => {
      if (img.complete) return;
      pendingImageCount += 1;
      img.addEventListener("load", onImageSettled);
      img.addEventListener("error", onImageSettled);
      pendingImages.push(img);
    });

    if (pendingImageCount === 0) {
      queueLayoutRefresh();
    }

    return () => {
      pendingImages.forEach((img) => {
        img.removeEventListener("load", onImageSettled);
        img.removeEventListener("error", onImageSettled);
      });
      if (refreshRafRef.current) {
        cancelAnimationFrame(refreshRafRef.current);
      }
      ctx.revert();
    };
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="relative bg-bg-primary pt-24 pb-12">
      {/* Header */}
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
      <div className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-6 md:gap-8 pl-6 md:pl-10 pr-6 md:pr-10 pt-8 pb-16"
          style={{ width: "max-content" }}
        >
          {projects.map((project, i) => (
            <TiltCard
              key={project.name}
              className="group relative w-[85vw] sm:w-[70vw] md:w-[50vw] lg:w-[40vw] shrink-0 flex flex-col border border-border-subtle hover:border-accent/30 bg-bg-elevated transition-colors duration-500"
            >
              {/* Image area */}
              <div className="relative overflow-hidden bg-[#0a0a0a] aspect-[16/10]">
                <img
                  ref={(el) => { imageRefs.current[i] = el; }}
                  src={project.image}
                  alt={`${project.name} preview`}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-110 group-hover:scale-100 transition-all duration-700"
                />

                {/* Number badge — bottom left on image */}
                <span className="absolute bottom-3 left-3 text-[64px] md:text-[80px] font-display font-bold leading-none text-white/[0.06] group-hover:text-white/[0.12] transition-all duration-500 select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* CTA buttons — bottom right on image */}
                <div className="absolute bottom-3 right-3 flex gap-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-accent text-bg-primary text-xs font-semibold hover:gap-2.5 transition-all duration-200"
                    data-cursor-label="View"
                  >
                    Demo
                    <BsArrowUpRight className="text-[10px]" />
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-bg-primary/80 backdrop-blur-sm border border-border-medium text-text-primary text-xs font-medium hover:gap-2.5 transition-all duration-200"
                    data-cursor-label="Code"
                  >
                    Code
                    <BsGithub className="text-[10px]" />
                  </a>
                </div>

                {/* Top-right year badge */}
                <span className="absolute top-3 right-3 text-[10px] font-code text-text-tertiary bg-bg-primary/70 backdrop-blur-sm px-2.5 py-1 border border-border-subtle">
                  {project.year}
                </span>
              </div>

              {/* Info area */}
              <div className="p-5 md:p-6 flex flex-col flex-1">
                {/* Title row */}
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg md:text-xl font-display text-text-primary group-hover:text-accent transition-colors duration-300">
                    {project.name}
                  </h3>
                  <span className="text-[10px] font-code text-text-tertiary shrink-0">
                    {String(i + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                  </span>
                </div>

                {/* Accent divider — grows on hover */}
                <div className="mt-3 mb-4 h-[1px] bg-border-subtle relative overflow-hidden">
                  <div className="absolute inset-y-0 left-0 w-0 group-hover:w-full bg-accent transition-all duration-700 ease-out" />
                </div>

                {/* Description */}
                <p className="text-sm text-text-secondary leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tech tags with accent dot */}
                <div className="mt-4 pt-4 border-t border-border-subtle flex flex-wrap gap-x-4 gap-y-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={`${project.name}-${tech}`}
                      className="text-[11px] text-text-tertiary flex items-center gap-1.5 group-hover:text-text-secondary transition-colors duration-300"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent/50 group-hover:bg-accent transition-colors duration-300" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsMain;
