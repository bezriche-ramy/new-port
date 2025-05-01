import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';

const HeroText = () => {
  return (
    <div className="w-full lg:w-1/2 flex flex-col sm:gap-4 md:gap-5 lg:gap-6 terminal-window 
                    sm:p-3 md:p-4 lg:p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:gap-3 md:gap-4"
      >
        <span className="text-accent font-code sm:text-xs md:text-sm lg:text-base">$ initiating_sequence...</span>
        <TypeAnimation
          sequence={[
            'Hello World!',
            1000,
            'I am BEZRICHE RAMY',
            1000,
            'Full Stack Developer',
            1000,
            'React Specialist',
            1000,
            'Creative Developer',
            1000
          ]}
          wrapper="h1"
          speed={50}
          className="sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold text-white matrix-text terminal-cursor"
          repeat={Infinity}
        />
        <span className="text-accent font-code sm:text-xs md:text-sm lg:text-base">$ loading_portfolio_data...</span>
        <div className="text-gray-300 font-code sm:text-sm md:text-base lg:text-lg">
          <p className="mb-2">{"> "}Building modern, responsive web applications</p>
          <p className="mb-2">{"> "}Crafting seamless user experiences with React</p>
          <p>{"> "}Turning complex ideas into elegant solutions</p>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroText;
