const SingleInfo = ({ text, Image, link }) => {
  return (
    <div className="flex gap-4 items-center justify-start group">
      {Image && <Image className="text-2xl text-accent/70 group-hover:text-accent transition-colors duration-300" />}
      {link ? (
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-accent/80 group-hover:text-accent transition-colors duration-300 terminal-text hover:underline"
        >
          {"> "}{text}
        </a>
      ) : (
        <p className="text-accent/80 group-hover:text-accent transition-colors duration-300 terminal-text">
          {"> "}{text}
        </p>
      )}
    </div>
  );
};

export default SingleInfo;
