import { motion } from "framer-motion";
import { BsGithub, BsArrowRight } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";

const HeroText = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col gap-6 text-center lg:text-left max-w-[600px]"
    >
      <div className="flex flex-col gap-2">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg sm:text-xl font-medium text-accent tracking-wide uppercase"
        >
          Bonjour, je suis
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight"
        >
          Ramy Bezriche
        </motion.h1>

        {/* Stable Typing Animation Container */}
        <div className="h-[50px] sm:h-[60px] flex items-center justify-center lg:justify-start overflow-hidden">
          <TypeAnimation
            sequence={[
              'Étudiant en Cybersécurité',
              2000,
              'Développeur Front-End',
              2000,
              'Analyse de Malwares',
              2000,
              'Expert Next.js',
              2000
            ]}
            speed={50}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent to-purple-500"
            repeat={Infinity}
          />
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-gray-600 text-lg sm:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0"
      >
        Passionné par le <strong>développement web sécurisé</strong> et l'<strong>analyse de malwares</strong>.
        Je crée des expériences numériques modernes, rapides et résilientes.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4 w-full sm:w-auto px-4 lg:px-0"
      >
        <a
          href="https://github.com/bezriche-ramy"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary flex items-center justify-center gap-2 group shadow-lg shadow-accent/20 w-full sm:w-auto"
        >
          <BsGithub className="text-xl group-hover:scale-110 transition-transform" />
          <span>GitHub</span>
        </a>
        <a
          href="#projects"
          className="btn-secondary flex items-center justify-center gap-2 group w-full sm:w-auto"
        >
          <span>Mes Projets</span>
          <BsArrowRight className="text-xl group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>
    </motion.div>
  );
};

export default HeroText;
