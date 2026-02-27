import { useEffect, useRef } from "react";
import AboutMeText from "./AboutMeText";
import AboutMeImage from "./AboutMeImage";
import { gsap } from "../../lib/gsap";

const AboutMeMain = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (cardRef.current) {
        gsap.fromTo(
          cardRef.current,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 78%",
            },
          }
        );

        gsap.to(cardRef.current, {
          y: -30,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-[8%] w-64 h-64 rounded-full bg-accent-1/15 blur-[100px]" />
        <div className="absolute bottom-12 right-[10%] w-72 h-72 rounded-full bg-accent-2/15 blur-[110px]" />
      </div>

      <div className="section-container relative z-10">
        <div ref={cardRef} className="glass-panel p-6 md:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-12 items-center">
            <AboutMeText />
            <AboutMeImage />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeMain;
