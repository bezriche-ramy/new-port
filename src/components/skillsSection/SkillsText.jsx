const SkillsText = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 
        className="text-accent mb-10 font-code terminal-text glitch text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl break-words px-3 md:px-0"
        data-text="> CYBERSECURITY_EXPERTISE"
      >
        {"> "}CYBERSECURITY_EXPERTISE
      </h2>
      <div className="text-lg text-center max-w-3xl relative">
        <div className="absolute inset-0 matrix-bg opacity-10"></div>
        <p className="text-accent/80 font-code bg-black/30 p-6 border border-accent/30 rounded">
          {"> "}Specialized in application security and threat modeling.
          <br />
          {"> "}Proficient in secure coding practices and vulnerability assessments.
          <br />
          {"> "}Experienced with penetration testing and security hardening techniques.
        </p>
      </div>
    </div>
  );
};

export default SkillsText;
