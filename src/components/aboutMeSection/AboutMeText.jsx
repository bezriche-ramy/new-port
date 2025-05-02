import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-accent mb-10 font-code terminal-text">{"> "}SYSTEM INFO</h2>
      <div className="font-code text-accent/90 bg-black/30 p-6 border border-accent/30 rounded">
        <p className="mb-4">
          {"> "}whoami
        </p>
        <p className="text-accent/80 mb-6 border-l-2 border-accent/30 pl-4">
          Cybersecurity student and full-stack web developer at USTHB, passionate about building secure, 
          efficient web applications. Specializing in application security, penetration testing, and modern 
          web development with React and Node.js. Strong foundation in both offensive and defensive security practices.
        </p>
        
        <p className="mb-4">
          {"> "}cat expertise.txt
        </p>
        <p className="text-accent/80 mb-6 border-l-2 border-accent/30 pl-4">
          Dual expertise in cybersecurity and web development. Proficient in security assessment, vulnerability analysis,
          and secure coding practices. Currently focused on GDG Algeria's security infrastructure while developing 
          secure web applications at Shellmatt. Previous experience includes security auditing and full-stack development at Djezzy.
        </p>
        
        <p className="mb-4">
          {"> "}cat mission.txt
        </p>
        <p className="text-accent/80 mb-6 border-l-2 border-accent/30 pl-4">
          Committed to bridging the gap between security and development, creating web solutions that are both 
          innovative and secure. Constantly exploring new attack vectors and security measures while maintaining 
          modern development practices. Dedicated to building applications with security-first architecture.
        </p>
      </div>
      
      <button className="border border-accent rounded-sm py-2 px-4 text-lg flex gap-2 items-center mt-10 
                       hover:bg-accent/10 hover:shadow-matrix-glow transition-all duration-500 cursor-pointer 
                       md:self-start sm:self-center font-code group">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-80}
          isDynamic={true}
          ignoreCancelEvents={false}
          spyThrottle={50}
          hashSpy={false}
          style={{ cursor: 'pointer' }}
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
