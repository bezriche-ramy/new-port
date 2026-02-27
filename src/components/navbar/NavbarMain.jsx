import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";
import { gsap, ScrollTrigger } from "../../lib/gsap";

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);
  const shellRef = useRef(null);
  const mobileWrapRef = useRef(null);

  useEffect(() => {
    if (!shellRef.current) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        shellRef.current,
        { y: -80, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      );

      ScrollTrigger.create({
        start: 0,
        end: 260,
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.to(shellRef.current, {
            paddingTop: 16 - progress * 4,
            paddingBottom: 16 - progress * 4,
            backgroundColor: `rgba(18, 18, 26, ${0.4 + progress * 0.28})`,
            borderColor: `rgba(255, 255, 255, ${0.08 + progress * 0.1})`,
            duration: 0.2,
            overwrite: true,
          });
        },
      });
    }, shellRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!mobileWrapRef.current) {
      return;
    }

    gsap.killTweensOf(mobileWrapRef.current);

    if (menuOpen) {
      gsap.set(mobileWrapRef.current, { display: "block" });
      gsap.fromTo(
        mobileWrapRef.current,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.36, ease: "power2.out" }
      );
      return;
    }

    gsap.to(mobileWrapRef.current, {
      height: 0,
      opacity: 0,
      duration: 0.26,
      ease: "power2.in",
      onComplete: () => {
        gsap.set(mobileWrapRef.current, { display: "none" });
      },
    });
  }, [menuOpen]);

  return (
    <nav className="fixed top-5 left-0 w-full z-50 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={shellRef} className="glass-pill px-5 md:px-7 py-4 transition-shadow duration-300 hover:shadow-glass-glow">
          <div className="flex items-center justify-between gap-4">
            <NavbarLogo />

            <div className="hidden lg:flex items-center gap-8">
              <NavbarLinks />
            </div>

            <div className="flex items-center gap-3 md:gap-4">
              <div className="hidden lg:block">
                <NavbarBtn />
              </div>
              <div className="lg:hidden block">
                <NavbarToggler />
              </div>
            </div>
          </div>
        </div>

        <div ref={mobileWrapRef} className="lg:hidden hidden overflow-hidden">
          <div className="glass-panel mt-3 p-4">
            <NavbarLinks />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarMain;
