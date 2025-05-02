import HeroText from "./HeroText";
import HeroPic from "./HeroPic";

const HeroMain = () => {
  return (
    <div id="hero" className="pt-28 sm:pt-32 md:pt-40 pb-8 sm:pb-12 md:pb-16">
      <div className="flex flex-col md:flex-row max-w-[1200px] mx-auto justify-between items-center relative px-4 gap-8">
        <HeroText />
        <HeroPic />
      </div>
    </div>
  );
};

export default HeroMain;
