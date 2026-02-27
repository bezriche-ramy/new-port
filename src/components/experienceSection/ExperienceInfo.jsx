/* eslint-disable react/prop-types */
const ExperienceInfo = ({ number, text }) => {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
      <p className="text-xl font-bold text-text-primary">{number}</p>
      <p className="text-xs text-text-secondary uppercase tracking-[0.14em] mt-1">{text}</p>
    </div>
  );
};

export default ExperienceInfo;

