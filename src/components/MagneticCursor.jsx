import { useEffect, useRef } from "react";
import { gsap } from "../lib/gsap";

const MagneticCursor = () => {
  const ringRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) {
      return undefined;
    }

    const ring = ringRef.current;
    const dot = dotRef.current;

    if (!ring || !dot) {
      return undefined;
    }

    const onMove = (event) => {
      gsap.to(ring, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.35,
        ease: "power2.out",
      });

      gsap.to(dot, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.08,
      });
    };

    const interactive = document.querySelectorAll("a, button, [data-cursor='magnetic']");
    const enter = () => {
      gsap.to(ring, {
        scale: 1.8,
        borderColor: "rgba(41, 151, 255, 0.75)",
        backgroundColor: "rgba(255,255,255,0.08)",
        duration: 0.2,
      });
    };

    const leave = () => {
      gsap.to(ring, {
        scale: 1,
        borderColor: "rgba(255,255,255,0.35)",
        backgroundColor: "rgba(255,255,255,0.02)",
        duration: 0.22,
      });
    };

    window.addEventListener("mousemove", onMove);
    interactive.forEach((element) => {
      element.addEventListener("mouseenter", enter);
      element.addEventListener("mouseleave", leave);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      interactive.forEach((element) => {
        element.removeEventListener("mouseenter", enter);
        element.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  if (window.matchMedia && window.matchMedia("(hover: none), (pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-9 h-9 rounded-full pointer-events-none z-[9999]"
        style={{
          transform: "translate(-50%, -50%)",
          border: "1.5px solid rgba(255,255,255,0.35)",
          background: "rgba(255,255,255,0.02)",
          backdropFilter: "blur(10px)",
        }}
      />
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full pointer-events-none z-[9999]"
        style={{
          transform: "translate(-50%, -50%)",
          background: "#2997FF",
          boxShadow: "0 0 14px rgba(41,151,255,0.9)",
        }}
      />
    </>
  );
};

export default MagneticCursor;
