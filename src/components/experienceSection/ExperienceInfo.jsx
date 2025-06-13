const ExperienceInfo = ({ number, text }) => {
  return (
    <div className="text-center group">
      <h4 className="text-3xl font-bold text-accent mb-2 
                    group-hover:text-highlight transition-all duration-300">
        {number}
      </h4>
      <p className="text-muted text-sm font-medium">
        {text}
      </p>
    </div>
  );
};

export default ExperienceInfo;
