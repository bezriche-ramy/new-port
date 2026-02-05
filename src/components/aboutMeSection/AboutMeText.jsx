import { Link } from "react-scroll";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { PiStudentBold, PiUserCircleBold, PiGlobeHemisphereWestBold } from "react-icons/pi";
import { useRef } from "react";

const AboutMeText = () => {
  // 3D Tilt Logic
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const rotateX = useTransform(y, [-0.5, 0.5], [5, -5]); // Subtle tilt
  const rotateY = useTransform(x, [-0.5, 0.5], [-5, 5]);

  const springConfig = { stiffness: 300, damping: 30, mass: 0.5 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  return (
    <div className="flex flex-col items-center text-center max-w-4xl mx-auto w-full px-4">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="section-title mb-12 text-gray-900"
      >
        À Propos de Moi
      </motion.h2>

      {/* 3D Interactive Card */}
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full"
      >
        <div
          className="glass-card p-8 md:p-12 w-full relative overflow-hidden backdrop-blur-xl bg-white/40 border border-white/50 shadow-xl rounded-3xl"
          style={{ transform: "translateZ(20px)" }}
        >
          {/* Decorative Gradient Overlay - Reduced opacity for better text contrast */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

          {/* Content Sections with Staggered Animation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">

            {/* Profil */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-left group relative"
            >
              {/* Floating Icon */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 left-0 text-4xl text-accent opacity-20 group-hover:opacity-100 transition-opacity duration-300"
              >
                <PiUserCircleBold />
              </motion.div>

              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2 group-hover:text-accent transition-colors">
                Profil
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Étudiant en informatique passionné et autonome, spécialisé en cybersécurité et analyse de malwares. Je transforme la théorie en solutions sécurisées concrètes via l'open source et des projets réels.
              </p>
            </motion.div>

            {/* Formation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-left group relative"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-10 left-0 text-4xl text-blue-500 opacity-20 group-hover:opacity-100 transition-opacity duration-300"
              >
                <PiStudentBold />
              </motion.div>

              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2 group-hover:text-blue-600 transition-colors">
                Formation
              </h3>
              <div className="text-gray-600 leading-relaxed text-sm space-y-2">
                <p className="font-semibold text-gray-900">Ingénieur d'État (2022-2027)</p>
                <p>USTHB, Alger</p>
                <p className="inline-block bg-blue-50/50 text-blue-700 px-2 py-1 rounded text-xs font-medium border border-blue-100">
                  Spécialisation Cybersécurité
                </p>
              </div>
            </motion.div>

            {/* Engagement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-left group relative"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute -top-10 left-0 text-4xl text-purple-500 opacity-20 group-hover:opacity-100 transition-opacity duration-300"
              >
                <PiGlobeHemisphereWestBold />
              </motion.div>

              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2 group-hover:text-purple-600 transition-colors">
                Engagement
              </h3>
              <div className="text-gray-600 leading-relaxed text-sm space-y-2">
                <p>• GDG Algeria (Relations Publiques)</p>
                <p>• Shellmates (Développement)</p>
                <p className="italic text-gray-500 text-xs mt-2">Leadership actif & Communauté</p>
              </div>
            </motion.div>
          </div>

          <div className="mt-10 border-t border-gray-200 pt-6">
            <Link
              spy={true}
              smooth={true}
              duration={500}
              offset={-120}
              to="projects"
              className="btn-primary cursor-pointer hover-lift inline-flex items-center gap-2"
            >
              Voir Mes Projets
            </Link>
          </div>
        </div>

        {/* Floating 3D Background Elements attached to card for Perspective */}
        <motion.div
          className="absolute -right-6 -top-6 w-20 h-20 bg-accent/20 rounded-full blur-xl -z-10"
          style={{ transform: "translateZ(-50px)" }}
        />
        <motion.div
          className="absolute -left-6 -bottom-6 w-32 h-32 bg-blue-500/20 rounded-full blur-xl -z-10"
          style={{ transform: "translateZ(-50px)" }}
        />

      </motion.div>
    </div>
  );
};

export default AboutMeText;
