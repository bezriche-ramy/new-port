const SubHeroMain = () => {
  return (
    <div className="w-full border-y border-accent/30 bg-black/50 backdrop-blur-sm text-accent relative
                    sm:py-4 md:py-6 lg:py-8 sm:px-3 md:px-4">
      <div className="absolute inset-0 matrix-bg opacity-10"></div>
      <div className="max-w-[1200px] mx-auto flex md:flex-row sm:flex-col sm:gap-3 md:gap-6 
                     md:justify-around sm:justify-center items-center">
        {["Full Stack Developer", "React Specialist", "UI/UX Designer"].map((text, index) => (
          <div key={index} 
               className="relative z-10 group sm:w-full md:w-auto">
            <div className="hover:text-highlight transition-colors duration-300 
                          sm:text-sm md:text-base lg:text-xl xl:text-2xl
                          sm:py-3 md:py-2 sm:px-4 md:px-3
                          sm:border sm:border-accent/10 sm:rounded md:border-0
                          sm:text-center md:text-left
                          sm:bg-black/30 md:bg-transparent
                          font-code">
              <p className="terminal-text whitespace-nowrap">{"> "}{text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubHeroMain;
