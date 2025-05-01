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
    <nav className="fixed top-0 left-0 w-full z-50 sm:px-2 md:px-4 py-2">
      <div className="max-w-[1200px] mx-auto flex sm:gap-2 md:gap-4">
        {/* Main navbar container */}
        <div className="flex-1 flex justify-between items-center bg-black/80 backdrop-blur-sm 
                      sm:p-2 md:p-4 border border-accent/30 rounded shadow-matrix-glow">
          <NavbarLogo />
          
          {/* Desktop menu */}
          <div className={`lg:block ${menuOpen ? "sm:flex menu-slide-in" : "sm:hidden"} 
                        lg:relative sm:fixed sm:top-[3.5rem] sm:left-0 sm:w-full sm:py-3 sm:px-3
                        sm:bg-black/95 sm:border-t sm:border-accent/30 sm:backdrop-blur-md
                        transition-all duration-300 ease-in-out z-50`}>
            <NavbarLinks />
          </div>
          
          {/* Connect button - hide on mobile when menu is open */}
          <div className={`lg:block ${menuOpen ? "sm:hidden" : "sm:block"}`}>
            <NavbarBtn />
          </div>
        </div>
        
        {/* Mobile menu toggle - only show on mobile */}
        <div className="lg:hidden sm:flex items-center">
          <div className="bg-black/80 backdrop-blur-sm sm:p-2 md:p-4 
                         border border-accent/30 rounded shadow-matrix-glow">
            <NavbarToggler />
          </div>
        </div>
      </div>
      
      {/* Full screen overlay when mobile menu is open */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40" 
             onClick={() => dispatch(toggleMenu())} />
      )}

      {/* Add custom styles for mobile menu animation */}
      <style jsx>{`
        @keyframes slideIn {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        .menu-slide-in {
          animation: slideIn 0.3s ease-out forwards;
        }
      `}</style>
    </nav>
  );
};

export default NavbarMain;
