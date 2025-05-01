const ExperienceTopRight = () => {
  return (
    <div className="xl:w-[25%] lg:w-[30%] border border-accent/30 p-6 rounded bg-black/30 font-code relative">
      <div className="absolute inset-0 matrix-bg opacity-10"></div>
      <div className="terminal-header flex items-center gap-2 mb-4 pb-2 border-b border-accent/30">
        <div className="w-2 h-2 rounded-full bg-accent/50"></div>
        <div className="w-2 h-2 rounded-full bg-accent/30"></div>
        <div className="w-2 h-2 rounded-full bg-accent/20"></div>
      </div>
      
      <div className="relative z-10">
        <p className="text-accent/80 mb-4">
          {"> "}cat expertise.txt
        </p>
        <div className="border-l-2 border-accent/30 pl-4">
          <p className="text-accent/70 mb-4">
            Primary focus on modern JavaScript frameworks and libraries, specializing in React ecosystem and modern web development. 
          </p>
          <p className="text-accent/70 mb-4">
            Experience in building responsive, performant web applications with clean architecture and best practices.
          </p>
          <p className="text-accent/70">
            Skilled in both frontend and backend development, with emphasis on user experience and code quality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceTopRight;
