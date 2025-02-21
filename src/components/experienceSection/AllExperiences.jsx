import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Cybersecurity & Web Development Intern",
    company: "Djezzy",
    date: "2024",
    responsibilities: [
      "Worked on security protocols for web applications.",
      "Analysed network performance and optimised infrastructure.",
      "Contributed to improving cybersecurity for telecom systems.",
    ],
  },
  {
    job: "Communication Manager",
    company: "GDG Algeria",
    date: "2025 - Present",
    responsibilities: [
      "Managing communication strategies and event organisation.",
      "Coordinating with developers and tech enthusiasts.",
      "Enhancing GDG Algeria's presence through innovative content.",
    ],
  },
  {
    job: "Front-End Developer & Designer",
    company: "Shellmatt",
    date: "2025 - Present",
    responsibilities: [
      "Designing creative and user-centric interfaces.",
      "Developing and optimising front-end solutions.",
      "Collaborating with developers and designers to enhance UI/UX.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 && (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
