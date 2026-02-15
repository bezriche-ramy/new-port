import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../state/menuSlice";
import { motion } from "framer-motion";

const NavbarMain = () => {
  const dispatch = useDispatch();
  const menuOpen = useSelector((state) => state.menu.menuOpen);

  return (
    <nav className="fixed top-6 left-0 w-full z-50 px-6">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-5xl mx-auto"
      >
        {/* Floating Dynamic Island Navbar */}
        <div className="relative">
          <div className="flex items-center justify-between bg-slate/40 border border-white/10 rounded-full px-6 py-4 shadow-glass backdrop-blur-glass transition-all duration-500 hover:border-white/20 hover:shadow-glow-cyan">
            <NavbarLogo />

            {/* Desktop Links - Center */}
            <div className="hidden lg:flex items-center gap-8">
              <NavbarLinks />
            </div>

            {/* Right Side Controls */}
            <div className="flex items-center gap-4">
              <div className="lg:block hidden">
                <NavbarBtn />
              </div>
              <div className="lg:hidden block">
                <NavbarToggler />
              </div>
            </div>
          </div>

          {/* Glow effect */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-accent/20 via-electric/20 to-accent/20 blur-3xl opacity-30 rounded-full" />
        </div>

        {/* Mobile Menu - Floating below */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden block mt-4"
          >
            <div className="bg-slate/60 border border-white/10 rounded-3xl p-6 shadow-glass backdrop-blur-glass">
              <NavbarLinks />
            </div>
          </motion.div>
        )}
      </motion.div>
    </nav>
  );
};

export default NavbarMain;
