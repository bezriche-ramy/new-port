import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleExperience = ({ experience }) => {
  return (
    <motion.div
      variants={fadeIn("right", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className="h-full w-full bg-black/80 backdrop-blur-sm border border-accent/50 rounded p-6 group 
                 hover:shadow-matrix-glow transition-all duration-500 flex flex-col"
    >
      {/* Matrix scan effect */}
      <div className="absolute inset-0 matrix-bg opacity-10"></div>
      
      <div className="terminal-header flex items-center gap-2 mb-4 pb-2 border-b border-accent/30">
        <div className="w-2 h-2 rounded-full bg-accent/50"></div>
        <div className="w-2 h-2 rounded-full bg-accent/30"></div>
        <div className="w-2 h-2 rounded-full bg-accent/20"></div>
      </div>

      <div className="font-code flex-grow">
        <h3 className="text-xl text-accent group-hover:text-highlight transition-colors duration-300 mb-2">
          {"> "}position: {experience.job}
        </h3>
        <p className="text-accent/80 mb-1">
          {"> "}organization: {experience.company}
        </p>
        <p className="text-accent/60 mb-4">
          {"> "}timeframe: {experience.date}
        </p>
        
        <p className="text-accent/90 mb-3">{"> "}responsibilities:</p>
        <ul className="list-none space-y-2">
          {experience.responsibilities.map((resp, index) => (
            <li key={index} className="text-accent/70 pl-4 relative">
              <span className="absolute left-0">{"> "}</span>
              {resp}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default SingleExperience;
