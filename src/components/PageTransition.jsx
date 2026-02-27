import { useEffect, useRef, useState } from "react";
import { gsap } from "../lib/gsap";

const PageTransition = () => {
  const [isVisible, setIsVisible] = useState(true);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (!overlayRef.current) {
      return undefined;
    }

    const tl = gsap.timeline({
      delay: 0.2,
      onComplete: () => setIsVisible(false),
    });

    tl.fromTo(".page-transition-logo", { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" })
      .to(".page-transition-bar", { width: "100%", duration: 1.05, ease: "power2.inOut" }, "<")
      .to(".page-transition-logo", { opacity: 0, y: -18, duration: 0.26, ease: "power2.in" }, ">-0.08")
      .to(overlayRef.current, { yPercent: -100, duration: 0.75, ease: "power3.inOut" });

    return () => tl.kill();
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div ref={overlayRef} className="fixed inset-0 z-[9999] bg-background/95 backdrop-blur-xl flex items-center justify-center">
      <div className="glass-panel w-[min(460px,88vw)] p-8 md:p-10 text-center">
        <h1 className="page-transition-logo font-display text-5xl md:text-6xl font-bold gradient-text">RB</h1>
        <p className="text-text-secondary text-xs uppercase tracking-[0.3em] mt-2">Loading Experience</p>

        <div className="mt-8 h-1.5 rounded-full bg-white/8 overflow-hidden">
          <div className="page-transition-bar h-full w-0 rounded-full bg-gradient-to-r from-accent-1 to-accent-2" />
        </div>
      </div>
    </div>
  );
};

export default PageTransition;
