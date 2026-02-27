/* eslint-disable react/prop-types */
const SingleInfo = ({ text, Icon, link }) => {
  const content = (
    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-3">
      {Icon ? <Icon className="text-accent-1 text-lg" /> : null}
      <span className="text-sm text-text-secondary">{text}</span>
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </a>
    );
  }

  return content;
};

export default SingleInfo;

