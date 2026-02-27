const expertiseAreas = [
  { name: "Frontend Development", level: 95 },
  { name: "React Ecosystem", level: 92 },
  { name: "Backend Development", level: 86 },
  { name: "Security Practice", level: 90 },
];

const ExperienceTopMiddle = () => {
  return (
    <div className="glass-panel p-5 md:p-6">
      <h3 className="text-text-primary font-semibold mb-5">Development Expertise</h3>

      <div className="space-y-5">
        {expertiseAreas.map((area) => (
          <div key={area.name}>
            <div className="flex justify-between items-center text-sm mb-2">
              <span className="text-text-secondary">{area.name}</span>
              <span className="text-text-primary font-semibold">{area.level}%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-accent-1 to-accent-2"
                style={{ width: `${area.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTopMiddle;
