import { Link } from "react-scroll";

const NavbarLogo = () => {
  return (
    <Link 
      to="hero" 
      spy={true} 
      smooth={true} 
      duration={300} 
      offset={0}
      isDynamic={true}
      ignoreCancelEvents={false}
      spyThrottle={100}
      hashSpy={false}
      style={{ cursor: 'pointer' }}
      className="group cursor-pointer"
    >
      {/* Desktop Logo */}
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 lg:flex sm:hidden items-center gap-2 group-hover:text-accent transition-colors duration-300">
        Ramy Bezriche
      </h1>

      {/* Mobile Logo */}
      <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100 lg:hidden sm:flex items-center group-hover:text-accent transition-colors duration-300">
        RB
      </h1>
    </Link>
  );
};

export default NavbarLogo;
