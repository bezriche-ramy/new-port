import HeroText from "./HeroText";
import HeroPic from "./HeroPic";
import VantaBackground from "./VantaBackground";
import TechStackIcons from "./TechStackIcons";

const HeroMain = () => {
  return (
    <div id="hero" className="pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pt-48 lg:pb-32 overflow-hidden relative min-h-screen flex items-center">
      {/* Vanta.js Animated Cloud Background */}
      <VantaBackground />

      {/* Professional Tech Stack Icons */}
      <TechStackIcons />

      <div className="max-w-[1200px] mx-auto px-4 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Text Section */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <HeroText />
          </div>

          {/* Image Section */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <HeroPic />
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroMain;
