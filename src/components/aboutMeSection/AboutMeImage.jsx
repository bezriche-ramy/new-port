import { BsCodeSlash } from "react-icons/bs";

const AboutMeImage = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Professional image container */}
      <div className="relative z-10 w-full max-w-[500px] aspect-square">
        <div className="w-full h-full rounded-lg border-2 border-gray-200 
                    bg-gradient-to-br from-gray-50 to-white
                    shadow-elevated hover-lift flex items-center justify-center
                    transition-all duration-300 group overflow-hidden relative">

          <BsCodeSlash className="text-9xl text-accent/20 group-hover:text-accent/30 transition-colors duration-500 transform group-hover:scale-110" />

          {/* Decorative elements */}
          <div className="absolute top-10 right-10 w-20 h-20 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors duration-500"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-blue-400/5 rounded-full blur-3xl group-hover:bg-blue-400/10 transition-colors duration-500"></div>
        </div>

        {/* Professional overlay with subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent rounded-lg pointer-events-none"></div>
      </div>
    </div>
  );
};

export default AboutMeImage;
