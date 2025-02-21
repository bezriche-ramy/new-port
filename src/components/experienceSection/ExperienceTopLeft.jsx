import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Since 2022
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="3" text="Years" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number="15+" text="Projects" />
      </div>
      <p className="text-center">
        With 3 years of experience in web development, cybersecurity, and design, I specialise in creating secure, scalable applications and impactful visual experiences.
      </p>
      <ExperienceInfo number="$2000+" text="Max Budget" />
    </div>
  );
};

export default ExperienceTopLeft;
