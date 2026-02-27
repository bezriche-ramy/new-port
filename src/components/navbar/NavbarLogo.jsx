import { Link } from "react-scroll";

const NavbarLogo = () => {
  return (
    <Link
      to="hero"
      spy
      smooth
      duration={450}
      offset={0}
      className="cursor-pointer select-none"
    >
      <div className="hidden sm:block">
        <p className="font-heading text-lg md:text-xl font-bold tracking-tight text-text-primary">
          Ramy Bezriche
        </p>
      </div>
      <div className="sm:hidden">
        <p className="font-heading text-xl font-bold tracking-tight text-text-primary">RB</p>
      </div>
    </Link>
  );
};

export default NavbarLogo;
