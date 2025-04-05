import { BsFillArrowUpRightCircleFill, BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleProject = ({ 
  name, 
  year, 
  align, 
  image, 
  video, 
  isVideo, 
  demoLink, 
  githubLink, 
  isComingSoon 
}) => {
  return (
    <motion.div
      variants={fadeIn("top", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className={`flex w-full sm:flex-col-reverse items-center gap-8 ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } justify-end sm:flex-col`}
    >
      <div>
        <h2 className="md:text-3xl sm:text-2xl text-orange flex items-center gap-2">
          {name}
          {isComingSoon && (
            <span className="inline-block">
              <motion.span
                className="inline-block w-2 h-2 bg-cyan rounded-full"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </span>
          )}
        </h2>
        <h2
          className={`text-xl font-thin text-white font-special sm:text-center ${
            align === "left" ? "md:text-right" : "md:text-left"
          }`}
        >
          {year}
        </h2>
        {!isComingSoon ? (
          <div className={`flex gap-4 ${
            align === "left" ? "md:justify-end" : "md:justify-start"
          } sm:justify-center`}>
            <a
              href={demoLink}
              className="text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer"
            >
              Demo <BsFillArrowUpRightCircleFill />
            </a>
            <a
              href={githubLink}
              className="text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer"
            >
              GitHub <BsGithub />
            </a>
          </div>
        ) : (
          <p className="text-cyan italic">In Development</p>
        )}
      </div>
      <div className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden border border-white">
        {isVideo ? (
          <video 
            src={video} 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <img 
            src={image} 
            alt={isComingSoon ? "coming soon" : "project screenshot"} 
            className="w-full h-full object-cover"
          />
        )}
      </div>
    </motion.div>
  );
};

export default SingleProject;
