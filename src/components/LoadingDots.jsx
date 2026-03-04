import { useEffect, useRef } from "react";
import { gsap } from "../lib/gsap";

const LoadingDots = () => {
  const barRef = useRef(null);

  useEffect(() => {
    if (!barRef.current) return undefined;

    const tween = gsap.to(barRef.current, {
      width: "100%",
      duration: 2,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
    });

    return () => tween.kill();
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-bg-primary flex flex-col items-center justify-center gap-6">
      <p className="text-label">Loading</p>
      <div className="w-48 h-[1px] bg-border-subtle overflow-hidden">
        <div
          ref={barRef}
          className="h-full w-0"
          style={{ background: "#c4ff00" }}
        />
      </div>
    </div>
  );
};

export default LoadingDots;
