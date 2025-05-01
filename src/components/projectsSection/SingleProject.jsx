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
  description,
  technologies,
  isComingSoon 
}) => {
  return (
    <motion.div
      variants={fadeIn("top", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className={`flex w-full items-center sm:gap-4 md:gap-6 lg:gap-8 
                  md:flex-row sm:flex-col 
                  ${align === "left" ? "md:flex-row" : "md:flex-row-reverse"} 
                  group`}
    >
      <div className={`flex-1 ${align === "left" ? "md:pr-6 lg:pr-8" : "md:pl-6 lg:pl-8"} sm:px-2`}>
        <div className="terminal-window bg-black/90 border border-accent/50 sm:p-3 md:p-4 rounded">
          <div className="terminal-header flex items-center gap-2 mb-3 md:mb-4 border-b border-accent/30 pb-2">
            <div className="w-2 h-2 rounded-full bg-accent/50"></div>
            <div className="w-2 h-2 rounded-full bg-accent/30"></div>
            <div className="w-2 h-2 rounded-full bg-accent/20"></div>
          </div>
          
          <h2 className="sm:text-xl md:text-2xl lg:text-3xl text-accent flex items-center gap-2 mb-2 
                       font-code text-center md:text-left terminal-text">
            {"> "}{name}
            {isComingSoon && (
              <span className="inline-block">
                <motion.span
                  className="inline-block w-2 h-2 bg-accent rounded-full"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </span>
            )}
          </h2>
          
          <h3 className="sm:text-sm md:text-base lg:text-lg font-mono text-accent/70 mb-3 
                       text-center md:text-left">
            {"$ "}timestamp: {year}
          </h3>
          
          <p className="text-accent/80 mb-4 font-code text-center md:text-left 
                       sm:text-xs md:text-sm lg:text-base">
            {"> "}{description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
            {technologies?.map((tech, index) => (
              <span key={index} 
                    className="px-2 md:px-3 py-1 text-xs md:text-sm bg-black/50 text-accent 
                             rounded-sm border border-accent/20 font-code 
                             hover:shadow-matrix-glow transition-all duration-300">
                {tech}
              </span>
            ))}
          </div>
          
          {!isComingSoon && (
            <div className="flex sm:flex-col md:flex-row gap-3 justify-center md:justify-start">
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm md:text-base flex gap-2 items-center justify-center md:justify-start
                         text-accent hover:text-highlight transition-all duration-300 
                         group font-code sm:w-full md:w-auto sm:py-2 md:py-0
                         sm:border sm:border-accent/10 sm:rounded md:border-0"
              >
                {"> "}execute_demo <BsFillArrowUpRightCircleFill className="group-hover:rotate-45 transition-transform duration-300" />
              </a>
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm md:text-base flex gap-2 items-center justify-center md:justify-start
                         text-accent hover:text-highlight transition-all duration-300 
                         group font-code sm:w-full md:w-auto sm:py-2 md:py-0
                         sm:border sm:border-accent/10 sm:rounded md:border-0"
              >
                {"> "}view_source <BsGithub className="group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          )}
        </div>
      </div>

      <div className="flex-1 w-full sm:mt-4 md:mt-0">
        <div className="relative overflow-hidden rounded border border-accent/50 
                       shadow-matrix-glow hover:shadow-matrix-strong 
                       transition-all duration-300 bg-black/90">
          {isVideo ? (
            <>
              <video 
                src={video} 
                autoPlay 
                loop 
                muted 
                playsInline
                poster={image}
                className="w-full aspect-video object-cover transform 
                         group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  e.target.style.display = 'none';
                  const img = e.target.parentElement.querySelector('img');
                  if (img) img.style.display = 'block';
                }}
              />
              <img 
                src={image || "/fallback-image.jpg"} 
                alt={name}
                className="hidden w-full aspect-video object-cover transform 
                         group-hover:scale-105 transition-transform duration-700"
              />
            </>
          ) : (
            <img 
              src={image} 
              alt={isComingSoon ? "coming soon" : "project screenshot"} 
              loading="lazy"
              className="w-full aspect-video object-cover transform 
                       group-hover:scale-105 transition-transform duration-700"
            />
          )}
          <div className="absolute inset-0 matrix-bg opacity-10"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default SingleProject;
