import { useEffect, useRef, useState } from "react";
import { gsap } from "../lib/gsap";

const PageTransition = () => {
  const [isVisible, setIsVisible] = useState(true);
  const overlayRef = useRef(null);
  const counterRef = useRef(null);
  const nameRef = useRef(null);
  const columnsRef = useRef([]);

  useEffect(() => {
    if (!overlayRef.current) return undefined;

    const counter = { value: 0 };
    const tl = gsap.timeline({
      onComplete: () => setIsVisible(false),
    });

    // Count from 0 to 100
    tl.to(counter, {
      value: 100,
      duration: 1.8,
      ease: "power2.inOut",
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.textContent = Math.round(counter.value);
        }
      },
    });

    // Fade in name
    tl.fromTo(
      nameRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
      0.3
    );

    // Slide columns up with stagger to reveal content
    tl.to(
      columnsRef.current,
      {
        yPercent: -100,
        duration: 0.8,
        stagger: 0.08,
        ease: "power4.inOut",
      },
      ">=0.15"
    );

    return () => tl.kill();
  }, []);

  if (!isVisible) return null;

  return (
    <div ref={overlayRef} className="fixed inset-0 z-[9999]">
      {/* Column-based reveal mask */}
      <div className="absolute inset-0 flex">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            ref={(el) => { columnsRef.current[i] = el; }}
            className="flex-1 bg-bg-primary will-change-transform"
          />
        ))}
      </div>

      {/* Counter overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
        <p
          ref={counterRef}
          className="font-display text-[clamp(5rem,20vw,14rem)] font-bold text-text-primary leading-none tracking-tighter"
          style={{ mixBlendMode: "difference" }}
        >
          0
        </p>
        <p
          ref={nameRef}
          className="text-label mt-6 opacity-0"
          style={{ mixBlendMode: "difference", color: "#e8e8e8" }}
        >
          Ramy Bezriche — Portfolio
        </p>
      </div>
    </div>
  );
};

export default PageTransition;
