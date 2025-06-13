import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { BsGithub, BsArrowRight } from 'react-icons/bs';

const HeroText = () => {
  return (
    <div className="w-full lg:w-1/2 flex flex-col sm:gap-4 md:gap-5 lg:gap-6 
                    sm:p-3 md:p-4 lg:p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:gap-3 md:gap-4"
      >
        <span className="text-gray-600 font-medium sm:text-sm md:text-base lg:text-lg">Hello, I'm</span>
        <TypeAnimation
          sequence={[
            'RAMY BEZRICHE',
            2000,
            'Full Stack Developer',
            2000,
            'React Specialist',
            2000,
            'UI/UX Designer',
            2000
          ]}
          wrapper="h1"
          speed={50}
          className="sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight"
          repeat={Infinity}
        />
        <div className="text-gray-600 sm:text-base md:text-lg lg:text-xl leading-relaxed">
          <p className="mb-3">Passionate full-stack developer specializing in modern web technologies</p>
          <p className="mb-3">Building scalable applications with React, Node.js, and cutting-edge tools</p>
          <p>Committed to creating exceptional user experiences through clean, efficient code</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <motion.a 
            href="https://github.com/bezriche-ramy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary flex items-center justify-center gap-2 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <BsGithub className="group-hover:scale-110 transition-transform duration-300" />
            View GitHub
          </motion.a>
          <motion.a 
            href="#projects"
            className="btn-secondary flex items-center justify-center gap-2 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
            <BsArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroText;
