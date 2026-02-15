import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const PageTransition = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial page load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-void flex items-center justify-center"
        >
          {/* Animated Logo/Text */}
          <div className="relative">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-6xl md:text-8xl font-black gradient-text mb-4">
                RB
              </h1>
              <p className="text-accent text-sm tracking-[0.3em] uppercase">
                Loading Experience
              </p>
            </motion.div>

            {/* Animated Progress Bar */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.8, ease: 'easeInOut' }}
              className="mt-8 h-1 bg-gradient-to-r from-accent via-electric to-accent rounded-full"
            />

            {/* Orbiting particles */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40"
            >
              <div className="absolute top-0 left-1/2 w-2 h-2 bg-accent rounded-full blur-sm" />
              <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-electric rounded-full blur-sm" />
              <div className="absolute left-0 top-1/2 w-2 h-2 bg-accent rounded-full blur-sm" />
              <div className="absolute right-0 top-1/2 w-2 h-2 bg-electric rounded-full blur-sm" />
            </motion.div>
          </div>

          {/* Background grid effect */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(0, 240, 255, 0.1) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(0, 240, 255, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px',
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageTransition;
