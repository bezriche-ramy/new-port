import { Link } from "react-scroll";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../state/menuSlice";

const links = [
  { link: "About", section: "about", cmd: "cat about.md" },
  { link: "Skills", section: "skills", cmd: "ls -la skills/" },
  { link: "Experience", section: "experience", cmd: "history" },
  { link: "Projects", section: "projects", cmd: "cd projects/" },
  { link: "Certificate", section: "certificates", cmd: "verify certs/" },
  { link: "Contact", section: "contact", cmd: "ssh connect" },
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
            className="flex items-center gap-2 px-4 py-2 w-full
                     text-accent/80 hover:text-accent 
                     lg:border-none sm:border sm:border-accent/30 sm:rounded
                     sm:bg-black lg:bg-transparent"
          >
            <span className="text-accent/50">$</span>
            {link.cmd}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;
