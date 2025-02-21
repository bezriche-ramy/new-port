import { motion } from "framer-motion";

const LoadingDots = () => {
  return (
    <div className="flex items-center justify-center bg-neutral-900/50 rounded-lg p-8 backdrop-blur-sm">
      <div className="flex gap-3">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="w-4 h-4 bg-cyan/80 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 1, 0.3],
              filter: [
                'brightness(0.8)',
                'brightness(1.2)',
                'brightness(0.8)'
              ]
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              delay: index * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoadingDots;
