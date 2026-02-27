import { useEffect, useRef } from "react";
import SkillsText from "./SkillsText";
import AllSkills from "./AllSkills";
import { gsap } from "../../lib/gsap";

const SkillsMain = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    gsap.fromTo(
      sectionRef.current.querySelector(".skills-heading"),
      { opacity: 0, y: 32 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="section-alternate">
      <div className="section-container">
        <div className="skills-heading">
          <SkillsText />
        </div>
        <AllSkills />
      </div>
    </section>
  );
};

export default SkillsMain;
