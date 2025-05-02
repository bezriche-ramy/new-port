import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const specializations = [
  {
    category: "Cybersecurity",
    skills: ["Penetration Testing", "Network Security", "Malware Analysis", "Security Auditing"]
  },
  {
    category: "Web Security",
    skills: ["Secure Development", "OWASP Top 10", "Web App Hardening", "Auth Systems"]
  },
  {
    category: "Web Development",
    skills: ["React Ecosystem", "Node.js", "Modern Frameworks", "API Design"]
  },
  {
    category: "Security Tools",
    skills: ["Wireshark", "Metasploit", "Burp Suite", "Nmap"]
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
