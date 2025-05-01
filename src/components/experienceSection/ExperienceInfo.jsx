const ExperienceInfo = ({ number, text }) => {
  return (
    <div className="text-center group">
      <h1 className="text-4xl text-accent font-bold mb-2 font-code terminal-text 
                    group-hover:shadow-matrix-glow transition-all duration-300">
        {number}
      </h1>
      <p className="text-accent/70 text-sm uppercase tracking-wider font-code">
        {"> "}{text}
      </p>
    </div>
  );
};

export default ExperienceInfo;
