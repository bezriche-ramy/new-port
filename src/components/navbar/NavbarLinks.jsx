import { Link } from "react-scroll";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../state/menuSlice";

const links = [
  { link: "About", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Certificates", section: "certificates" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = () => {
  const dispatch = useDispatch();

  const handleLinkClick = () => {
    dispatch(toggleMenu());
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
            duration={300}
            offset={-80}
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
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;
