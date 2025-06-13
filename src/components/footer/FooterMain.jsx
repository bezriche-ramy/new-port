import { Link } from "react-scroll";

const FooterMain = () => {
  const footerLinks = [
    { name: "About", section: "about" },
    { name: "Skills", section: "skills" },
    { name: "Experience", section: "experience" },
    { name: "Projects", section: "projects" },
  ];

  return (
    <div className="px-4 relative bg-gray-50">
      <div className="w-full h-[1px] bg-gray-200 mt-24"></div>
      <div className="md:flex justify-between mt-8 max-w-[1200px] mx-auto sm:hidden">
        <h3 className="text-2xl text-gray-900 font-semibold">RAMY BEZRICHE</h3>
        <ul className="flex gap-6 text-gray-600 text-lg">
          {footerLinks.map((item, index) => {
            return (
              <li key={index} className="group">
                <Link
                  spy={true}
                  smooth={true}
                  duration={300}
                  offset={-80}
                  isDynamic={true}
                  spyThrottle={100}
                  to={item.section}
                  className="hover:text-accent transition-all duration-300 cursor-pointer font-medium"
                >
                  {item.name}
                </Link>
                <div className="mx-auto bg-accent w-0 group-hover:w-full h-[1px] transition-all duration-300"></div>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="max-w-[1200px] mx-auto text-center mt-6 mb-8 text-sm text-gray-600">
        © 2024 BEZRICHE RAMY | Full Stack Developer
      </p>
    </div>
  );
};

export default FooterMain;
