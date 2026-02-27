import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="space-y-4">
      <div className="glass-panel p-5">
        <h3 className="text-text-primary font-semibold mb-4">Key Metrics</h3>
        <div className="grid grid-cols-2 gap-3">
          <ExperienceInfo number="3+" text="Years" />
          <ExperienceInfo number="20+" text="Projects" />
        </div>
      </div>

      <div className="glass-panel p-5">
        <h4 className="text-text-primary font-semibold mb-3">Core Focus</h4>
        <p className="text-sm text-text-secondary leading-relaxed">
          Front-end architecture, secure engineering practices, and practical user-centered product delivery.
        </p>
      </div>
    </div>
  );
};

export default ExperienceTopLeft;
