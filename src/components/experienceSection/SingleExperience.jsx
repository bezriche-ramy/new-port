/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { PiBriefcaseFill, PiSuitcaseFill } from "react-icons/pi";
import { gsap } from "../../lib/gsap";

const SingleExperience = ({ experience, index }) => {
  const rowRef = useRef(null);

  useEffect(() => {
    if (!rowRef.current) {
      return;
    }

    gsap.fromTo(
      rowRef.current,
      { opacity: 0, x: index % 2 === 0 ? -70 : 70 },
      {
        opacity: 1,
        x: 0,
        duration: 0.75,
        ease: "power2.out",
        scrollTrigger: {
          trigger: rowRef.current,
          start: "top 82%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, [index]);

  return (
    <article ref={rowRef} className="relative md:grid md:grid-cols-2 md:gap-10 items-start">
      <div className={index % 2 === 0 ? "" : "md:col-start-2"}>
        <div className="glass-panel p-5 md:p-6">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-white/6 border border-white/10 flex items-center justify-center text-accent-1 text-xl">
              {index === 0 ? <PiBriefcaseFill /> : <PiSuitcaseFill />}
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-semibold text-text-primary">{experience.job}</h3>
              <p className="text-accent-1 text-sm md:text-base mt-1">{experience.company}</p>
              <p className="text-xs md:text-sm text-text-secondary mt-2">{experience.date}</p>
            </div>
          </div>

          <ul className="mt-5 space-y-2.5 text-sm md:text-[15px] text-text-secondary leading-relaxed">
            {experience.responsibilities.map((responsibility) => (
              <li key={`${experience.job}-${responsibility}`} className="flex gap-2">
                <span className="text-accent-1">-</span>
                <span>{responsibility}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <span className="hidden md:block absolute top-8 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent-1 border-[3px] border-background shadow-[0_0_18px_rgba(41,151,255,0.55)]" />
    </article>
  );
};

export default SingleExperience;

