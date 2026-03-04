import { useEffect, useRef, useCallback } from "react";

const GLITCH_CHARS = "!@#$%^&*()_+-=[]{}|;:,.<>?/~`01";

const ScrambleText = ({ text, className = "", as: Tag = "span" }) => {
  const elRef = useRef(null);
  const animRef = useRef(null);

  const scramble = useCallback(() => {
    const el = elRef.current;
    if (!el || animRef.current) return;

    const original = text;
    const length = original.length;
    let iteration = 0;

    animRef.current = setInterval(() => {
      el.textContent = original
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";
          if (i < iteration) return original[i];
          return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
        })
        .join("");

      iteration += 1 / 2;

      if (iteration >= length) {
        el.textContent = original;
        clearInterval(animRef.current);
        animRef.current = null;
      }
    }, 30);
  }, [text]);

  const reset = useCallback(() => {
    if (animRef.current) {
      clearInterval(animRef.current);
      animRef.current = null;
    }
    if (elRef.current) {
      elRef.current.textContent = text;
    }
  }, [text]);

  useEffect(() => {
    return () => {
      if (animRef.current) clearInterval(animRef.current);
    };
  }, []);

  return (
    <Tag
      ref={elRef}
      className={className}
      onMouseEnter={scramble}
      onMouseLeave={reset}
      data-cursor="magnetic"
    >
      {text}
    </Tag>
  );
};

export default ScrambleText;
