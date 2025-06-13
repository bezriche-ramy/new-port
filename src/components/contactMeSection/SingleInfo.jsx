const SingleInfo = ({ text, Image, link }) => {
  return (
    <div className="flex gap-4 items-center justify-start group">
      {Image && <Image className="text-2xl text-accent group-hover:text-accent/80 transition-colors duration-300" />}
      {link ? (
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-black group-hover:text-accent transition-colors duration-300 hover:underline font-medium"
        >
          {text}
        </a>
      ) : (
        <p className="text-black group-hover:text-accent transition-colors duration-300">
          {text}
        </p>
      )}
    </div>
  );
};

export default SingleInfo;
