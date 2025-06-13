const SingleSkill = ({ text, imgSvg }) => {
  return (
    <div className="group bg-white border border-gray-200 rounded-lg
                    p-4 whitespace-nowrap shadow-card
                    hover:shadow-elevated hover:border-accent hover-lift
                    transition-all duration-300">
      <div className="flex items-center gap-3">
        <div className="text-accent group-hover:text-highlight transition-colors duration-300">
          {imgSvg}
        </div>
        <div>
          <p className="text-black font-medium text-sm group-hover:text-accent transition-colors duration-300">
            {text}
          </p>
          <div className="h-[2px] w-0 group-hover:w-full bg-accent/30 transition-all duration-300 mt-1"></div>
        </div>
      </div>
    </div>
  );
};

export default SingleSkill;
