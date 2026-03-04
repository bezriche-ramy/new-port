const defaultEasing = (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t));

export const getLenis = () => {
  if (typeof window === "undefined") return null;
  return window.__lenis ?? null;
};

const fallbackScrollToY = (top) => {
  window.scrollTo({ top, behavior: "auto" });
};

export const scrollToSection = (
  sectionId,
  { offset = -80, duration = 1, immediate = false } = {}
) => {
  if (typeof window === "undefined") return;

  const target = document.getElementById(sectionId);
  if (!target) return;

  const lenis = getLenis();
  if (lenis?.scrollTo) {
    lenis.scrollTo(target, {
      offset,
      duration,
      immediate,
      easing: defaultEasing,
    });
    return;
  }

  const top = target.getBoundingClientRect().top + window.scrollY + offset;
  fallbackScrollToY(top);
};

export const scrollToTop = ({ duration = 1, immediate = false } = {}) => {
  if (typeof window === "undefined") return;

  const lenis = getLenis();
  if (lenis?.scrollTo) {
    lenis.scrollTo(0, {
      duration,
      immediate,
      easing: defaultEasing,
    });
    return;
  }

  fallbackScrollToY(0);
};
