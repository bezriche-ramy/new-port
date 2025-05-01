import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const specializations = [
  {
    category: "Frontend Development",
    skills: ["UI/UX Implementation", "Responsive Design", "State Management", "Performance Optimization"]
  },
  {
    category: "Backend Development",
    skills: ["RESTful APIs", "Database Design", "Authentication", "Server Architecture"]
  },
  {
    category: "Development Tools",
    skills: ["Version Control", "CI/CD", "Build Tools", "Testing Frameworks"]
  },
  {
    category: "Modern Practices",
    skills: ["Clean Code", "Agile Methods", "Code Review", "Documentation"]
  }
];

const SubSkills = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {specializations.map((spec, index) => (
        <motion.div
          key={index}
          variants={fadeIn("up", 0.1 * index)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          className="bg-black/50 border border-accent/30 p-4 rounded group
                     hover:border-accent hover:shadow-matrix-glow transition-all duration-300"
        >
          <h3 className="text-accent font-code mb-3 flex items-center gap-2">
            <span className="text-accent/50">{">"}</span> {spec.category}
          </h3>
          <div className="space-y-2">
            {spec.skills.map((skill, idx) => (
              <p key={idx} className="text-accent/70 font-code pl-6 flex items-center gap-2">
                <span className="text-accent/40">$</span> {skill}
              </p>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SubSkills;
