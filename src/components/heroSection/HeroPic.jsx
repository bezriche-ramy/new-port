import { motion } from "framer-motion";
import { PiHexagonBold, PiCodeBold } from "react-icons/pi";

const HeroPic = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative w-[300px] h-[300px] sm:w-[320px] sm:h-[320px] lg:w-[380px] lg:h-[380px]"
    >
      {/* Main Image Container */}
      <div className="absolute inset-0 rounded-full border-[6px] border-white shadow-2xl overflow-hidden z-10">
        <img
          src="https://i.ibb.co/DHCh1hBg/1770208357710.png"
          alt="Ramy Bezriche"
          className="w-full h-full object-cover"
        />

        {/* Professional Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
      </div>

      {/* All decorative elements removed for clean, professional look */}

    </motion.div>
  );
};

export default HeroPic;
