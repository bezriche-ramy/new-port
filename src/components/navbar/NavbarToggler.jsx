import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../state/menuSlice";
import "../../styles/navToggler.css";

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="5" width="20" height="2" className="text-muted"/>
    <rect x="2" y="11" width="20" height="2" className="text-muted"/>
    <rect x="2" y="17" width="20" height="2" className="text-muted"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="11" width="16" height="2" transform="rotate(45 12 12)" className="text-muted"/>
    <rect x="4" y="11" width="16" height="2" transform="rotate(-45 12 12)" className="text-muted"/>
  </svg>
);

const NavbarToggler = () => {
  const dispatch = useDispatch();
  const menuOpen = useSelector((state) => state.menu.menuOpen);

  return (
    <button
      onClick={() => dispatch(toggleMenu())}
      className="w-10 h-10 flex items-center justify-center bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-300"
      aria-label="Toggle navigation menu"
    >
      {menuOpen ? <CloseIcon /> : <MenuIcon />}
    </button>
  );
};

export default NavbarToggler;
