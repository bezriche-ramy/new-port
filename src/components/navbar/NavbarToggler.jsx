import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../state/menuSlice";

const NavbarToggler = () => {
  const dispatch = useDispatch();
  const menuOpen = useSelector((state) => state.menu.menuOpen);

  return (
    <button 
      className="relative group focus:outline-none w-10 h-10"
      onClick={() => dispatch(toggleMenu())}
      aria-label="Toggle navigation menu"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col gap-1.5 items-end">
          {/* Menu bars with animation */}
          <span className={`block h-0.5 bg-accent transition-all duration-300 ease-out origin-center
                         ${menuOpen ? "w-6 -rotate-45 translate-y-2" : "w-6"}`} />
          <span className={`block h-0.5 bg-accent transition-all duration-300 ease-out
                         ${menuOpen ? "w-0 opacity-0" : "w-4"}`} />
          <span className={`block h-0.5 bg-accent transition-all duration-300 ease-out origin-center
                         ${menuOpen ? "w-6 rotate-45 -translate-y-2" : "w-6"}`} />
        </div>
      </div>

      {/* Command text */}
      <div className="absolute left-1/2 -translate-x-1/2 -bottom-6 text-xs text-accent/70 whitespace-nowrap font-code">
        {menuOpen ? "kill -9 menu" : "./start_menu"}
      </div>

      {/* Matrix scan effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 
                     transition-opacity duration-300 matrix-bg rounded" />
    </button>
  );
};

export default NavbarToggler;
