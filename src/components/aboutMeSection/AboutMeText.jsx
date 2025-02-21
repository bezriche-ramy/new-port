import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p className="text-blue-900">
      Hello! I'm Bezriche Ramy, a passionate computer science student specialising in cybersecurity at USTHB. With a strong background in software development, I work extensively with React for front-end development and Next.js for the back end.

Beyond academics, I have hands-on experience in telecommunications from my internship at Djezzy and contribute actively to the tech community as the Communication Manager for GDG Algeria. I'm also part of Shellmatt’s design department, where I merge creativity with technology.

Driven by a deep interest in AI, web, and mobile app development, I strive to build innovative and secure digital solutions. When I'm not coding, you'll likely find me exploring new tech trends or refining my problem-solving skills.

Let’s connect and create something impactful!
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
