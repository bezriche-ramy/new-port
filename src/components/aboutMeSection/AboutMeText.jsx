import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-accent mb-10 font-code terminal-text tracking-normal sm:tracking-wider">
        {"> "}SYSTEM INFO
      </h2>
      <div className="font-code text-accent/90 bg-black/30 p-6 border border-accent/30 rounded">
        <p className="mb-4">
          {"> "}whoami
        </p>
        <p className="text-accent/80 mb-6 border-l-2 border-accent/30 pl-4">
          Full-stack web developer and computer science student at USTHB, passionate about creating modern, 
          efficient web applications. Experienced in React, Node.js, and various modern web technologies 
          with a strong foundation in secure development practices.
        </p>
        
        <p className="mb-4">
          {"> "}cat expertise.txt
        </p>
        <p className="text-accent/80 mb-6 border-l-2 border-accent/30 pl-4">
          Specialized in modern JavaScript frameworks and libraries. Currently serving as GDG Algeria's 
          Communication Manager and working with Shellmatt's development team. Previous experience includes 
          full-stack development during Djezzy internship.
        </p>
        
        <p className="mb-4">
          {"> "}cat mission.txt
        </p>
        <p className="text-accent/80 mb-6 border-l-2 border-accent/30 pl-4">
          Dedicated to building innovative web solutions that combine elegant design with robust functionality. 
          Constantly exploring new web technologies and best practices while maintaining a security-conscious 
          approach to development.
        </p>
      </div>
      
      <button className="border border-accent rounded-sm py-2 px-4 text-lg flex gap-2 items-center mt-10 
                       hover:bg-accent/10 hover:shadow-matrix-glow transition-all duration-500 cursor-pointer 
                       md:self-start sm:self-center font-code group">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-accent group-hover:text-highlight transition-all duration-500 terminal-text"
        >
          {"> "}view_projects --secure
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
