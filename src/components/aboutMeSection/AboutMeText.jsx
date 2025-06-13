import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="section-title text-left mb-10">About Me</h2>
      <div className="card-elevated p-8 text-black max-w-2xl">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-accent mb-3">Who I Am</h3>
          <p className="text-muted leading-relaxed">
            I'm a passionate full-stack developer and Computer Science student at USTHB, specializing in creating 
            modern, scalable web applications. With expertise in React, Node.js, and contemporary development practices, 
            I focus on building user-centered solutions that make a real impact.
          </p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-accent mb-3">My Expertise</h3>
          <p className="text-muted leading-relaxed">
            I excel in full-stack development with a strong foundation in modern JavaScript frameworks and libraries. 
            Currently contributing to GDG Algeria's development initiatives while creating innovative web solutions at Shellmatt. 
            My experience includes diverse projects ranging from real-time applications to complex web platforms.
          </p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-accent mb-3">My Mission</h3>
          <p className="text-muted leading-relaxed">
            I'm dedicated to crafting exceptional digital experiences through clean, maintainable code and thoughtful design. 
            My goal is to bridge the gap between technical innovation and user needs, creating applications that are both 
            powerful and intuitive. I believe in continuous learning and staying at the forefront of web development trends.
          </p>
        </div>
      </div>
      
      <div className="mt-8">
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
          className="btn-primary cursor-pointer hover-lift"
        >
          View My Projects
        </Link>
      </div>
    </div>
  );
};

export default AboutMeText;
