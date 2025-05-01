import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroImage = () => {
  return (
    <div className="h-full w-full flex items-center justify-center lg:justify-end">
      <motion.div
        variants={fadeIn("left", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="relative w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden"
      >
        {/* Matrix-style background */}
        <div className="absolute inset-0 matrix-bg"></div>
        
        {/* Removed binary-rain-intense for performance */}
        
        {/* Glowing border effect */}
        <div className="absolute inset-0 border-2 border-accent rounded-full shadow-matrix-glow"></div>
        
        {/* Profile image container */}
        <div className="relative z-10 w-full h-full">
          <img
            src="/ICONR.png"
            alt="Profile"
            className="w-full h-full object-cover mix-blend-luminosity"
          />
          
          {/* Scan line effect removed for performance */}
        </div>
      </motion.div>
    </div>
  );
};

export default HeroImage;
