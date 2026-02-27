import { useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../state/menuSlice";
import { gsap } from "../../lib/gsap";

const links = [
  { label: "A propos", section: "about" },
  { label: "Competences", section: "skills" },
  { label: "Experience", section: "experience" },
  { label: "Projets", section: "projects" },
  { label: "Contact", section: "contact" },
];

const NavbarLinks = () => {
  const dispatch = useDispatch();
  const itemRefs = useRef([]);

  useEffect(() => {
    const cleanups = [];

    itemRefs.current.forEach((item) => {
      if (!item) {
        return;
      }

      const underline = item.querySelector(".nav-link-underline");
      if (!underline) {
        return;
      }

      gsap.set(underline, { scaleX: 0, transformOrigin: "left center" });

      const enter = () => {
        gsap.to(underline, { scaleX: 1, duration: 0.24, ease: "power2.out" });
      };

      const leave = () => {
        gsap.to(underline, { scaleX: 0, duration: 0.22, ease: "power2.inOut" });
      };

      item.addEventListener("mouseenter", enter);
      item.addEventListener("mouseleave", leave);
      cleanups.push(() => {
        item.removeEventListener("mouseenter", enter);
        item.removeEventListener("mouseleave", leave);
      });
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  const handleLinkClick = () => {
    if (window.innerWidth < 1024) {
      dispatch(toggleMenu());
    }
  };

  return (
    <ul className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-6">
      {links.map((link, index) => (
        <li
          key={link.section}
          ref={(node) => {
            itemRefs.current[index] = node;
          }}
          className="relative"
        >
          <Link
            to={link.section}
            spy
            smooth
            duration={500}
            offset={-120}
            onClick={handleLinkClick}
            className="block px-4 py-3 text-sm md:text-base text-text-secondary hover:text-text-primary transition-colors duration-300 rounded-xl lg:rounded-none lg:px-0 lg:py-1"
            activeClass="text-text-primary"
          >
            {link.label}
          </Link>
          <span className="nav-link-underline absolute left-4 lg:left-0 right-4 lg:right-0 -bottom-[2px] h-[2px] rounded-full bg-gradient-to-r from-accent-1 to-accent-2" />
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;
