import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../state/menuSlice";

const NavbarToggler = () => {
  const dispatch = useDispatch();
  const menuOpen = useSelector((state) => state.menu.menuOpen);

  return (
    <button
      onClick={() => dispatch(toggleMenu())}
      className="flex flex-col justify-center items-center gap-1.5 w-8 h-8 relative group"
      aria-label="Toggle navigation menu"
    >
      {/* Hamburger bars with matrix animation */}
      <span className={`w-6 h-0.5 bg-accent transition-all duration-300 ease-out
                     ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
      <span className={`w-6 h-0.5 bg-accent transition-all duration-300 ease-out
                     ${menuOpen ? "opacity-0" : "opacity-100"}`} />
      <span className={`w-6 h-0.5 bg-accent transition-all duration-300 ease-out
                     ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />

      {/* Matrix scan effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 
                     transition-opacity duration-300 matrix-bg rounded" />
    </button>
  );
};

export default NavbarToggler;
