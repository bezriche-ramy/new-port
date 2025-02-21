const ProjectImage = ({ image, title }) => {
  return (
    <div className="w-full h-[200px] overflow-hidden rounded-lg">
      <img
        src={`public/images/${image}`}
        alt={title}
        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
      />
    </div>
  );
};

export default ProjectImage;
