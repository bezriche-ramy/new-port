const expertiseAreas = [
  { name: "Frontend Development", level: 95 },
  { name: "React Ecosystem", level: 92 },
  { name: "Backend Development", level: 88 },
  { name: "UI/UX Design", level: 90 }
];

const ExperienceTopMiddle = () => {
  return (
    <div className="xl:w-[45%] lg:w-[40%] md:w-full sm:w-full h-full border border-accent/30 p-6 sm:p-4 rounded bg-black/30 font-code">
      <div className="terminal-header flex items-center gap-2 mb-6 pb-2 border-b border-accent/30">
        <div className="w-2 h-2 rounded-full bg-accent/50"></div>
        <div className="w-2 h-2 rounded-full bg-accent/30"></div>
        <div className="w-2 h-2 rounded-full bg-accent/20"></div>
      </div>

      <p className="text-accent mb-6 sm:text-sm md:text-base">{">"} analyze_development_metrics</p>

      <div className="space-y-6 sm:space-y-4">
        {expertiseAreas.map((area, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <p className="text-accent/80 sm:text-sm">{area.name}</p>
              <p className="text-accent/60 sm:text-sm">{area.level}%</p>
            </div>
            <div className="w-full h-2 sm:h-1.5 bg-black/50 rounded overflow-hidden border border-accent/20">
              <div 
                className="h-full bg-accent/30 relative"
                style={{ width: `${area.level}%` }}
              >
                <div className="absolute inset-0 matrix-bg"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-accent/30">
        <p className="text-accent/60 text-sm sm:text-xs">
          {"// "}Development proficiency based on completed projects and expertise
        </p>
      </div>
    </div>
  );
};

export default ExperienceTopMiddle;
