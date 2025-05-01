import { motion } from 'framer-motion';
import { useState } from 'react';

const SingleCertificate = ({ image, description, title }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="w-full h-full" onClick={() => setIsFlipped(!isFlipped)}>
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 500, damping: 30 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front of card */}
        <motion.div
          className="absolute w-full h-full backface-hidden rounded overflow-hidden 
                   border border-accent/50 bg-black/90 
                   hover:shadow-matrix-glow transition-all duration-300"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="absolute inset-0 matrix-bg opacity-10"></div>
          <div className="w-full h-full p-2 sm:p-3 md:p-4 flex items-center justify-center">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-contain max-h-full"
            />
          </div>
        </motion.div>

        {/* Back of card */}
        <motion.div
          className="absolute w-full h-full backface-hidden rounded overflow-hidden 
                   bg-black border border-accent/50 p-3 sm:p-4 md:p-6 
                   flex items-center justify-center
                   hover:shadow-matrix-glow transition-all duration-300"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="relative z-10 text-center">
            <div className="terminal-header flex items-center gap-2 mb-2 sm:mb-3 pb-2 border-b border-accent/30">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent/50"></div>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent/30"></div>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent/20"></div>
            </div>
            
            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-accent font-code terminal-text">
              {"> "}{title}
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-accent/80 mb-2 sm:mb-3 font-code">
              {"> "}{description}
            </p>
            <p className="text-[10px] sm:text-xs text-accent/60 font-code terminal-text">
              {"> "}click_to_flip_back
            </p>
          </div>
          <div className="absolute inset-0 matrix-bg opacity-10"></div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SingleCertificate;
