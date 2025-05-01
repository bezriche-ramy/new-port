const SingleInfo = ({ text, Image }) => {
  return (
    <div className="flex gap-4 items-center justify-start group">
      <Image className="text-2xl text-accent/70 group-hover:text-accent transition-colors duration-300" />
      <p className="text-accent/80 group-hover:text-accent transition-colors duration-300 terminal-text">
        {"> "}{text}
      </p>
    </div>
  );
};

export default SingleInfo;
