import { motion } from 'framer-motion';
import { useState } from 'react';

const SingleCertificate = ({ image, description, title }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="w-full aspect-[4/3] perspective-1000" onClick={() => setIsFlipped(!isFlipped)}>
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 500, damping: 30 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front of card */}
        <motion.div
          className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Back of card */}
        <motion.div
          className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden bg-[#1a1a1a] p-6 flex items-center justify-center"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">{title}</h3>
            <p className="text-gray-300 mb-4">{description}</p>
            <p className="text-sm text-gray-400">Click to flip back</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SingleCertificate;
