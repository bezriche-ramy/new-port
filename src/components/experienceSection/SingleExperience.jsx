import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { PiSuitcaseFill, PiBriefcaseFill } from "react-icons/pi";

const SingleExperience = ({ experience, index }) => {
  const ref = useRef(null);

  // Mouse tracking for 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = (mouseX / width - 0.5) * 2;
    const yPct = (mouseY / height - 0.5) * 2;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const rotateX = useTransform(y, [-1, 1], [6, -6]);
  const rotateY = useTransform(x, [-1, 1], [-6, 6]);

  const springConfig = { stiffness: 400, damping: 30 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  // Dynamic Shine
  const shineX = useTransform(x, [-1, 1], [0, 100]);
  const shineY = useTransform(y, [-1, 1], [0, 100]);

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative mb-12 last:mb-0"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full cursor-pointer perspective-1000 will-change-transform"
      >
        {/* 3D Card */}
        <div
          className="absolute inset-0 bg-white rounded-3xl shadow-2xl border border-gray-100 backface-hidden group"
          style={{
            transform: "translateZ(0)",
            WebkitFontSmoothing: "antialiased",
            MozOsxFontSmoothing: "grayscale",
          }}
        >
          {/* Dynamic Glass Shine */}
          <motion.div
            className="absolute inset-0 z-10 opacity-20 mix-blend-overlay rounded-3xl pointer-events-none"
            style={{
              background: useTransform(
                [shineX, shineY],
                ([latestX, latestY]) =>
                  `radial-gradient(circle at ${latestX}% ${latestY}%, rgba(56, 189, 248, 0.5) 0%, transparent 80%)`
              ),
            }}
          />
          <div className="absolute inset-0 rounded-3xl border-2 border-white/50 pointer-events-none"></div>
        </div>

        {/* Invisible Layout Driver */}
        <div className="p-8 md:p-10 opacity-0 pointer-events-none relative z-0">
          <div className="flex items-start gap-6 mb-6">
            <div className="text-5xl p-4 flex-shrink-0">{index === 0 ? <PiBriefcaseFill /> : <PiSuitcaseFill />}</div>
            <div className="flex-grow">
              <h3 className="text-2xl font-black mb-2 leading-tight">{experience.job}</h3>
              <p className="text-lg font-bold mb-2">{experience.company}</p>
              <div className="inline-block px-4 py-2 rounded-full border-2 mb-4">
                <p className="text-sm font-bold">{experience.date}</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            {experience.responsibilities?.map((resp, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="text-xl mt-0.5 flex-shrink-0">✓</span>
                <span className="text-base font-medium leading-relaxed">{resp}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Visible 3D Content */}
        <div
          className="absolute inset-0 p-8 md:p-10 flex flex-col backface-hidden z-20"
          style={{ transform: "translateZ(40px)" }}
        >
          {/* Header with Icon */}
          <div className="flex items-start gap-6 mb-6">
            {/* Floating Icon */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="text-5xl text-accent bg-accent/10 p-4 rounded-2xl shadow-lg backface-hidden flex-shrink-0"
            >
              {index === 0 ? <PiBriefcaseFill /> : <PiSuitcaseFill />}
            </motion.div>

            <div className="flex-grow">
              <h3 className="text-2xl font-black text-gray-900 mb-2 group-hover:text-accent transition-colors backface-hidden leading-tight">
                {experience.job}
              </h3>
              <p className="text-lg font-bold text-accent mb-2 backface-hidden">{experience.company}</p>

              {/* Date Badge */}
              <div className="inline-block bg-gray-50 group-hover:bg-accent/5 px-4 py-2 rounded-full border-2 border-gray-200 group-hover:border-accent/40 transition-colors shadow-sm">
                <p className="text-sm font-bold text-gray-800 group-hover:text-accent backface-hidden transition-colors">
                  {experience.date}
                </p>
              </div>
            </div>
          </div>

          {/* Responsibilities */}
          <div className="space-y-3 flex-grow">
            {experience.responsibilities?.map((resp, idx) => (
              <div key={idx} className="flex items-start gap-3 group/item">
                <div className="text-accent text-xl mt-0.5 backface-hidden flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-800 font-medium leading-relaxed group-hover/item:text-gray-900 transition-colors backface-hidden text-base">
                  {resp}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Deep Shadow */}
        <motion.div
          className="absolute inset-0 bg-black/10 blur-xl rounded-3xl -z-10 backface-hidden"
          style={{
            transform: "translateZ(-50px)",
            scale: 0.95,
            x: useTransform(x, [-1, 1], [15, -15]),
            y: useTransform(y, [-1, 1], [15, -15]),
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default SingleExperience;
