import { motion } from "framer-motion";
import { SiReact, SiNextdotjs, SiJavascript, SiTypescript, SiSupabase } from "react-icons/si";
import { PiShieldCheckBold } from "react-icons/pi";

const TechStackIcons = () => {
    // Animation variants for floating icons
    const floatVariant = (delay = 0, duration = 3) => ({
        initial: { y: 0, opacity: 0 },
        animate: {
            y: [-10, 10, -10],
            opacity: 0.7,
            transition: {
                y: {
                    duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay,
                },
                opacity: {
                    duration: 0.5,
                },
            },
        },
    });

    const hoverVariant = {
        scale: 1.2,
        opacity: 1,
        transition: { duration: 0.2 },
    };

    return (
        <div className="hidden lg:block">
            {/* React - Top Left */}
            <motion.div
                variants={floatVariant(0, 3.5)}
                initial="initial"
                animate="animate"
                whileHover={hoverVariant}
                className="absolute top-[15%] left-[5%] text-5xl sm:text-6xl text-[#61dafb] opacity-70"
                style={{ zIndex: 1 }}
            >
                <SiReact />
            </motion.div>

            {/* Next.js - Top Right */}
            <motion.div
                variants={floatVariant(0.5, 4)}
                initial="initial"
                animate="animate"
                whileHover={hoverVariant}
                className="absolute top-[20%] right-[8%] text-4xl sm:text-5xl text-gray-900 opacity-70"
                style={{ zIndex: 1 }}
            >
                <SiNextdotjs />
            </motion.div>

            {/* JavaScript - Left Middle */}
            <motion.div
                variants={floatVariant(1, 3.2)}
                initial="initial"
                animate="animate"
                whileHover={hoverVariant}
                className="absolute top-[45%] left-[3%] text-4xl sm:text-5xl text-[#f7df1e] opacity-70"
                style={{ zIndex: 1 }}
            >
                <SiJavascript />
            </motion.div>

            {/* TypeScript - Right Middle */}
            <motion.div
                variants={floatVariant(1.5, 3.8)}
                initial="initial"
                animate="animate"
                whileHover={hoverVariant}
                className="absolute top-[50%] right-[5%] text-4xl sm:text-5xl text-[#3178c6] opacity-70"
                style={{ zIndex: 1 }}
            >
                <SiTypescript />
            </motion.div>

            {/* Security Shield - Bottom Left */}
            <motion.div
                variants={floatVariant(2, 3.5)}
                initial="initial"
                animate="animate"
                whileHover={hoverVariant}
                className="absolute bottom-[18%] left-[8%] text-5xl sm:text-6xl text-[#ffd700] opacity-70"
                style={{ zIndex: 1 }}
            >
                <PiShieldCheckBold />
            </motion.div>



            {/* Supabase - Bottom Center */}
            <motion.div
                variants={floatVariant(1.8, 3.6)}
                initial="initial"
                animate="animate"
                whileHover={hoverVariant}
                className="absolute bottom-[12%] left-[50%] -translate-x-1/2 text-4xl sm:text-5xl text-[#3ecf8e] opacity-70"
                style={{ zIndex: 1 }}
            >
                <SiSupabase />
            </motion.div>
        </div>
    );
};

export default TechStackIcons;
