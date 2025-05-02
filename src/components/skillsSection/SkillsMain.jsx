import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import SkillsText from "./SkillsText";
import AllSkills from "./AllSkills";
import SubSkills from "./SubSkills";

const SkillsMain = () => {
  return (
    <div className="relative py-20 sm:py-12">
      {/* Matrix background effects */}
      <div className="absolute inset-0 matrix-bg opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
      
      <section id="skills" className="relative max-w-[1200px] mx-auto px-4 pt-16">
        <motion.div
          variants={fadeIn("down", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          <SkillsText />
        </motion.div>

        <div className="terminal-window mt-16 sm:mt-8 bg-black/80 border border-accent/30 rounded-lg p-6 sm:p-4">
          <div className="terminal-header flex items-center gap-2 mb-6 pb-2 border-b border-accent/30">
            <div className="w-3 h-3 rounded-full bg-accent/50"></div>
            <div className="w-3 h-3 rounded-full bg-accent/30"></div>
            <div className="w-3 h-3 rounded-full bg-accent/20"></div>
            <span className="ml-2 text-accent/50 font-code text-sm">skills_overview.sh</span>
          </div>

          <div className="space-y-12 sm:space-y-8">
            <div className="font-code text-accent/80">
              {"> "}./scan_capabilities.sh
            </div>
            
            <AllSkills />
            
            <div className="font-code text-accent/80 mt-8">
              {"> "}./display_specializations.sh
            </div>
            
            <SubSkills />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillsMain;
