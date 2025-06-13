const expertiseAreas = [
  { name: "Frontend Development", level: 95 },
  { name: "React Ecosystem", level: 92 },
  { name: "Backend Development", level: 88 },
  { name: "UI/UX Design", level: 90 }
];

const ExperienceTopMiddle = () => {
  return (
    <div className="xl:w-[45%] lg:w-[40%] md:w-full sm:w-full h-full card-elevated p-8">
      <h3 className="text-xl font-semibold text-black mb-6">Development Expertise</h3>

      <div className="space-y-6">
        {expertiseAreas.map((area, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <p className="text-black font-medium">{area.name}</p>
              <p className="text-accent font-semibold">{area.level}%</p>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-accent to-highlight rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${area.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <p className="text-muted text-sm text-center">
          Proficiency based on completed projects and professional experience
        </p>
      </div>
    </div>
  );
};

export default ExperienceTopMiddle;
