const SingleSkill = ({ text, imgSvg }) => {
  return (
    <div className="group bg-black/50 border border-accent/30 
                    sm:p-2 md:p-3 lg:p-4 rounded whitespace-nowrap
                    hover:border-accent hover:shadow-matrix-glow transition-all duration-300">
      <div className="flex items-center sm:gap-2 md:gap-3">
        <div className="text-accent/70 group-hover:text-accent transition-colors duration-300">
          {imgSvg}
        </div>
        <div className="font-code">
          <p className="text-accent/80 group-hover:text-accent transition-colors duration-300
                       sm:text-xs md:text-sm lg:text-base">
            {"> "}{text}
          </p>
          <div className="h-[2px] w-0 group-hover:w-full bg-accent/30 transition-all duration-300"></div>
        </div>
      </div>
    </div>
  );
};

export default SingleSkill;
