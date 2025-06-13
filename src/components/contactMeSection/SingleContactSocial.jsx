const SingleContactSocial = ({ Icon, link, tooltip }) => {
  return (
    <div className="relative group">
      <div className="text-2xl h-12 w-12 border border-gray-300 text-muted rounded-lg 
                    bg-white p-3 flex items-center justify-center
                    hover:shadow-md hover:bg-accent hover:text-white hover:border-accent
                    transition-all duration-300">
        <a href={link} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
          <Icon />
        </a>
      </div>
      
      {/* Professional tooltip */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100
                    transition-opacity duration-300 whitespace-nowrap">
        <div className="bg-black text-white text-sm px-3 py-1 rounded shadow-lg">
          {tooltip}
        </div>
      </div>
    </div>
  );
};

export default SingleContactSocial;
