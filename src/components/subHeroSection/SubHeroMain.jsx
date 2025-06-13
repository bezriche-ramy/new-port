const SubHeroMain = () => {
  return (
    <div className="w-full border-y border-gray-200 bg-secondary py-8 px-4">
      <div className="max-w-[1200px] mx-auto">
        {/* Mobile: Stack vertically, Desktop: 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {["Full Stack Developer", "React Specialist", "UI/UX Designer"].map((text, index) => (
            <div key={index} 
                 className="group w-full">
              <div className="text-lg md:text-xl font-semibold
                          py-4 px-4 text-center
                          bg-white rounded-lg shadow-card
                          text-black hover:text-accent hover:shadow-elevated
                          transform hover:-translate-y-1 transition-all duration-300">
                {text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubHeroMain;
