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
                   sm:flex sm:flex-col sm:items-stretch sm:gap-2 sm:w-full
                   lg:h-auto sm:h-[calc(100vh-4rem)] lg:static sm:absolute
                   lg:bg-transparent sm:bg-black/95 lg:p-0 sm:p-4
                   lg:mt-0 sm:mt-16 sm:py-8">
      {links.map((link, index) => (
        <li key={index} 
            className="group relative w-full lg:w-auto"
            onClick={handleLinkClick}>
          <Link
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
            to={link.section}
            className="flex items-center gap-2 px-4 py-2 w-full
                     text-accent/80 hover:text-accent 
                     transition-colors duration-300 cursor-pointer
                     sm:border sm:border-accent/10 sm:rounded
                     sm:hover:border-accent/30 sm:hover:bg-black/50
                     lg:border-none lg:p-2 lg:py-3"
          >
            <span className="text-accent/50 group-hover:text-accent/70">$</span>
            {link.cmd}
          </Link>
          
          {/* Hover effect line - only on desktop */}
          <div className="lg:absolute lg:bottom-0 lg:left-1/2 lg:-translate-x-1/2 
                        lg:w-0 lg:h-[1px] lg:bg-accent/50 
                        lg:group-hover:w-full lg:transition-all lg:duration-300
                        sm:hidden" />
          
          {/* Matrix scan effect on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-10 
                        transition-opacity duration-300 pointer-events-none matrix-bg 
                        rounded" />
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;
