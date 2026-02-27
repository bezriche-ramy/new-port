import ExperienceText from "./ExperienceText";
import ExperienceTop from "./ExperienceTop";
import AllExperiences from "./AllExperiences";

const ExperienceMain = () => {
  return (
    <section id="experience" className="section-alternate">
      <div className="section-container">
        <ExperienceText />
        <div className="mt-10">
          <ExperienceTop />
        </div>
        <div className="mt-14">
          <AllExperiences />
        </div>
      </div>
    </section>
  );
};

export default ExperienceMain;
