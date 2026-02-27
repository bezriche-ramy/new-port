import { useEffect, useRef } from "react";
import HeroText from "./HeroText";
import HeroPic from "./HeroPic";
import TechStackIcons from "./TechStackIcons";
import { gsap } from "../../lib/gsap";

const HeroMain = () => {
  const heroRef = useRef(null);
  const meshRef = useRef(null);
  const orbRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-text-col",
        { opacity: 0, x: -70 },
        { opacity: 1, x: 0, duration: 0.85, ease: "power3.out", delay: 0.2 }
      );

      gsap.fromTo(
        ".hero-pic-col",
        { opacity: 0, x: 70, scale: 0.92 },
        { opacity: 1, x: 0, scale: 1, duration: 0.95, ease: "power3.out", delay: 0.3 }
      );

      orbRefs.current.forEach((orb, index) => {
        if (!orb) {
          return;
        }

        gsap.to(orb, {
          y: index % 2 === 0 ? -20 : 20,
          x: index % 2 === 0 ? 12 : -12,
          duration: 5 + index,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      if (meshRef.current) {
        gsap.to(meshRef.current, {
          backgroundPosition: "60% 40%",
          duration: 10,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen pt-32 pb-20 sm:pt-36 lg:pt-40 flex items-center overflow-hidden"
    >
      <div ref={meshRef} className="mesh-background" />

      <div
        ref={(node) => {
          orbRefs.current[0] = node;
        }}
        className="absolute top-[12%] left-[8%] w-[16rem] h-[16rem] rounded-full bg-accent-1/20 blur-[100px]"
      />
      <div
        ref={(node) => {
          orbRefs.current[1] = node;
        }}
        className="absolute bottom-[8%] right-[6%] w-[20rem] h-[20rem] rounded-full bg-accent-2/20 blur-[120px]"
      />
      <div
        ref={(node) => {
          orbRefs.current[2] = node;
        }}
        className="absolute top-[45%] right-[35%] w-[10rem] h-[10rem] rounded-full bg-accent-1/20 blur-[70px]"
      />

      <TechStackIcons />

      <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] items-center gap-12 lg:gap-16">
          <div className="hero-text-col order-2 lg:order-1">
            <HeroText />
          </div>
          <div className="hero-pic-col order-1 lg:order-2 flex justify-center lg:justify-end">
            <HeroPic />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroMain;
