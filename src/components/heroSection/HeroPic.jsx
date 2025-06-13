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
      {/* Profile image container */}
      <div className="relative z-10">
        <div className="relative group">
          <img
            src="https://iili.io/FqAZ8jp.md.jpg"
            alt="Professional Web Developer"
            className="h-[350px] w-[350px] rounded-full object-cover 
                     border-4 border-white shadow-2xl
                     group-hover:shadow-accent/20
                     transition-all duration-500 hover:scale-105"
          />
          
          {/* Professional highlight overlay */}
          <div 
            className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent 
                       rounded-full pointer-events-none opacity-0 group-hover:opacity-100
                       transition-opacity duration-300"
          ></div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroPic;
