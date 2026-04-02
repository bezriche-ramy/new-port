import { useEffect, useRef, useState } from "react";
import { gsap } from "../lib/gsap";
import { scrollToTop } from "../lib/scroll";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  const btnRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollY / docHeight : 0;

      setVisible(scrollY > 600);

      // Update circular progress
      if (progressRef.current) {
        const circumference = 2 * Math.PI * 18;
        progressRef.current.style.strokeDashoffset = circumference * (1 - progress);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!btnRef.current) return;
    gsap.to(btnRef.current, {
      scale: visible ? 1 : 0,
      opacity: visible ? 1 : 0,
      duration: 0.3,
      ease: visible ? "back.out(2)" : "power2.in",
    });
  }, [visible]);

  const handleScrollToTop = () => {
    scrollToTop({ duration: 1 });
  };

  const circumference = 2 * Math.PI * 18;

  return (
    <button
      ref={btnRef}
      type="button"
      onClick={handleScrollToTop}
      className="theme-soft-panel fixed bottom-8 right-8 z-[98] flex h-12 w-12 items-center justify-center rounded-full border border-border-medium bg-bg-elevated transition-colors duration-300 hover:border-accent"
      style={{ transform: "scale(0)", opacity: 0 }}
      aria-label="Back to top"
      data-cursor="magnetic"
    >
      {/* Circular progress ring */}
      <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 48 48">
        <circle
          cx="24"
          cy="24"
          r="18"
          fill="none"
          stroke="rgb(var(--accent-rgb) / 0.2)"
          strokeWidth="2"
        />
        <circle
          ref={progressRef}
          cx="24"
          cy="24"
          r="18"
          fill="none"
          stroke="rgb(var(--accent-rgb) / 1)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
        />
      </svg>

      {/* Arrow */}
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        className="relative z-10"
      >
        <path
          d="M7 12V2M7 2L2 7M7 2L12 7"
          stroke="rgb(var(--accent-rgb) / 1)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default BackToTop;
