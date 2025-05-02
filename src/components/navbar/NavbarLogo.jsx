import { Link } from "react-scroll";

const NavbarLogo = () => {
  return (
    <Link 
      to="hero" 
      spy={true} 
      smooth={true} 
      duration={500} 
      offset={-100}
      className="group cursor-pointer relative"
    >
      {/* Desktop Logo */}
      <h1 className="text-accent lg:flex sm:hidden items-center gap-2 font-code">
        <span className="text-accent/50 group-hover:text-accent/70 transition-colors duration-300">
          user@
        </span>
        <span className="group-hover:text-highlight transition-colors duration-300">
          ramy-bezriche
        </span>
        <span className="text-accent/70">:~$</span>
        <span className="w-2 h-5 bg-accent/70 animate-blink"></span>
      </h1>

      {/* Mobile Logo */}
      <h1 className="text-accent lg:hidden sm:flex items-center gap-1 font-code">
        <span className="text-accent/50 group-hover:text-accent/70 transition-colors duration-300">
          $
        </span>
        <span className="group-hover:text-highlight transition-colors duration-300">
          RB_
        </span>
        <span className="w-1.5 h-4 bg-accent/70 animate-blink"></span>
      </h1>

      {/* Matrix scan effect on hover */}
      <div className="absolute inset-0 -m-2 opacity-0 group-hover:opacity-10 
                     transition-opacity duration-300 matrix-bg rounded" />

      {/* Bottom border animation */}
      <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent/30 
                     group-hover:w-full transition-all duration-300" />
    </Link>
  );
};

export default NavbarLogo;
