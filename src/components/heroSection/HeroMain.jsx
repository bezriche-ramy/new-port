import { useEffect, useRef } from "react";
import HeroText from "./HeroText";
import HeroTerminal from "./HeroTerminal";
import { gsap } from "../../lib/gsap";

const HeroMain = () => {
  const heroRef = useRef(null);
  const scrollIndicatorRef = useRef(null);
  const auroraRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (scrollIndicatorRef.current) {
        gsap.to(scrollIndicatorRef.current, {
          y: 8,
          opacity: 0.3,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      // Aurora ambient animation
      if (auroraRef.current) {
        const blobs = auroraRef.current.querySelectorAll(".aurora-blob");
        blobs.forEach((blob, i) => {
          gsap.to(blob, {
            x: `random(-120, 120)`,
            y: `random(-80, 80)`,
            scale: `random(0.8, 1.3)`,
            duration: `random(6, 10)`,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: i * 1.5,
          });
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Aurora glow background */}
      <div
        ref={auroraRef}
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        <div
          className="aurora-blob absolute top-[10%] left-[15%] w-[500px] h-[500px] rounded-full opacity-[0.04]"
          style={{
            background: "radial-gradient(circle, #c4ff00 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="aurora-blob absolute top-[40%] right-[10%] w-[400px] h-[400px] rounded-full opacity-[0.03]"
          style={{
            background: "radial-gradient(circle, #00ffc4 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
        <div
          className="aurora-blob absolute bottom-[10%] left-[40%] w-[450px] h-[450px] rounded-full opacity-[0.03]"
          style={{
            background: "radial-gradient(circle, #c4ff00 0%, transparent 70%)",
            filter: "blur(90px)",
          }}
        />
      </div>

      {/* Subtle background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="section-padding max-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] items-center gap-12 lg:gap-16">
          {/* Left — Name & CTA */}
          <HeroText />

          {/* Right — Interactive terminal */}
          <div className="hidden lg:flex justify-end">
            <HeroTerminal />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-text-tertiary">
          Scroll
        </span>
        <div className="w-[1px] h-8 bg-text-tertiary" />
      </div>
    </section>
  );
};

export default HeroMain;
