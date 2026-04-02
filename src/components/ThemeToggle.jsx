import { useRef } from "react";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { useTheme } from "../context/ThemeContext";
import { gsap } from "../lib/gsap";

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();
  const buttonRef = useRef(null);

  const handleThemeToggle = () => {
    if (buttonRef.current) {
      gsap.fromTo(
        buttonRef.current,
        { scale: 0.86, rotate: -12 },
        { scale: 1, rotate: 0, duration: 0.5, ease: "back.out(2.6)" }
      );
    }

    toggleTheme();
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={handleThemeToggle}
      className="theme-toggle-btn"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <BsSun className="h-4 w-4" />
      ) : (
        <BsMoonStars className="h-4 w-4" />
      )}
    </button>
  );
};

export default ThemeToggle;
