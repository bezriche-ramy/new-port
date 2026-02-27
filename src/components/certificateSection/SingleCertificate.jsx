/* eslint-disable react/prop-types */
const SingleCertificate = ({ image, title, onOpen }) => {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="glass-panel overflow-hidden text-left group transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-[18px]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-transparent" />
      </div>

      <div className="px-4 pb-4 pt-3">
        <p className="text-sm text-text-primary">{title}</p>
      </div>
    </button>
  );
};

export default SingleCertificate;

