import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const specializations = [
  {
    category: "Frontend Development",
    skills: ["React.js & Ecosystem", "Modern JavaScript/TypeScript", "Responsive Design", "State Management"]
  },
  {
    category: "Backend Development", 
    skills: ["Node.js & Express", "REST API Design", "Database Management", "Server Architecture"]
  },
  {
    category: "UI/UX Design",
    skills: ["User Experience Design", "Interface Design", "Prototyping", "Design Systems"]
  },
  {
    category: "Development Tools",
    skills: ["Git & Version Control", "Build Tools & Bundlers", "Testing Frameworks", "DevOps Basics"]
  }
];

const SubSkills = () => {
  return (
    <div>
      <h3 className="text-xl font-semibold text-black mb-6 text-center">
        Areas of Specialization
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {specializations.map((spec, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", 0.1 * index)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.1 }}
            className="card p-6 hover-lift"
          >
            <h4 className="text-lg font-semibold text-accent mb-4">
              {spec.category}
            </h4>
            <div className="space-y-3">
              {spec.skills.map((skill, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent/60"></div>
                  <p className="text-muted font-medium">{skill}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SubSkills;
