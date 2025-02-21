import AboutMeImage from "./AboutMeImage";
import AboutMeText from "./AboutMeText";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const AboutMeMain = () => {
  return (
    <div
      id="about"
      className="flex md:flex-row sm:flex-col gap-12 px-4 max-w-[1200px] mx-auto mt-[100px] justify-between items-center"
    >
      <motion.div
        variants={fadeIn("right", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ 
          once: true, 
          amount: 0.1,  // Reduced from 0.3 to trigger earlier
          margin: "0px 0px -150px 0px" // Negative margin to trigger before element is fully in view
        }}
      >
        <AboutMeText />
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ 
          once: true, 
          amount: 0.1,  // Reduced from 0.3 to trigger earlier
          margin: "0px 0px -150px 0px" // Negative margin to trigger before element is fully in view
        }}
      >
        <AboutMeImage />
      </motion.div>
    </div>
  );
};

export default AboutMeMain;
