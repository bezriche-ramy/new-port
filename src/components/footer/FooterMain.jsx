import { Link } from "react-scroll";

const FooterMain = () => {
  const footerLinks = [
    { name: "scan system", section: "about" },
    { name: "analyze capabilities", section: "skills" },
    { name: "view logs", section: "experience" },
    { name: "inspect projects", section: "projects" },
  ];

  return (
    <div className="px-4 relative">
      <div className="absolute inset-0 matrix-bg opacity-5"></div>
      <div className="w-full h-[1px] bg-accent/30 mt-24"></div>
      <div className="md:flex justify-between mt-4 max-w-[1200px] mx-auto sm:hidden">
        <p className="text-3xl text-accent font-code terminal-text">{"> "}RAMY_BEZRICHE</p>
        <ul className="flex gap-4 text-accent/80 text-xl font-code">
          {footerLinks.map((item, index) => {
            return (
              <li key={index} className="group">
                <Link
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-120}
                  to={item.section}
                  className="hover:text-accent transition-all duration-300 cursor-pointer terminal-text flex items-center gap-2"
                >
                  <span className="text-accent/50">$</span> {item.name}
                </Link>
                <div className="mx-auto bg-accent w-0 group-hover:w-full h-[1px] transition-all duration-300 opacity-30"></div>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-accent/50 font-code">
        {"// "}© 2024 BEZRICHE RAMY | SECURITY PROTOCOLS ACTIVE.
      </p>
    </div>
  );
};

export default FooterMain;
