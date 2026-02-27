import { useEffect, useRef } from "react";
import { PiShieldCheckBold } from "react-icons/pi";
import {
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiSupabase,
  SiTypescript,
} from "react-icons/si";
import { gsap } from "../../lib/gsap";

const iconItems = [
  { Icon: SiReact, color: "#61dafb", top: "16%", left: "7%" },
  { Icon: SiNextdotjs, color: "#f5f5f7", top: "21%", right: "10%" },
  { Icon: SiJavascript, color: "#f7df1e", top: "46%", left: "5%" },
  { Icon: SiTypescript, color: "#3178c6", top: "52%", right: "7%" },
  { Icon: PiShieldCheckBold, color: "#ffd700", bottom: "16%", left: "11%" },
  { Icon: SiSupabase, color: "#3ecf8e", bottom: "12%", right: "36%" },
];

const TechStackIcons = () => {
  const iconRefs = useRef([]);

  useEffect(() => {
    const tweens = [];

    iconRefs.current.forEach((iconNode, index) => {
      if (!iconNode) {
        return;
      }

      gsap.fromTo(
        iconNode,
        { opacity: 0, y: 20, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.45,
          ease: "power2.out",
          delay: 0.5 + index * 0.06,
        }
      );

      tweens.push(
        gsap.to(iconNode, {
          y: index % 2 === 0 ? -14 : 14,
          duration: 2.8 + index * 0.25,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        })
      );
    });

    return () => {
      tweens.forEach((tween) => tween.kill());
    };
  }, []);

  return (
    <div className="hidden lg:block pointer-events-none">
      {iconItems.map((item, index) => {
        const style = {
          color: item.color,
          top: item.top,
          right: item.right,
          bottom: item.bottom,
          left: item.left,
        };

        return (
          <div
            key={`hero-icon-${index}`}
            ref={(node) => {
              iconRefs.current[index] = node;
            }}
            className="absolute z-[2] w-12 h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-glass flex items-center justify-center text-2xl"
            style={style}
          >
            <item.Icon />
          </div>
        );
      })}
    </div>
  );
};

export default TechStackIcons;
