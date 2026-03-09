import { useEffect, useRef } from "react";
import { BsArrowUpRight, BsClockHistory, BsGithub } from "react-icons/bs";
import { Tilt } from "react-tilt";
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
      "Management system for a veterinary doctor - appointments, patient records, and clinic workflow automation.",
    technologies: ["React", "Full Stack", "Dashboard"],
  },
];

const tiltOptions = {
  max: 10,
  perspective: 1400,
  scale: 1.02,
  speed: 450,
  transition: true,
  reset: true,
};

const ProjectsMain = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const headerRef = useRef(null);
  const cardRefs = useRef([]);
  const trailerRef = useRef(null);
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
      const cards = cardRefs.current.filter(Boolean);

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

      if (cards.length) {
        gsap.fromTo(
          cards,
          {
            y: 80,
            opacity: 0,
            rotateX: -10,
            transformOrigin: "50% 100%",
          },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            stagger: 0.12,
            duration: 0.95,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 68%",
              once: true,
            },
          }
        );
      }

      if (trailerRef.current) {
        gsap.fromTo(
          trailerRef.current,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: 0.25,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 68%",
              once: true,
            },
          }
        );
      }

      const getScrollDistance = () => Math.max(track.scrollWidth - window.innerWidth, 0);
      const getScrollEnd = () => Math.max(getScrollDistance(), 1);

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
        force3D: true,
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
    <section
      id="projects"
      ref={sectionRef}
      className="relative flex h-screen w-full flex-col justify-center overflow-hidden bg-bg-primary"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(196,255,0,0.1),transparent_22%),radial-gradient(circle_at_86%_78%,rgba(116,247,212,0.08),transparent_24%)]" />

      <div className="max-container relative z-10 w-full px-6 py-3 md:px-10 md:py-5" ref={headerRef}>
        <div className="mb-4 flex items-center gap-4">
          <span className="text-label">Projects</span>
          <div className="h-[1px] flex-1 bg-border-subtle" />
          <span className="font-code text-xs text-text-tertiary">
            {String(projects.length).padStart(2, "0")} Works
          </span>
        </div>
        <h2 className="text-display font-display text-text-primary">
          Selected Work
        </h2>
      </div>

      <div className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex w-max gap-6 py-4 pl-6 pr-6 will-change-transform md:gap-8 md:px-10 md:py-8"
        >
          {projects.map((project, index) => {
            const hasDemo = project.demoLink && project.demoLink !== "#";
            const hasCode = project.githubLink && project.githubLink !== "#";

            return (
              <Tilt
                key={project.name}
                className="relative h-[65vh] min-h-[400px] w-[85vw] shrink-0 sm:w-[70vw] md:w-[50vw] lg:w-[40vw]"
                options={tiltOptions}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  className="project-card-shell group relative flex h-full flex-col overflow-hidden border border-border-subtle bg-bg-elevated transition-colors duration-500 hover:border-accent/30"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(196,255,0,0.1),transparent_45%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div
                    className="relative flex h-[45%] shrink-0 items-center justify-center overflow-hidden bg-[#0a0a0a] md:h-[55%]"
                    style={{ transform: "translateZ(28px)" }}
                  >
                    <img
                      src={project.image}
                      alt={`${project.name} preview`}
                      loading="lazy"
                      className="h-full w-full object-contain object-center grayscale transition-all duration-500 group-hover:scale-[1.02] group-hover:grayscale-0"
                    />

                    <span className="absolute bottom-3 left-3 select-none font-display text-[64px] font-bold leading-none text-white/[0.06] transition-all duration-500 group-hover:text-white/[0.12] md:text-[80px]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {(hasDemo || hasCode) && (
                      <div
                        className="absolute bottom-3 right-3 flex translate-y-2 gap-2 opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100"
                        style={{ transform: "translateZ(44px)" }}
                      >
                        {hasDemo && (
                          <a
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 bg-accent px-4 py-2 text-xs font-semibold text-bg-primary transition-all duration-200 hover:gap-2.5"
                            data-cursor-label="View"
                          >
                            Demo
                            <BsArrowUpRight className="text-[10px]" />
                          </a>
                        )}
                        {hasCode && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 border border-border-medium bg-bg-primary/80 px-4 py-2 text-xs font-medium text-text-primary backdrop-blur-sm transition-all duration-200 hover:gap-2.5"
                            data-cursor-label="Code"
                          >
                            Code
                            <BsGithub className="text-[10px]" />
                          </a>
                        )}
                      </div>
                    )}

                    <span
                      className="absolute right-3 top-3 bg-bg-primary/70 px-2.5 py-1 font-code text-[10px] text-text-tertiary backdrop-blur-sm"
                      style={{ transform: "translateZ(36px)" }}
                    >
                      {project.year}
                    </span>
                  </div>

                  <div
                    className="relative z-10 flex flex-1 flex-col p-5 md:p-6"
                    style={{ transform: "translateZ(34px)" }}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-lg font-display text-text-primary transition-colors duration-300 group-hover:text-accent md:text-xl">
                        {project.name}
                      </h3>
                      <span className="shrink-0 font-code text-[10px] text-text-tertiary">
                        {String(index + 1).padStart(2, "0")} /{" "}
                        {String(projects.length).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="relative mb-4 mt-3 h-[1px] overflow-hidden bg-border-subtle">
                      <div className="absolute inset-y-0 left-0 w-0 bg-accent transition-all duration-700 ease-out group-hover:w-full" />
                    </div>

                    <p className="flex-1 text-sm leading-relaxed text-text-secondary">
                      {project.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 border-t border-border-subtle pt-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={`${project.name}-${tech}`}
                          className="flex items-center gap-1.5 text-[11px] text-text-tertiary transition-colors duration-300 group-hover:text-text-secondary"
                        >
                          <span className="h-1 w-1 rounded-full bg-accent/50 transition-colors duration-300 group-hover:bg-accent" />
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Tilt>
            );
          })}

          <div className="flex min-w-[280px] shrink-0 items-center md:min-w-[360px]">
            <div
              ref={trailerRef}
              className="w-full border-t border-border-subtle/70 py-10 md:py-14"
            >
              <div className="flex items-center gap-3 text-accent">
                <BsClockHistory className="animate-[spin_7s_linear_infinite] text-xl md:text-2xl" />
                <span className="font-code text-[11px] uppercase tracking-[0.2em] text-text-tertiary md:text-xs">
                  To Be Continued...
                </span>
              </div>
              <p className="mt-4 max-w-[36ch] text-sm text-text-secondary md:text-base">
                More projects are in creation and will be added here soon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsMain;
