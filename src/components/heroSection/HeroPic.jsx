import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroPic = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="relative w-full h-full flex items-center justify-center"
    >
      {/* Binary rain effect container */}
      {/* Removed extra binary-rain layers for performance */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="binary-rain-fast"></div>
      </div>

      {/* Profile image container */}
      <div className="relative z-10">
        <div className="relative group">
          <img
            src="https://i.ibb.co/21qXwX3F/IMG-20250502-103125.jpg"
            alt="bezriche ramy"
            className="h-[350px] w-[350px] rounded-full object-cover 
                     border-2 border-accent shadow-matrix-glow
                     group-hover:shadow-matrix-strong 
                     transition-all duration-500"
          />
          
          {/* Scanline effect */}
          <div 
            className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/10 to-transparent 
                       rounded-full pointer-events-none scanline-animation"
            style={{ backgroundSize: '100% 8px' }}
          ></div>

          {/* Matrix code overlay removed for performance */}
        </div>
      </div>

      {/* CSS animations moved to index.css */}
    </motion.div>
  );
};

export default HeroPic;
