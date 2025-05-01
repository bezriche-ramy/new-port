import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px] font-code">
      <div className="bg-black/30 border border-accent/30 rounded p-4">
        <p className="text-accent font-bold uppercase text-2xl text-center terminal-text">
          {"> "}runtime_metrics
        </p>
        <div className="flex justify-center items-center gap-4 mt-4">
          <ExperienceInfo number="3+" text="YEARS_CODING" />
          <p className="font-bold text-4xl text-accent/30">|</p>
          <ExperienceInfo number="20+" text="WEB_PROJECTS" />
        </div>
      </div>
      
      <div className="bg-black/30 border border-accent/30 rounded p-4">
        <p className="text-accent/80 text-center mb-4">
          {"> "}cat developer_stats.log
        </p>
        <div className="border-l-2 border-accent/30 pl-4">
          <p className="text-accent/70 mb-2">Specialized in React ecosystem and modern JavaScript development.</p>
          <p className="text-accent/70">Building scalable web applications with clean, maintainable code.</p>
        </div>
      </div>
      
      <ExperienceInfo number="100%" text="CODE_QUALITY" />
    </div>
  );
};

export default ExperienceTopLeft;
