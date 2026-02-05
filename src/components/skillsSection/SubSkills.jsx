import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { PiCircleFill } from "react-icons/pi"; // Using SVG for crisp dots

const SubSkillsData = [
  {
    category: "Développement Frontend",
    skills: ["React.js & Ecosystème", "JavaScript Moderne/TypeScript", "Design Réactif & Animations", "Gestion d'État (Redux)"]
  },
  {
    category: "Développement Backend",
    skills: ["Node.js & Express", "Architecture API REST", "Gestion de Bases de Données", "Sécurité Côté Serveur"]
  },
  {
    category: "Cybersécurité Offensive",
    skills: ["Tests d'Intrusion (Pentesting)", "Analyse de Malwares", "Ingénierie Inverse", "Audits de Sécurité"]
  },
  {
    category: "Outils & DevOps",
    skills: ["Git & Versioning", "Docker & Conteneurisation", "Linux (Kali/Ubuntu)", "CI/CD Pipelines"]
  }
];

const SubSkillCard = ({ title, skills, index }) => {
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

    const xPct = (mouseX / width - 0.5) * 2;
    const yPct = (mouseY / height - 0.5) * 2;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const rotateX = useTransform(y, [-1, 1], [8, -8]);
  const rotateY = useTransform(x, [-1, 1], [-8, 8]);

  const springConfig = { stiffness: 400, damping: 30 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  // Dynamic Shine
  const shineX = useTransform(x, [-1, 1], [0, 100]);
  const shineY = useTransform(y, [-1, 1], [0, 100]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative w-full cursor-pointer perspective-1000 will-change-transform h-auto"
    >
      {/* 3D Card Block - Background */}
      <div
        className="absolute inset-0 bg-white rounded-2xl shadow-xl border border-gray-100 backface-hidden group"
        style={{
          transform: "translateZ(0)",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale"
        }}
      >
        {/* Dynamic Glass Shine */}
        <motion.div
          className="absolute inset-0 z-10 opacity-30 mix-blend-overlay rounded-2xl pointer-events-none"
          style={{
            background: useTransform(
              [shineX, shineY],
              ([latestX, latestY]) => `radial-gradient(circle at ${latestX}% ${latestY}%, rgba(56, 189, 248, 0.4) 0%, transparent 80%)`
            )
          }}
        />

        {/* Realistic Thickness Border */}
        <div className="absolute inset-0 rounded-2xl border-2 border-white/50 pointer-events-none"></div>
      </div>

      {/* 
        INVISIBLE LAYOUT DRIVER
        This ensures the container height adapts to the content perfectly.
      */}
      <div className="p-8 opacity-0 pointer-events-none relative z-0">
        <h4 className="text-xl font-bold mb-6 pb-2">{title}</h4>
        <div className="space-y-3">
          {skills.map((skill, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className="text-[10px]">●</div>
              <p className="font-medium">{skill}</p>
            </div>
          ))}
        </div>
      </div>

      {/* VISIBLE 3D CONTENT */}
      <div
        className="absolute inset-0 p-8 flex flex-col backface-hidden z-20"
        style={{ transform: "translateZ(30px)" }}
      >
        {/* Header - Clean Style */}
        <h4 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-3 group-hover:text-accent transition-colors backface-hidden">
          {title}
        </h4>

        {/* List with Blue Dots */}
        <div className="space-y-3 flex-grow">
          {skills.map((skill, idx) => (
            <div key={idx} className="flex items-center gap-3 group/item">
              {/* Fixed "Points": Static sharp SVG Circle instead of blurry CSS border-radius */}
              <div className="text-accent text-[10px] backface-hidden flex-shrink-0 mt-1">
                <PiCircleFill /> {/* Solid crisp circle */}
              </div>
              <p className="text-gray-600 font-semibold text-base group-hover/item:text-black transition-colors backface-hidden leading-relaxed">
                {skill}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Deep Shadow */}
      <motion.div
        className="absolute inset-0 bg-black/10 blur-xl rounded-2xl -z-10 backface-hidden"
        style={{
          transform: "translateZ(-40px)",
          scale: 0.9,
          x: useTransform(x, [-1, 1], [15, -15]),
          y: useTransform(y, [-1, 1], [15, -15]),
        }}
      />
    </motion.div>
  );
};

const SubSkills = () => {
  return (
    <div className="border-t border-gray-200 mt-20 pt-16 pb-8">
      <div className="section-container">
        <h3 className="section-title text-black mb-12 text-center">
          Domaines de Spécialisation
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {SubSkillsData.map((spec, index) => (
            <SubSkillCard
              key={index}
              title={spec.category}
              skills={spec.skills}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubSkills;
