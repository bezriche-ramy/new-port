import HeroText from "./HeroText";
import HeroPic from "./HeroPic";
import VantaBackground from "./VantaBackground";
import TechStackIcons from "./TechStackIcons";
import { motion } from "framer-motion";

const HeroMain = () => {
  return (
    <div id="hero" className="pt-32 pb-20 sm:pt-40 sm:pb-32 lg:pt-48 lg:pb-40 overflow-hidden relative min-h-screen flex items-center bg-void">
      {/* Vanta.js Animated Background */}
      <VantaBackground />

      {/* Ambient Gradient Orbs */}
      <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] animate-pulse-subtle" />
      <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-electric/20 rounded-full blur-[140px] animate-pulse-subtle" />

      {/* Professional Tech Stack Icons */}
      <TechStackIcons />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">

          {/* Text Section - Centered, Edge-to-Edge */}
          <motion.div
            className="order-2 lg:order-1 flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <HeroText />
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <HeroPic />
          </motion.div>

        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-void to-transparent pointer-events-none" />
    </div>
  );
};

export default HeroMain;
