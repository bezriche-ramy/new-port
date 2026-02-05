import { Link } from "react-scroll";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../state/menuSlice";

const NavbarLinks = () => {
  const dispatch = useDispatch();

  const links = [
    { link: "À propos", section: "about" },
    { link: "Compétences", section: "skills" },
    { link: "Expérience", section: "experience" },
    { link: "Projets", section: "projects" },
    { link: "Contact", section: "contact" },
  ];

  const handleLinkClick = () => {
    if (window.innerWidth < 1024) {
      dispatch(toggleMenu());
    }
  };

  return (
    <ul className="lg:flex lg:flex-row lg:items-center lg:gap-6 
                   sm:flex sm:flex-col sm:items-center sm:gap-4 
                   lg:h-auto sm:h-full lg:static lg:p-0 sm:py-8">
      {links.map((link, index) => (
        <li key={index} className="w-full lg:w-auto">
          <Link
            spy={true}
            smooth={true}
            duration={500}
            offset={-130}
            to={link.section}
            onClick={handleLinkClick}
            isDynamic={true}
            spyThrottle={100}
            className="px-4 py-2 w-full text-center lg:text-left
                     text-muted hover:text-accent font-medium
                     transition-all duration-300 hover-lift
                     lg:border-none sm:border sm:border-gray-200 sm:rounded-lg
                     sm:bg-white lg:bg-transparent hover:bg-gray-50"
          >
            {link.link}
          </Link>
          <div className="mx-auto bg-accent w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;
