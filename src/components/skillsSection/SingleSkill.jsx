const SingleSkill = ({ imgSvg, text }) => {
  return (
    <div className="group py-4">
      <div className="flex flex-col items-center gap-3">
        <div className="relative bg-secondary/90 text-accent
                      h-[80px] w-[80px] flex items-center justify-center 
                      rounded-full backdrop-blur-md
                      border-2 border-accent/30
                      transition-all duration-300 ease-out
                      group-hover:scale-110 group-hover:shadow-accentShadow
                      group-hover:border-accent group-hover:text-pink
                      text-3xl z-10">
          {imgSvg}
        </div>
        <p className="text-white/80 text-sm font-medium tracking-wide
                    group-hover:text-accent transition-colors duration-300
                    whitespace-nowrap z-10">
          {text}
        </p>
      </div>
    </div>
  );
};

export default SingleSkill;
