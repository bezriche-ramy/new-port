import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <div className="card-elevated p-6">
        <h3 className="text-xl font-semibold text-black text-center mb-6">
          Key Metrics
        </h3>
        <div className="flex justify-center items-center gap-4">
          <ExperienceInfo number="3+" text="Years Experience" />
          <div className="w-px h-12 bg-gray-300"></div>
          <ExperienceInfo number="20+" text="Projects Built" />
        </div>
      </div>
      
      <div className="card p-6">
        <h4 className="text-lg font-semibold text-accent text-center mb-4">
          Core Focus
        </h4>
        <div className="space-y-3">
          <p className="text-muted text-center">
            Specialized in React ecosystem and modern JavaScript development.
          </p>
          <p className="text-muted text-center">
            Building scalable web applications with clean, maintainable code.
          </p>
        </div>
      </div>
      
      <ExperienceInfo number="100%" text="Commitment" />
    </div>
  );
};

export default ExperienceTopLeft;
