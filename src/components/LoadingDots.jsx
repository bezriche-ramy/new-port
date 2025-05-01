import { motion } from "framer-motion";

const LoadingDots = () => {
  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
      <div className="relative">
        {/* Matrix rain background */}
        <div className="absolute inset-0 binary-rain-intense"></div>
        
        {/* Loading text */}
        <div className="relative z-10 text-center">
          <h2 className="text-accent font-code text-2xl mb-4 glitch" data-text="INITIALIZING_SYSTEM">
            INITIALIZING_SYSTEM
          </h2>
          <div className="flex gap-2 justify-center items-center">
            <span className="inline-block w-3 h-3 bg-accent rounded-full animate-pulse"></span>
            <span className="inline-block w-3 h-3 bg-accent rounded-full animate-pulse" style={{ animationDelay: "200ms" }}></span>
            <span className="inline-block w-3 h-3 bg-accent rounded-full animate-pulse" style={{ animationDelay: "400ms" }}></span>
          </div>
          <div className="mt-4 font-code text-accent/70">
            Loading security protocols...
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingDots;
