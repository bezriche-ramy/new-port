import { useEffect, useRef } from "react";
import HeroText from "./HeroText";
import HeroTerminal from "./HeroTerminal";
import { gsap } from "../../lib/gsap";

const HeroMain = () => {
  const heroRef = useRef(null);
  const scrollIndicatorRef = useRef(null);
  const auroraRef = useRef(null);
  const gridRef = useRef(null);
  const contentRef = useRef(null);

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

      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        const blobs = auroraRef.current?.querySelectorAll(".aurora-blob") ?? [];
        blobs.forEach((blob, index) => {
          gsap.to(blob, {
            yPercent: index === 1 ? -18 : 16,
            xPercent: index === 2 ? 12 : -8,
            ease: "none",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 1.2 + index * 0.15,
            },
          });
        });

        if (gridRef.current) {
          gsap.to(gridRef.current, {
            yPercent: 18,
            opacity: 0.01,
            ease: "none",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
          });
        }

        if (contentRef.current) {
          gsap.to(contentRef.current, {
            yPercent: -6,
            ease: "none",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 1.1,
            },
          });
        }

        if (scrollIndicatorRef.current) {
          gsap.to(scrollIndicatorRef.current, {
            autoAlpha: 0,
            y: 28,
            ease: "none",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom center",
              scrub: 0.6,
            },
          });
        }
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
      <div
        ref={auroraRef}
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        <div
          className="aurora-blob absolute top-[10%] left-[15%] h-[500px] w-[500px] rounded-full opacity-[0.04]"
          style={{
            background: "radial-gradient(circle, #c4ff00 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="aurora-blob absolute top-[40%] right-[10%] h-[400px] w-[400px] rounded-full opacity-[0.03]"
          style={{
            background: "radial-gradient(circle, #00ffc4 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
        <div
          className="aurora-blob absolute bottom-[10%] left-[40%] h-[450px] w-[450px] rounded-full opacity-[0.03]"
          style={{
            background: "radial-gradient(circle, #c4ff00 0%, transparent 70%)",
            filter: "blur(90px)",
          }}
        />
      </div>

      <div
        ref={gridRef}
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div
        ref={contentRef}
        className="section-padding max-container relative z-10 w-full"
      >
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <HeroText />

          <div className="hidden lg:flex justify-end">
            <HeroTerminal />
          </div>
        </div>
      </div>

      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-text-tertiary">
          Scroll
        </span>
        <div className="h-8 w-[1px] bg-text-tertiary" />
      </div>
    </section>
  );
};

export default HeroMain;
