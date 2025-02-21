import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import LoadingDots from "../LoadingDots";

const WaitingSection = () => {
  return (
    <motion.div
      variants={fadeIn("top", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className="flex flex-col items-center justify-center max-w-[1200px] mx-auto px-4 gap-8"
    >
      <div className="flex flex-col items-center gap-4">
        <span className="text-4xl text-cyan font-special">UK Experience</span>
        <LoadingDots />
      </div>
    </motion.div>
  );
};

export default WaitingSection;
