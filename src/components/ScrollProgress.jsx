import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "../lib/gsap";

const ScrollProgress = () => {
  const barRef = useRef(null);

  useEffect(() => {
    if (!barRef.current) return undefined;

    const ctx = gsap.context(() => {
      gsap.to(barRef.current, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={barRef}
      className="fixed top-0 left-0 w-full h-[2px] bg-accent z-[101] origin-left"
      style={{ transform: "scaleX(0)" }}
    />
  );
};

export default ScrollProgress;
