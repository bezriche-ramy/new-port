const SkillsText = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-4xl lg:text-6xl md:text-5xl sm:text-3xl text-accent font-code mb-6 terminal-text text-center">
        {"> "}DEVELOPMENT_EXPERTISE
      </h2>
      <div className="text-lg text-center max-w-3xl relative">
        <div className="absolute inset-0 matrix-bg opacity-10"></div>
        <p className="text-accent/80 font-code bg-black/30 p-6 border border-accent/30 rounded">
          {"> "}Specialized in modern web development frameworks and libraries.
          <br />
          {"> "}Proficient in full-stack development with focus on React ecosystem.
          <br />
          {"> "}Experienced with modern development tools and best practices.
        </p>
      </div>
    </div>
  );
};

export default SkillsText;
