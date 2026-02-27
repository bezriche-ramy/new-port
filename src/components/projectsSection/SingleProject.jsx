/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { BsFillArrowUpRightCircleFill, BsGithub } from "react-icons/bs";
import { gsap } from "../../lib/gsap";

const SingleProject = ({
  name,
  year,
  align,
  image,
  demoLink,
  githubLink,
  description,
  technologies,
}) => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const cardNode = cardRef.current;
    const imageNode = imageRef.current;

    if (!cardNode || !imageNode) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardNode,
        { opacity: 0, y: 52 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardNode,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        imageNode,
        { clipPath: "inset(0 100% 0 0)", scale: 1.12 },
        {
          clipPath: "inset(0 0% 0 0)",
          scale: 1,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardNode,
            start: "top 78%",
          },
        }
      );
    }, cardNode);

    return () => ctx.revert();
  }, []);

  return (
    <article
      ref={cardRef}
      className={`glass-panel p-5 md:p-7 lg:p-8 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch ${
        align === "left" ? "" : "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"
      }`}
    >
      <div className="flex flex-col justify-between gap-5">
        <div>
          <p className="text-text-secondary text-sm uppercase tracking-[0.18em]">{year}</p>
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-text-primary mt-2">{name}</h3>
          <p className="text-text-secondary mt-4 leading-relaxed">{description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {technologies?.map((tech) => (
            <span key={`${name}-${tech}`} className="skill-badge">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <a href={demoLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Voir Demo
            <BsFillArrowUpRightCircleFill className="text-base" />
          </a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            Voir Code
            <BsGithub className="text-base" />
          </a>
        </div>
      </div>

      <div className="rounded-[20px] border border-white/10 overflow-hidden bg-black/20">
        <img ref={imageRef} src={image} alt={`${name} preview`} loading="lazy" className="w-full h-full min-h-[260px] object-cover" />
      </div>
    </article>
  );
};

export default SingleProject;

