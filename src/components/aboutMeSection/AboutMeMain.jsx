import AboutMeText from "./AboutMeText";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const AboutMeMain = () => {
  return (
    <section className="pt-24 pb-0 relative overflow-hidden">
      {/* Background Gradient/Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-accent/5 rounded-full blur-[120px] -z-10 mix-blend-screen pointer-events-none"></div>

      <div id="about" className="section-container relative z-10">
        <motion.div
          variants={fadeIn("up", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="flex justify-center perspective-1000"
        >
          <AboutMeText />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMeMain;
