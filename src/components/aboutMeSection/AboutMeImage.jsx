const AboutMeImage = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Matrix scan effect container */}
      {/* Only keep one binary-rain for performance */}
      <div className="absolute inset-0 overflow-hidden rounded-lg">
        <div className="binary-rain"></div>
      </div>

      {/* Main image with security overlay */}
      <div className="relative z-10 w-full max-w-[500px] aspect-square">
        <img
          src="https://i.ibb.co/21qXwX3F/IMG-20250502-103125.jpg"
          alt="bezriche ramy"
          className="w-full h-full object-cover rounded-lg border-2 border-accent 
                   shadow-matrix-glow hover:shadow-matrix-strong 
                   transition-all duration-500"
        />
        
        {/* Scanning line effect */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/10 to-transparent"
          style={{
            animation: 'scan-line 2s linear infinite',
            backgroundSize: '100% 10px'
          }}
        ></div>

        {/* Security grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,255,65,0.1)1px,transparent_1px),linear-gradient(90deg,rgba(0,255,65,0.1)1px,transparent_1px)]"
             style={{ backgroundSize: '20px 20px' }}>
        </div>
      </div>
    </div>
  );
};

export default AboutMeImage;
