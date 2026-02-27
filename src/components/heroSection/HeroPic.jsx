import { useEffect, useRef } from "react";
import { gsap } from "../../lib/gsap";

const HeroPic = () => {
  const frameRef = useRef(null);

  useEffect(() => {
    if (!frameRef.current) {
      return undefined;
    }

    const tween = gsap.to(frameRef.current, {
      y: -16,
      duration: 4.5,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <div ref={frameRef} className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] lg:w-[390px] lg:h-[390px]">
      <div className="absolute -inset-5 rounded-[34px] bg-gradient-to-br from-accent-1/25 to-accent-2/25 blur-2xl" />
      <div className="glass-panel absolute inset-0 p-3 rounded-[32px]">
        <div className="h-full w-full rounded-[24px] overflow-hidden border border-white/15">
          <img
            src="https://i.ibb.co/DHCh1hBg/1770208357710.png"
            alt="Ramy Bezriche"
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>
      </div>
    </div>
  );
};

export default HeroPic;
