import { motion } from "framer-motion";

const LoadingDots = () => {
  return (
    <div className="fixed inset-0 bg-white/95 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Loading Portfolio
          </h2>
          <div className="flex gap-2 justify-center items-center mb-4">
            <motion.span 
              className="inline-block w-3 h-3 bg-accent rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0 }}
            />
            <motion.span 
              className="inline-block w-3 h-3 bg-accent rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
            />
            <motion.span 
              className="inline-block w-3 h-3 bg-accent rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
            />
          </div>
          <p className="text-gray-600">
            Preparing your experience...
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default LoadingDots;
