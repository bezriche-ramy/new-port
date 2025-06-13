const AboutMeImage = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Professional image container */}
      <div className="relative z-10 w-full max-w-[500px] aspect-square">
        <img
          src="https://iili.io/FqAZ8jp.md.jpg"
          alt="Ramy Bezriche - Full Stack Developer"
          className="w-full h-full object-cover rounded-lg border-2 border-gray-200 
                   shadow-elevated hover-lift
                   transition-all duration-300"
        />
        
        {/* Professional overlay with subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-lg"></div>
      </div>
    </div>
  );
};

export default AboutMeImage;
