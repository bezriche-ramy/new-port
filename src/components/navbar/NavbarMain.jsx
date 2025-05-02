import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../state/menuSlice";

const NavbarMain = () => {
  const dispatch = useDispatch();
  const menuOpen = useSelector((state) => state.menu.menuOpen);
  
  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-4">
      <div className="max-w-[1200px] mx-auto">
        {/* Main navbar container */}
        <div className="flex items-center justify-between bg-black/80 backdrop-blur-sm 
                      py-3 px-4 border border-accent/30 rounded-lg shadow-matrix-glow">
          <NavbarLogo />
          
          {/* Desktop menu */}
          <div className={`lg:flex items-center ${menuOpen ? "flex" : "hidden"} 
                        lg:relative fixed top-0 left-0 w-full h-screen lg:w-auto lg:h-auto
                        lg:bg-transparent bg-black/95 backdrop-blur-md lg:backdrop-blur-none
                        transition-all duration-300 ease-in-out z-50
                        ${menuOpen ? "opacity-100" : "opacity-0 lg:opacity-100"}
                        lg:p-0 p-20`}>
            <NavbarLinks />
          </div>
          
          {/* Mobile menu toggle and connect button */}
          <div className="flex items-center gap-4">
            <div className={`lg:block ${menuOpen ? "hidden" : "block"}`}>
              <NavbarBtn />
            </div>
            
            <div className="lg:hidden flex items-center">
              <NavbarToggler />
            </div>
          </div>
        </div>
      </div>
      
      {/* Full screen overlay when mobile menu is open */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40" 
             onClick={() => dispatch(toggleMenu())} />
      )}
    </nav>
  );
};

export default NavbarMain;
