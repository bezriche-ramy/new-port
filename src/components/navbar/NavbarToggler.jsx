import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../state/menuSlice";

const MenuIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6H20" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    <path d="M4 12H20" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    <path d="M4 18H20" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 6L18 18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    <path d="M18 6L6 18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

const NavbarToggler = () => {
  const dispatch = useDispatch();
  const menuOpen = useSelector((state) => state.menu.menuOpen);

  return (
    <button
      type="button"
      onClick={() => dispatch(toggleMenu())}
      className="w-11 h-11 rounded-full border border-border-glass bg-white/5 text-text-primary backdrop-blur-glass inline-flex items-center justify-center transition-colors duration-300 hover:bg-white/10"
      aria-label="Toggle navigation menu"
    >
      {menuOpen ? <CloseIcon /> : <MenuIcon />}
    </button>
  );
};

export default NavbarToggler;
