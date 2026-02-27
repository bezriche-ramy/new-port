import { useEffect, useRef } from "react";
import { gsap } from "../lib/gsap";

const LoadingDots = () => {
  const dotsRef = useRef([]);

  useEffect(() => {
    const dots = dotsRef.current.filter(Boolean);
    if (!dots.length) {
      return undefined;
    }

    const tween = gsap.to(dots, {
      scale: 1.3,
      opacity: 0.65,
      boxShadow: "0 0 16px rgba(41,151,255,0.55)",
      duration: 0.7,
      stagger: 0.12,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    return () => tween.kill();
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-background/90 backdrop-blur-xl flex items-center justify-center">
      <div className="glass-panel px-8 py-7 text-center">
        <p className="text-text-primary text-lg font-semibold">Loading Portfolio</p>
        <div className="mt-4 flex items-center justify-center gap-2">
          {[0, 1, 2].map((index) => (
            <span
              key={`loading-dot-${index}`}
              ref={(node) => {
                dotsRef.current[index] = node;
              }}
              className="w-3 h-3 rounded-full bg-accent-1"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingDots;
