import AboutMeImage from "./AboutMeImage";
import AboutMeText from "./AboutMeText";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const AboutMeMain = () => {
  return (
    <section className="py-20">
      <div id="about" className="section-container">
        <div className="flex md:flex-row sm:flex-col gap-12 justify-between items-center">
          <motion.div
            variants={fadeIn("right", 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ 
              once: true, 
              amount: 0.1,
              margin: "0px 0px -150px 0px"
            }}
            className="flex-1"
          >
            <AboutMeText />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ 
              once: true, 
              amount: 0.1,
              margin: "0px 0px -150px 0px"
            }}
            className="flex-1"
          >
            <AboutMeImage />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeMain;
