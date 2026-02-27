import { useEffect, useRef } from "react";
import { BsCodeSlash } from "react-icons/bs";
import { gsap } from "../../lib/gsap";

const AboutMeImage = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    const node = cardRef.current;
    if (!node) {
      return undefined;
    }

    const move = (event) => {
      const rect = node.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      gsap.to(node, {
        rotateY: x * 10,
        rotateX: -y * 10,
        transformPerspective: 900,
        transformOrigin: "center",
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const leave = () => {
      gsap.to(node, {
        rotateY: 0,
        rotateX: 0,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    node.addEventListener("mousemove", move);
    node.addEventListener("mouseleave", leave);

    return () => {
      node.removeEventListener("mousemove", move);
      node.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <div className="w-full flex justify-center lg:justify-end">
      <div ref={cardRef} className="glass-panel w-full max-w-[360px] aspect-square p-6 sm:p-8">
        <div className="w-full h-full rounded-2xl border border-white/10 bg-gradient-to-br from-accent-1/15 to-accent-2/10 flex items-center justify-center">
          <BsCodeSlash className="text-7xl sm:text-8xl text-white/70" />
        </div>
      </div>
    </div>
  );
};

export default AboutMeImage;
