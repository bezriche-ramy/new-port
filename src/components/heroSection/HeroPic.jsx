import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="relative w-full h-full flex items-center justify-center"
    >
      {/* Binary rain effect container */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="binary-rain-fast"></div>
        <div className="binary-rain-slow" style={{ left: '25%', animationDelay: '-3s' }}></div>
        <div className="binary-rain-med" style={{ left: '75%', animationDelay: '-7s' }}></div>
      </div>

      {/* Profile image container */}
      <div className="relative z-10">
        <div className="relative group">
          <img
            src="https://i.ibb.co/Dfby7LGy/HexaPic.jpg"
            alt="bezriche ramy"
            className="h-[350px] w-[350px] rounded-full object-cover 
                     border-2 border-accent shadow-matrix-glow
                     group-hover:shadow-matrix-strong 
                     transition-all duration-500"
          />
          
          {/* Scanline effect */}
          <div 
            className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/10 to-transparent 
                       rounded-full pointer-events-none"
            style={{
              animation: 'scan 2s linear infinite',
              backgroundSize: '100% 8px'
            }}
          ></div>

          {/* Matrix code overlay */}
          <div className="absolute inset-0 rounded-full overflow-hidden opacity-30">
            <div className="matrix-code"></div>
          </div>
        </div>
      </div>

      {/* Add matrix-style CSS animations */}
      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }

        .binary-rain-fast {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(0deg, 
            transparent 0%, 
            rgba(0, 255, 65, 0.2) 50%, 
            transparent 100%
          );
          animation: rain 1s linear infinite;
        }

        .binary-rain-slow {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 50%;
          background: linear-gradient(0deg, 
            transparent 0%, 
            rgba(0, 255, 65, 0.1) 50%, 
            transparent 100%
          );
          animation: rain 2s linear infinite;
        }

        .binary-rain-med {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 50%;
          background: linear-gradient(0deg, 
            transparent 0%, 
            rgba(0, 255, 65, 0.15) 50%, 
            transparent 100%
          );
          animation: rain 1.5s linear infinite;
        }

        @keyframes rain {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }

        .matrix-code {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: repeating-linear-gradient(
            0deg,
            transparent 0%,
            rgba(0, 255, 65, 0.1) 50%,
            transparent 100%
          );
          background-size: 100% 2px;
          animation: scroll 20s linear infinite;
        }

        @keyframes scroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </motion.div>
  );
};

export default HeroPic;
