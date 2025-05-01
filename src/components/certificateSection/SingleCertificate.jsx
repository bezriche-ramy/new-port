import { motion } from 'framer-motion';
import { useState } from 'react';

const SingleCertificate = ({ image, description, title }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="w-full sm:aspect-[3/4] md:aspect-[4/3] perspective-1000" 
         onClick={() => setIsFlipped(!isFlipped)}>
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
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Back of card */}
        <motion.div
          className="absolute w-full h-full backface-hidden rounded overflow-hidden 
                   bg-black border border-accent/50 sm:p-4 md:p-6 
                   flex items-center justify-center
                   hover:shadow-matrix-glow transition-all duration-300"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="relative z-10 text-center">
            <div className="terminal-header flex items-center gap-2 mb-3 md:mb-4 pb-2 border-b border-accent/30">
              <div className="w-2 h-2 rounded-full bg-accent/50"></div>
              <div className="w-2 h-2 rounded-full bg-accent/30"></div>
              <div className="w-2 h-2 rounded-full bg-accent/20"></div>
            </div>
            
            <h3 className="sm:text-lg md:text-xl font-bold mb-3 md:mb-4 text-accent font-code terminal-text">
              {"> "}{title}
            </h3>
            <p className="text-accent/80 sm:text-xs md:text-sm mb-3 md:mb-4 font-code">
              {"> "}{description}
            </p>
            <p className="text-xs text-accent/60 font-code terminal-text">
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
