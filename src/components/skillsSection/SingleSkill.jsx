import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const SingleSkill = ({ text, imgSvg }) => {
  const ref = useRef(null);

  // Mouse tracking for fluid 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate rotation (max 20 degrees)
    const xPct = (mouseX / width - 0.5) * 2; // -1 to 1
    const yPct = (mouseY / height - 0.5) * 2; // -1 to 1

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const rotateX = useTransform(y, [-1, 1], [15, -15]);
  const rotateY = useTransform(x, [-1, 1], [-15, 15]);

  const springConfig = { stiffness: 400, damping: 30 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  // Dynamic Shine Effect
  const shineX = useTransform(x, [-1, 1], [0, 100]);
  const shineY = useTransform(y, [-1, 1], [0, 100]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative h-28 w-full cursor-pointer perspective-1000 will-change-transform" // Added will-change-transform
    >
      {/* 3D Card Block */}
      <div
        className="absolute inset-0 bg-white rounded-2xl shadow-xl border border-gray-100/50 backface-hidden"
        style={{
          transform: "translateZ(0)",
          WebkitFontSmoothing: "antialiased", // Force antialiasing
          MozOsxFontSmoothing: "grayscale"
        }}
      >
        {/* Dynamic Glass Shine */}
        <motion.div
          className="absolute inset-0 z-10 opacity-40 mix-blend-overlay rounded-2xl pointer-events-none"
          style={{
            background: useTransform(
              [shineX, shineY],
              ([latestX, latestY]) => `radial-gradient(circle at ${latestX}% ${latestY}%, rgba(255,255,255,0.8) 0%, transparent 80%)`
            )
          }}
        />

        {/* Card Content - Pushed in Z for depth */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center p-4 backface-hidden" // backface-hidden on content
          style={{ transform: "translateZ(20px)" }}
        >
          {/* Floating Icon Base */}
          <div className="relative mb-3">
            {/* Icon Shadow on Card Surface */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-black/20 blur-md rounded-full transform scale-y-50 translate-y-4"></div>

            {/* Actual Icon Floating Higher */}
            <motion.div
              className="text-4xl text-gray-700 relative z-20 backface-hidden"
              style={{ transform: "translateZ(30px)" }}
            >
              {imgSvg}
            </motion.div>
          </div>

          <p className="font-bold text-gray-800 text-sm tracking-wide backface-hidden" style={{ transform: "translateZ(10px)" }}>
            {text}
          </p>

          {/* Progress Bar embedded in card */}
          <div className="w-16 h-1 bg-gray-100 rounded-full mt-2 overflow-hidden shadow-inner transform-gpu">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="h-full bg-gradient-to-r from-accent to-blue-500"
            />
          </div>
        </div>

        {/* Realistic Card Thickness/Sides (Pseudo-3D) */}
        <div className="absolute inset-0 rounded-2xl border-2 border-white/50 pointer-events-none"></div>
      </div>

      {/* Deep Shadow behind the card that moves oppositely */}
      <motion.div
        className="absolute inset-0 bg-black/20 blur-xl rounded-2xl -z-10 backface-hidden"
        style={{
          transform: "translateZ(-20px)",
          scale: 0.9,
          x: useTransform(x, [-1, 1], [10, -10]),
          y: useTransform(y, [-1, 1], [10, -10]),
        }}
      />
    </motion.div>
  );
};

export default SingleSkill;
