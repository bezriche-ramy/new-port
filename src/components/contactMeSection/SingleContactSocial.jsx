const SingleContactSocial = ({ Icon, link, tooltip }) => {
  return (
    <div className="relative group">
      <div className="text-2xl h-12 w-12 border border-accent text-accent rounded-sm 
                    bg-black/50 p-3 flex items-center justify-center
                    hover:shadow-matrix-glow hover:bg-accent/10
                    transition-all duration-300">
        <a href={link} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
          <Icon />
        </a>
      </div>
      
      {/* Terminal-style tooltip */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100
                    transition-opacity duration-300 whitespace-nowrap">
        <div className="bg-black/90 text-accent text-sm font-code px-3 py-1 rounded border border-accent/30">
          {"> "}{tooltip}
        </div>
      </div>
    </div>
  );
};

export default SingleContactSocial;
