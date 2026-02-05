import { Link } from "react-scroll";
import { LuArrowDownRight } from "react-icons/lu";

const NavbarBtn = () => {
  return (
    <a
      href="https://www.upwork.com/freelancers/~01940bb9c33250ffae"
      target="_blank"
      rel="noopener noreferrer"
      className="btn-primary
               sm:text-xs md:text-sm lg:text-base
               sm:px-3 md:px-4 sm:py-1.5 md:py-2
               sm:whitespace-nowrap flex items-center gap-2
               self-center hover-lift"
    >
      <span>Me Recruter</span>
      <LuArrowDownRight className="w-4 h-4" />
    </a>
  );
};

export default NavbarBtn;
