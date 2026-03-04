import { useRef, useCallback } from "react";
import { gsap } from "../lib/gsap";

const MagneticButton = ({ children, className = "", strength = 0.4, ...props }) => {
  const btnRef = useRef(null);

  const handleMove = useCallback(
    (e) => {
      const btn = btnRef.current;
      if (!btn) return;

      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(btn, {
        x: x * strength,
        y: y * strength,
        duration: 0.3,
        ease: "power2.out",
      });
    },
    [strength]
  );

  const handleLeave = useCallback(() => {
    const btn = btnRef.current;
    if (!btn) return;

    gsap.to(btn, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.4)",
    });
  }, []);

  return (
    <div
      ref={btnRef}
      className={`inline-block will-change-transform ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      {...props}
    >
      {children}
    </div>
  );
};

export default MagneticButton;
