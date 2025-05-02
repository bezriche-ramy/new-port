const ProjectsText = () => {
  return (
    <div className="flex flex-col items-center mt-[100px]">
      <h2 
        className="text-accent mb-10 font-code terminal-text glitch text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl break-words px-3 md:px-0"
        data-text="> DEVELOPMENT_PROJECTS"
      >
        &gt; DEVELOPMENT_PROJECTS
      </h2>
      <div className="text-lg text-center font-code max-w-3xl relative">
        <div className="absolute inset-0 matrix-bg opacity-10"></div>
        <p className="text-accent/80 bg-black/30 p-6 border border-accent/30 rounded">
          <span className="text-accent">{">"}</span> Showcasing a collection of modern web applications and solutions. 
          Each project demonstrates expertise in React ecosystem, clean code practices, 
          and responsive design principles with focus on user experience.
        </p>
      </div>
    </div>
  );
};

export default ProjectsText;
