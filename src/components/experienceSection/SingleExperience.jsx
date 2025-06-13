import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleExperience = ({ experience }) => {
  return (
    <motion.div
      variants={fadeIn("right", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className="card p-6 group hover-lift h-full flex flex-col"
    >
      <div className="flex-grow">
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-accent transition-colors duration-300 mb-2">
          {experience.job}
        </h3>
        <p className="text-accent font-medium mb-1">
          {experience.company}
        </p>
        <p className="text-gray-600 mb-4">
          {experience.date}
        </p>
        
        <p className="text-gray-700 mb-3 font-medium">Responsibilities:</p>
        <ul className="list-disc list-inside space-y-2">
          {experience.responsibilities && experience.responsibilities.map((resp, index) => (
            <li key={index} className="text-gray-600">
              {resp}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default SingleExperience;
