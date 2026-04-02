import { useEffect, useRef } from "react";
import { BsArrowUpRight, BsClockHistory, BsGithub } from "react-icons/bs";
import { Tilt } from "react-tilt";
import { gsap } from "../../lib/gsap";

const projects = [
  {
    name: "VAMOS",
    year: "2024",
    image: "https://i.ibb.co/QjxH2Lz4/Screenshot-from-2025-02-24-17-39-54.png",
    demoLink: "https://islam04.pythonanywhere.com/",
    githubLink: "https://github.com/user/vamos",
    business: "Travel agency platform for bookings, itineraries, and customer follow-up.",
    problem:
      "The business needed a clearer booking experience that felt more trustworthy on desktop and mobile.",
    solution:
      "I designed a more structured browsing and reservation flow with better hierarchy and package presentation.",
    result:
      "The service became easier to understand and felt more credible as a digital sales channel.",
    technologies: ["Full Stack", "Booking UX", "Responsive UI"],
  },
  {
    name: "Mehdi Doctor",
    year: "2025",
    image: "https://i.ibb.co/hRsPRspK/image.png",
    demoLink: "https://medhi-doctor.vercel.app/",
    githubLink: "https://github.com/bezriche-ramy/",
    business: "Veterinary clinic managing appointments, records, and daily workflow.",
    problem:
      "Manual coordination and scattered information slowed staff down and made scheduling harder to manage.",
    solution:
      "I built a dashboard experience for appointments, patient records, and day-to-day clinic operations.",
    result:
      "Routine admin moved into a calmer, more organized interface that supports faster decision-making.",
    technologies: ["React", "Dashboard UX", "Workflow Design"],
  },
  {
    name: "EcoWebDZ",
    year: "2025",
    image: "https://i.ibb.co/spVhbsH9/image.png",
    demoLink: "https://ecowebdz.vercel.app/en",
    githubLink: "https://github.com/bezriche-ramy/",
    business: "Small businesses needing polished landing pages without agency-heavy timelines.",
    problem:
      "Many owners had good offers but weak pages that failed to explain value quickly or build trust.",
    solution:
      "I created a landing-page system focused on messaging hierarchy, credibility, and clean visual delivery.",
    result:
      "Businesses got launch-ready pages that felt more professional and conversion-aware from day one.",
    technologies: ["Next.js", "Landing Pages", "Conversion UI"],
  },
  {
    name: "Tawba",
    year: "2024",
    image: "https://i.ibb.co/RTfKYKRN/Screenshot-from-2025-05-02-13-19-31.png",
    demoLink: "https://tawba-a1af3.web.app/",
    githubLink: "https://github.com/bezriche-ramy/tawba",
    business: "Content-driven platform serving an engaged audience across multiple flows and themes.",
    problem:
      "The product needed to stay visually rich while keeping content easier to scan and navigate.",
    solution:
      "I designed a theme-flexible interface with cleaner structure, smoother interactions, and stronger content hierarchy.",
    result:
      "The experience became more polished without losing the depth and character of the platform.",
    technologies: ["Next.js", "Theming", "Content UX"],
  },
  {
    name: "Trading Dashboard",
    year: "2025",
    image: "https://i.ibb.co/Jjtfj6K9/image.png",
    demoLink: "#",
    githubLink: "https://github.com/bezriche-ramy/",
    business: "Finance dashboard concept for portfolio visibility and market tracking.",
    problem:
      "Dense market data can feel overwhelming when the screen lacks hierarchy and visual grouping.",
    solution:
      "I structured the dashboard around faster scanning, clearer charts, and focused portfolio context.",
    result:
      "Complex information became easier to read and more approachable for day-to-day use.",
    technologies: ["React", "Data UI", "Charting"],
  },
  {
    name: "KPI Analyzer",
    year: "2024",
    image: "https://i.ibb.co/WSMx6DR/image.png",
    demoLink: "#",
    githubLink: "https://github.com/user/djezzy",
    business: "Telecom operations teams reviewing KPI health, alerts, and reporting.",
    problem:
      "Important signals were buried inside technical reports and hard to scan quickly under pressure.",
    solution:
      "I structured reporting views around trends, alerting, and clearer summaries for operational monitoring.",
    result:
      "Operational visibility improved and monitoring workflows became easier to act on.",
    technologies: ["Reporting UX", "Data Analysis", "Operations"],
  },
  {
    name: "Cloud Security Lab",
    year: "2024",
    image: "https://i.ibb.co/GQdDKqGS/image.png",
    demoLink: "#",
    githubLink: "https://github.com/bezriche-ramy/",
    business: "Internal training lab for security hardening and realistic test scenarios.",
    problem:
      "Many lab environments feel technical but disconnected from clear learning and exploration flows.",
    solution:
      "I built a structured environment for guided hardening, testing, and attack-surface review.",
    result:
      "Hands-on security practice became more usable and easier to navigate for repeat sessions.",
    technologies: ["Virtualization", "Security UX", "Cloud"],
  },
  {
    name: "CryptDecrypt",
    year: "2024",
    image: "https://i.ibb.co/VWTzzcKd/Screenshot-from-2025-05-01-16-53-08.png",
    demoLink: "https://crypto-project-sable-nu.vercel.app/",
    githubLink: "https://github.com/bezriche-ramy/crypto-project",
    business: "Educational product concept for explaining encryption and decryption visually.",
    problem:
      "Crypto concepts feel abstract when the interface does not show what is happening clearly.",
    solution:
      "I created an interactive playground that makes algorithm behavior easier to explore through feedback.",
    result:
      "Technical learning became more approachable through guided visual interaction.",
    technologies: ["Java", "Python", "Educational UI"],
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

const detailLabels = [
  { key: "problem", label: "Problem" },
  { key: "solution", label: "Solution" },
  { key: "result", label: "Outcome" },
];

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
    if (!section || !track) {
      return undefined;
    }

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

      const horizontalTimeline = gsap.timeline({
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

      horizontalTimeline.to(track, {
        x: () => -getScrollDistance(),
        ease: "none",
        force3D: true,
      });
    }, section);

    const pendingImages = [];
    let pendingImageCount = 0;
    const onImageSettled = (event) => {
      const image = event.currentTarget;
      image.removeEventListener("load", onImageSettled);
      image.removeEventListener("error", onImageSettled);
      pendingImageCount = Math.max(pendingImageCount - 1, 0);

      if (pendingImageCount === 0) {
        queueLayoutRefresh();
      }
    };

    const images = track.querySelectorAll("img");
    images.forEach((image) => {
      if (image.complete) {
        return;
      }

      pendingImageCount += 1;
      image.addEventListener("load", onImageSettled);
      image.addEventListener("error", onImageSettled);
      pendingImages.push(image);
    });

    if (pendingImageCount === 0) {
      queueLayoutRefresh();
    }

    return () => {
      pendingImages.forEach((image) => {
        image.removeEventListener("load", onImageSettled);
        image.removeEventListener("error", onImageSettled);
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
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 15% 20%, rgb(var(--accent-rgb) / 0.12), transparent 22%), radial-gradient(circle at 86% 78%, rgb(var(--accent-secondary-rgb) / 0.1), transparent 24%)",
        }}
      />

      <div
        className="relative z-10 max-container w-full px-6 py-3 md:px-10 md:py-5"
        ref={headerRef}
      >
        <div className="mb-4 flex items-center gap-4">
          <span className="text-label">Proof</span>
          <div className="h-[1px] flex-1 bg-border-subtle" />
          <span className="font-code text-xs text-text-tertiary">
            {String(projects.length).padStart(2, "0")} Case Stories
          </span>
        </div>
        <h2 className="text-display font-display text-text-primary">
          How I Help Businesses
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-text-secondary md:text-base">
          Each project is framed around the business context, the friction I was
          solving, the interface response, and the outcome it created.
        </p>
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
                className="relative h-[72vh] min-h-[470px] w-[88vw] shrink-0 sm:w-[72vw] md:w-[54vw] lg:w-[42vw]"
                options={tiltOptions}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div
                  ref={(element) => {
                    cardRefs.current[index] = element;
                  }}
                  className="project-card-shell group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-border-subtle bg-bg-elevated transition-colors duration-500 hover:border-accent/30"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(circle at top, rgb(var(--accent-rgb) / 0.1), transparent 45%)",
                    }}
                  />

                  <div
                    className="relative flex h-[38%] shrink-0 items-center justify-center overflow-hidden bg-bg-surface md:h-[42%]"
                    style={{ transform: "translateZ(28px)" }}
                  >
                    <img
                      src={project.image}
                      alt={`${project.name} preview`}
                      loading="lazy"
                      className="h-full w-full object-contain object-center transition-all duration-500 group-hover:scale-[1.02]"
                    />

                    <span
                      className="pointer-events-none absolute bottom-3 left-3 select-none font-display text-[64px] font-bold leading-none opacity-10 transition-opacity duration-500 group-hover:opacity-20 md:text-[80px]"
                      style={{ color: "rgb(var(--text-primary-rgb) / 1)" }}
                    >
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
                      className="absolute right-3 top-3 bg-bg-primary/72 px-2.5 py-1 font-code text-[10px] text-text-tertiary backdrop-blur-sm"
                      style={{ transform: "translateZ(36px)" }}
                    >
                      {project.year}
                    </span>
                  </div>

                  <div
                    className="relative z-10 flex flex-1 flex-col p-5 md:p-6"
                    style={{ transform: "translateZ(34px)" }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-display text-text-primary transition-colors duration-300 group-hover:text-accent md:text-xl">
                          {project.name}
                        </h3>
                        <p className="mt-2 max-w-[34ch] text-sm leading-relaxed text-text-secondary">
                          {project.business}
                        </p>
                      </div>
                      <span className="shrink-0 font-code text-[10px] text-text-tertiary">
                        {String(index + 1).padStart(2, "0")} /{" "}
                        {String(projects.length).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="relative mb-4 mt-4 h-[1px] overflow-hidden bg-border-subtle">
                      <div className="absolute inset-y-0 left-0 w-0 bg-accent transition-all duration-700 ease-out group-hover:w-full" />
                    </div>

                    <div className="space-y-3">
                      {detailLabels.map((item) => (
                        <div
                          key={`${project.name}-${item.key}`}
                          className="grid grid-cols-[72px_1fr] gap-3 border-t border-border-subtle pt-3 first:border-t-0 first:pt-0"
                        >
                          <span className="font-code text-[10px] uppercase tracking-[0.18em] text-text-tertiary">
                            {item.label}
                          </span>
                          <p className="text-[13px] leading-relaxed text-text-secondary">
                            {project[item.key]}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-border-subtle pt-4">
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
              className="w-full border-t border-border-subtle py-10 md:py-14"
            >
              <div className="flex items-center gap-3 text-accent">
                <BsClockHistory className="animate-[spin_7s_linear_infinite] text-xl md:text-2xl" />
                <span className="font-code text-[11px] uppercase tracking-[0.2em] text-text-tertiary md:text-xs">
                  More Proof On The Way
                </span>
              </div>
              <p className="mt-4 max-w-[36ch] text-sm text-text-secondary md:text-base">
                More business stories, redesigns, and experiments are being added
                to this rail soon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsMain;
