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
      className="fixed bottom-8 right-8 z-[98] w-12 h-12 flex items-center justify-center bg-bg-elevated border border-border-medium hover:border-accent transition-colors duration-300 rounded-full"
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
          stroke="rgba(196, 255, 0, 0.15)"
          strokeWidth="2"
        />
        <circle
          ref={progressRef}
          cx="24"
          cy="24"
          r="18"
          fill="none"
          stroke="#c4ff00"
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
          stroke="#c4ff00"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default BackToTop;
