import AllExperiences from "./AllExperiences";
import ExperienceText from "./ExperienceText";
import ExperienceTop from "./ExperienceTop";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const ExperienceMain = () => {
  return (
    <section className="section-alternate py-20">
      <div id="experience" className="section-container">
        <motion.div
          variants={fadeIn("down", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
        >
          <ExperienceText />
        </motion.div>
        <motion.div
          variants={fadeIn("down", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
          className="mt-16"
        >
          <ExperienceTop />
        </motion.div>
        <div className="mt-16">
          <AllExperiences />
        </div>
      </div>
    </section>
  );
};

export default ExperienceMain;
