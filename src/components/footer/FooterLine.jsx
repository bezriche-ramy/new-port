const FooterLine = () => {
  return (
    <div className="relative w-full h-[1px] overflow-hidden">
      <div className="absolute inset-0 matrix-bg"></div>
      <div className="w-full h-full bg-accent/30"></div>
      
      {/* Animated highlight effect */}
      <div 
        className="absolute top-0 left-0 w-[20%] h-full bg-accent/50"
        style={{
          animation: 'scan-line 4s linear infinite',
        }}
      ></div>

      <style jsx>{`
        @keyframes scan-line {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(600%); }
        }
      `}</style>
    </div>
  );
};

export default FooterLine;
