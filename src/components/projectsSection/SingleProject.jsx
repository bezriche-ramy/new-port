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
      className={`flex w-full items-center gap-8 
                  md:flex-row sm:flex-col 
                  ${align === "left" ? "md:flex-row" : "md:flex-row-reverse"} 
                  group`}
    >
      <div className="flex-1">
        <div className="card-elevated p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-2 
                       text-center md:text-left flex items-center 
                       sm:justify-center md:justify-start gap-2">
            {name}
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
          
          <p className="text-muted font-medium text-sm mb-4 text-center md:text-left">
            {year}
          </p>
          
          <p className="text-black mb-6 text-center md:text-left leading-relaxed">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
            {technologies?.map((tech, index) => (
              <span key={index} 
                    className="px-3 py-1 text-sm bg-gray-100 text-accent 
                             rounded-full border border-gray-200 font-medium 
                             hover:bg-accent hover:text-white transition-all duration-300">
                {tech}
              </span>
            ))}
          </div>
          
          {!isComingSoon && (
            <div className="flex sm:flex-col md:flex-row gap-4 justify-center md:justify-start">
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-2 group
                         sm:w-full md:w-auto"
              >
                View Demo <BsFillArrowUpRightCircleFill className="group-hover:rotate-45 transition-transform duration-300" />
              </a>
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center justify-center gap-2 group
                         sm:w-full md:w-auto"
              >
                View Code <BsGithub className="group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          )}
        </div>
      </div>

      <div className="flex-1 w-full sm:mt-4 md:mt-0">
        <div className="relative overflow-hidden rounded-lg border border-gray-200 
                       shadow-card hover:shadow-elevated hover-lift
                       transition-all duration-300 bg-white">
          {isVideo ? (
            <video 
              src={video} 
              autoPlay 
              loop 
              muted 
              playsInline
              loading="lazy"
              className="w-full aspect-video object-cover"
            />
          ) : (
            <img 
              src={image} 
              alt={isComingSoon ? "coming soon" : "project screenshot"} 
              loading="lazy"
              className="w-full aspect-video object-cover"
            />
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default SingleProject;
