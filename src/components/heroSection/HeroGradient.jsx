const HeroGradient = () => {
  return (
    <div className="absolute bottom-0 w-full">
      {/* Matrix-style gradient base */}
      <div className="h-[400px] w-full bg-gradient-to-t from-background via-background/95 to-transparent"></div>
      
      {/* Cyber grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,255,65,0.03)1px,transparent_1px),linear-gradient(90deg,rgba(0,255,65,0.03)1px,transparent_1px)]" 
           style={{ backgroundSize: '30px 30px' }}>
      </div>
      
      {/* Scanning line effects */}
      <div className="absolute inset-0">
        <div className="h-full w-[120%] -ml-[10%] animate-matrix-scan bg-[linear-gradient(90deg,transparent_0%,rgba(0,255,65,0.1)_50%,transparent_100%)]"></div>
      </div>
      
      {/* Binary code rain container removed for performance */}
    </div>
  );
};

export default HeroGradient;
