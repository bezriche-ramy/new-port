import { useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { PiGlobeHemisphereWestBold, PiStudentBold, PiUserCircleBold } from "react-icons/pi";
import { gsap } from "../../lib/gsap";

const detailBlocks = [
  {
    icon: PiUserCircleBold,
    title: "Profil",
    text: "Computer science student focused on cybersecurity, reverse engineering, and practical front-end delivery.",
  },
  {
    icon: PiStudentBold,
    title: "Formation",
    text: "State engineering cycle at USTHB (2022-2027), with specialization in security systems and software architecture.",
  },
  {
    icon: PiGlobeHemisphereWestBold,
    title: "Engagement",
    text: "Active in GDG Algeria and Shellmates communities, contributing to developer education and project mentorship.",
  },
];

const AboutMeText = () => {
  const blockRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      blockRefs.current,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.16,
        duration: 0.65,
        ease: "power2.out",
        scrollTrigger: {
          trigger: blockRefs.current[0],
          start: "top 84%",
        },
      }
    );
  }, []);

  return (
    <div>
      <p className="uppercase tracking-[0.28em] text-xs text-text-secondary mb-4">About Me</p>
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-text-primary leading-tight">
        Building secure experiences with product-level polish.
      </h2>
      <p className="mt-5 text-text-secondary text-base sm:text-lg leading-relaxed max-w-2xl">
        I combine offensive-security thinking with clean UI engineering to create interfaces that are both dependable and memorable.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {detailBlocks.map((block, index) => (
          <div
            key={block.title}
            ref={(node) => {
              blockRefs.current[index] = node;
            }}
            className="rounded-2xl border border-white/10 bg-white/5 p-4"
          >
            <block.icon className="text-2xl text-accent-1 mb-3" />
            <h3 className="font-semibold text-text-primary mb-2">{block.title}</h3>
            <p className="text-sm text-text-secondary leading-relaxed">{block.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <Link to="projects" smooth duration={500} offset={-110} className="btn-primary cursor-pointer">
          Voir Mes Projets
        </Link>
      </div>
    </div>
  );
};

export default AboutMeText;
