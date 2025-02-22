import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { fadeIn } from "../../framerMotion/variants";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl uppercase text-accent"
      >
        <TypeAnimation
          sequence={[
            'Front-end Developer',
            2000,
            'Back-end Developer',
            2000,
            'Full Stack Developer',
            4000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </motion.div>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-violet font-bold uppercase"
      >
        Bezriche <br className="sm:hidden md:block" />
        Ramy
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4 text-pink"
      >
        A Passionate Web Developer and Instructor <br /> with 2 years of
        experience.
      </motion.p>
    </div>
  );
};

export default HeroText;
