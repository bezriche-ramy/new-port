import { motion } from "framer-motion";
import { BsGithub, BsArrowRight } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const HeroText = () => {
  const nameRef = useRef(null);

  useEffect(() => {
    // GSAP Character-by-character reveal for name
    if (nameRef.current) {
      const chars = nameRef.current.innerText.split('');
      nameRef.current.innerHTML = chars
        .map((char) => `<span class="inline-block opacity-0" style="transform: translateY(40px)">${char === ' ' ? '&nbsp;' : char}</span>`)
        .join('');

      gsap.to(nameRef.current.children, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.04,
        ease: 'power4.out',
        delay: 0.3,
      });
    }
  }, []);

  // Stagger animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-6 sm:gap-8 text-center lg:text-left w-full"
    >
      <div className="flex flex-col gap-3 sm:gap-4">
        <motion.span
          variants={itemVariants}
          className="text-xs sm:text-sm md:text-base font-bold text-accent tracking-[0.3em] uppercase"
        >
          Digital Alchemist
        </motion.span>

        <h1
          ref={nameRef}
          className="font-black text-black w-full whitespace-nowrap"
          style={{
            letterSpacing: '-0.02em',
            fontWeight: 900,
            fontSize: 'clamp(2rem, 5.5vw, 5.5rem)',
          }}
        >
          Ramy Bezriche
        </h1>

        {/* Gradient Typing Animation */}
        <motion.div
          variants={itemVariants}
          className="h-[50px] sm:h-[60px] md:h-[70px] flex items-center justify-center lg:justify-start overflow-hidden"
        >
          <TypeAnimation
            sequence={[
              'Cybersecurity Student',
              2000,
              'Frontend Developer',
              2000,
              'Malware Analyst',
              2000,
              'Next.js Expert',
              2000
            ]}
            speed={50}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold gradient-text"
            repeat={Infinity}
          />
        </motion.div>
      </div>

      <motion.p
        variants={itemVariants}
        className="text-black text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0"
      >
        Crafting <span className="text-accent font-semibold">secure digital experiences</span> with cutting-edge web technologies and <span className="text-electric font-semibold">offensive security</span> expertise.
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start mt-2 sm:mt-4 w-full sm:w-auto px-4 lg:px-0"
      >
        <motion.a
          href="https://github.com/bezriche-ramy"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary flex items-center justify-center gap-3 group hover-magnetic w-full sm:w-auto"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <BsGithub className="text-xl sm:text-2xl group-hover:rotate-12 transition-transform duration-300" />
          <span className="font-black text-sm sm:text-base">Explore GitHub</span>
        </motion.a>
        <motion.a
          href="#projects"
          className="btn-secondary flex items-center justify-center gap-3 group hover-magnetic w-full sm:w-auto"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <span className="font-black text-sm sm:text-base">View Projects</span>
          <BsArrowRight className="text-xl sm:text-2xl group-hover:translate-x-2 transition-transform duration-300" />
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default HeroText;
