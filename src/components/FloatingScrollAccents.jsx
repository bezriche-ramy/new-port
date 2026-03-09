import { useEffect, useRef } from "react";
import { gsap } from "../lib/gsap";

const accentConfigs = [
  {
    position: "right-[10%] top-[38%]",
    shellClassName: "h-56 w-56",
    innerClassName: "h-full w-full rounded-full blur-[110px]",
    innerStyle: {
      background:
        "radial-gradient(circle, rgba(196,255,0,0.16) 0%, rgba(196,255,0,0.02) 42%, transparent 72%)",
    },
  },
];

const FloatingScrollAccents = () => {
  const rootRef = useRef(null);
  const accentRefs = useRef([]);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      accentRefs.current.filter(Boolean).forEach((accent, index) => {
        gsap.to(accent, {
          yPercent: index === 0 ? -18 : index === 1 ? 24 : -12,
          xPercent: index === 1 ? -8 : 6,
          rotation: index === 2 ? -10 : 14,
          ease: "none",
          scrollTrigger: {
            trigger: document.documentElement,
            start: "top top",
            end: "bottom bottom",
            scrub: 1.1 + index * 0.2,
          },
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={rootRef}
      className="pointer-events-none fixed inset-0 z-0 hidden overflow-hidden lg:block"
      aria-hidden="true"
    >
      {accentConfigs.map((accent, index) => (
        <div
          key={accent.position}
          ref={(node) => {
            accentRefs.current[index] = node;
          }}
          className={`absolute opacity-60 ${accent.position} ${accent.shellClassName}`}
        >
          <div
            className={accent.innerClassName}
            style={accent.innerStyle}
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingScrollAccents;
