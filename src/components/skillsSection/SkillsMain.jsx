import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import SkillsText from "./SkillsText";
import AllSkills from "./AllSkills";

const SkillsMain = () => {
  return (
    <div className="pt-0 pb-20">
      <section id="skills" className="section-container">
        <motion.div
          variants={fadeIn("down", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          <SkillsText />
        </motion.div>

        <div className="mt-0">
          <AllSkills />
        </div>
      </section>
    </div>
  );
};

export default SkillsMain;
