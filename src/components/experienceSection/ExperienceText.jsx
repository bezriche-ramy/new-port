const ExperienceText = () => {
  return (
    <div className="flex flex-col items-center mt-[100px]">
      <h2 
        className="text-accent mb-10 font-code glitch terminal-text text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl break-words px-3 md:px-0"
        data-text="> DEVELOPMENT_JOURNEY"
      >
        {"> "}DEVELOPMENT_JOURNEY
      </h2>
      <div className="text-lg text-center max-w-3xl relative">
        <div className="absolute inset-0 matrix-bg opacity-10"></div>
        <p className="text-accent/80 font-code bg-black/30 p-6 border border-accent/30 rounded">
          {"> "}Documenting my progression in web development and design.
          <br />
          {"> "}Building modern applications with cutting-edge technologies.
          <br />
          {"> "}Creating impactful digital experiences through code.
        </p>
      </div>
    </div>
  );
};

export default ExperienceText;
