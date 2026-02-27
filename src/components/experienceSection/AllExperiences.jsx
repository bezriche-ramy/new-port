import { useEffect, useRef } from "react";
import SingleExperience from "./SingleExperience";
import { gsap } from "../../lib/gsap";

const experiences = [
  {
    job: "Full Stack Developer (Freelance)",
    company: "Remote",
    date: "Sep 2025 - Present",
    responsibilities: [
      "Built performant web applications with React and Next.js for independent clients.",
      "Delivered responsive UI systems and production-ready component libraries.",
      "Collaborated directly with stakeholders to translate business requirements into code.",
      "Improved loading performance and baseline security posture on active deployments.",
    ],
  },
  {
    job: "Telecom Engineering Intern",
    company: "Djezzy, Algiers",
    date: "Jul 2024 - Sep 2024",
    responsibilities: [
      "Analyzed LTE, RRC, and S1 performance indicators across production datasets.",
      "Supported automated KPI reporting and alerting workflows.",
      "Improved PRB usage reporting and operational visibility for network teams.",
    ],
  },
];

const AllExperiences = () => {
  const wrapRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    if (!wrapRef.current || !lineRef.current) {
      return;
    }

    gsap.fromTo(
      lineRef.current,
      { scaleY: 0, transformOrigin: "top center" },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: wrapRef.current,
          start: "top 72%",
          end: "bottom 25%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div ref={wrapRef} className="relative max-w-5xl mx-auto">
      <div
        ref={lineRef}
        className="hidden md:block absolute left-1/2 -translate-x-1/2 top-3 bottom-3 w-[2px] bg-gradient-to-b from-accent-1 via-accent-2 to-accent-1"
      />

      <div className="space-y-10 md:space-y-12">
        {experiences.map((experience, index) => (
          <SingleExperience key={experience.job} experience={experience} index={index} />
        ))}
      </div>
    </div>
  );
};

export default AllExperiences;
