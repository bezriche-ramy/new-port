import { LuArrowUpRight } from "react-icons/lu";

const NavbarBtn = () => {
  return (
    <a
      href="https://www.upwork.com/freelancers/~01940bb9c33250ffae"
      target="_blank"
      rel="noopener noreferrer"
      className="btn-primary text-sm md:text-base px-4 md:px-5 py-2.5"
    >
      Me Recruter
      <LuArrowUpRight className="w-4 h-4" />
    </a>
  );
};

export default NavbarBtn;
