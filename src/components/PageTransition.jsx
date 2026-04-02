import { useEffect, useRef, useState } from "react";
import { gsap } from "../lib/gsap";

const PageTransition = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const overlayRef = useRef(null);
  const counterRef = useRef(null);
  const nameRef = useRef(null);
  const columnsRef = useRef([]);

  useEffect(() => {
    if (!overlayRef.current) {
      return undefined;
    }

    const counter = { value: 0 };
    const timeline = gsap.timeline({
      onComplete: () => {
        setIsVisible(false);
        onComplete?.();
      },
    });

    timeline.to(counter, {
      value: 100,
      duration: 1.8,
      ease: "power2.inOut",
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.textContent = Math.round(counter.value);
        }
      },
    });

    timeline.fromTo(
      nameRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
      0.3
    );

    timeline.to(
      columnsRef.current,
      {
        yPercent: -100,
        duration: 0.8,
        stagger: 0.08,
        ease: "power4.inOut",
      },
      ">=0.15"
    );

    return () => timeline.kill();
  }, [onComplete]);

  if (!isVisible) {
    return null;
  }

  return (
    <div ref={overlayRef} className="fixed inset-0 z-[9999]">
      <div className="absolute inset-0 flex">
        {[0, 1, 2, 3, 4].map((index) => (
          <div
            key={index}
            ref={(element) => {
              columnsRef.current[index] = element;
            }}
            className="will-change-transform flex-1 bg-bg-primary"
          />
        ))}
      </div>

      <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center">
        <p
          ref={counterRef}
          className="font-display text-[clamp(5rem,20vw,14rem)] font-bold leading-none tracking-tighter text-text-primary"
        >
          0
        </p>
        <p ref={nameRef} className="mt-6 text-label opacity-0">
          Ramy Bezriche - UX/UI Portfolio
        </p>
      </div>
    </div>
  );
};

export default PageTransition;
