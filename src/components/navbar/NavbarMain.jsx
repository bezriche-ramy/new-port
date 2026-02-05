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
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-[1200px] mx-auto p-4">
        {/* Main navbar */}
        <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-4 shadow-card backdrop-blur-md bg-opacity-95 transition-colors duration-300">
          <NavbarLogo />

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center">
            <NavbarLinks />
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-4">
            <div className="lg:block hidden">
              <NavbarBtn />
            </div>
            <div className="lg:hidden block">
              <NavbarToggler />
            </div>
          </div>
        </div>

        {/* Mobile Menu - Separate from main navbar */}
        {menuOpen && (
          <div className="lg:hidden block mt-2">
            <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-card backdrop-blur-md bg-opacity-95 transition-colors duration-300">
              <NavbarLinks />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavbarMain;
