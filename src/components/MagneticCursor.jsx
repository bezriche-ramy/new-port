import { useEffect, useRef } from "react";
import { gsap } from "../lib/gsap";

const shouldDisableCursor = () => {
  if (typeof window === "undefined" || !window.matchMedia) {
    return true;
  }

  return (
    window.matchMedia("(max-width: 768px)").matches ||
    window.matchMedia("(hover: none), (pointer: coarse)").matches
  );
};

const MagneticCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (shouldDisableCursor()) {
      return undefined;
    }

    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower) {
      return undefined;
    }

    let mouseX = 0;
    let mouseY = 0;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Inner dot — snappy follow
      gsap.to(cursor, {
        x: mouseX,
        y: mouseY,
        duration: 0.08,
        ease: "power2.out",
      });

      // Outer ring — spring physics for organic feel
      gsap.to(follower, {
        x: mouseX,
        y: mouseY,
        duration: 0.6,
        ease: "back.out(1.7)",
      });
    };

    const enter = (e) => {
      const label = e.currentTarget.dataset?.cursorLabel;

      gsap.to(follower, {
        width: 80,
        height: 80,
        backgroundColor: "rgba(196, 255, 0, 0.06)",
        borderColor: "rgba(196, 255, 0, 0.4)",
        duration: 0.4,
        ease: "back.out(2)",
      });

      gsap.to(cursor, {
        scale: 0,
        duration: 0.2,
        ease: "power2.in",
      });

      if (label && textRef.current) {
        textRef.current.textContent = label;
        gsap.to(textRef.current, { opacity: 1, duration: 0.2 });
      }
    };

    const leave = () => {
      gsap.to(follower, {
        width: 40,
        height: 40,
        backgroundColor: "transparent",
        borderColor: "rgba(255, 255, 255, 0.15)",
        duration: 0.5,
        ease: "elastic.out(1, 0.4)",
      });

      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
        ease: "back.out(2)",
      });

      if (textRef.current) {
        gsap.to(textRef.current, { opacity: 0, duration: 0.15 });
      }
    };

    window.addEventListener("mousemove", onMove);

    const bindInteractive = () => {
      const interactive = document.querySelectorAll(
        "a, button, [data-cursor='magnetic']"
      );
      interactive.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
        el.addEventListener("mouseenter", enter);
        el.addEventListener("mouseleave", leave);
      });
      return interactive;
    };

    const elements = bindInteractive();

    const observer = new MutationObserver(() => {
      bindInteractive();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
      observer.disconnect();
    };
  }, []);

  if (
    shouldDisableCursor()
  ) {
    return null;
  }

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "#c4ff00",
          transform: "translate(-50%, -50%)",
          mixBlendMode: "difference",
        }}
      />
      <div
        ref={followerRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] flex items-center justify-center"
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          background: "transparent",
          transform: "translate(-50%, -50%)",
          mixBlendMode: "difference",
        }}
      >
        <span
          ref={textRef}
          className="text-[9px] font-medium tracking-widest uppercase text-white opacity-0 select-none"
        />
      </div>
    </>
  );
};

export default MagneticCursor;
