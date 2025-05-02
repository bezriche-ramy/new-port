import { Link } from "react-scroll";
import { LuArrowDownRight } from "react-icons/lu";

const NavbarBtn = () => {
  return (
    <a
      href="https://www.upwork.com/freelancers/~01940bb9c33250ffae"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-black border border-accent text-accent font-code
               sm:text-xs md:text-sm lg:text-base
               sm:px-3 md:px-4 sm:py-1.5 md:py-2
               hover:bg-accent/10 hover:shadow-matrix-glow
               transition-all duration-300 rounded cursor-pointer
               sm:whitespace-nowrap flex items-center gap-1
               self-center"
    >
      <span className="text-accent/50">$</span>
      <span className="relative top-[1px]">hire me</span>
    </a>
  );
};

export default NavbarBtn;
