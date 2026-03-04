import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "../../state/menuSlice";
import { Link } from "react-scroll";
import { gsap, ScrollTrigger } from "../../lib/gsap";

const navLinks = [
  { label: "About", section: "about", num: "01" },
  { label: "Skills", section: "skills", num: "02" },
  { label: "Experience", section: "experience", num: "03" },
  { label: "Projects", section: "projects", num: "04" },
  { label: "Contact", section: "contact", num: "05" },
];

const NavbarMain = () => {
  const dispatch = useDispatch();
  const menuOpen = useSelector((state) => state.menu.menuOpen);
  const barRef = useRef(null);
  const overlayRef = useRef(null);
  const linkRefs = useRef([]);
  const isHidden = useRef(false);

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    if (!barRef.current) return undefined;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        barRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 2.2 }
      );

      ScrollTrigger.create({
        start: "top top",
        end: 99999,
        onUpdate: (self) => {
          if (self.direction === 1 && !isHidden.current && self.scroll() > 300) {
            gsap.to(barRef.current, { y: -100, duration: 0.4, ease: "power2.in" });
            isHidden.current = true;
          } else if (self.direction === -1 && isHidden.current) {
            gsap.to(barRef.current, { y: 0, duration: 0.4, ease: "power2.out" });
            isHidden.current = false;
          }
        },
      });
    }, barRef);

    return () => ctx.revert();
  }, []);

  // Full-screen overlay animation
  useEffect(() => {
    if (!overlayRef.current) return;

    if (menuOpen) {
      document.body.style.overflow = "hidden";
      gsap.set(overlayRef.current, { display: "flex" });
      gsap.fromTo(
        overlayRef.current,
        { clipPath: "circle(0% at calc(100% - 3rem) 2rem)" },
        { clipPath: "circle(150% at calc(100% - 3rem) 2rem)", duration: 0.8, ease: "power3.inOut" }
      );
      gsap.fromTo(
        linkRefs.current.filter(Boolean),
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.07, duration: 0.6, ease: "power3.out", delay: 0.3 }
      );
    } else {
      document.body.style.overflow = "";
      gsap.to(overlayRef.current, {
        clipPath: "circle(0% at calc(100% - 3rem) 2rem)",
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(overlayRef.current, { display: "none" });
        },
      });
    }
  }, [menuOpen]);

  return (
    <>
      {/* Minimal top bar */}
      <nav
        ref={barRef}
        className="fixed top-0 left-0 w-full z-[100] px-6 md:px-10"
        style={{ opacity: 0 }}
      >
        <div className="max-container flex items-center justify-between py-5">
          <Link
            to="hero"
            spy
            smooth
            duration={450}
            offset={0}
            className="select-none"
          >
            <span className="font-display text-lg text-text-primary tracking-tight">
              RB
              <span className="text-accent">.</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.section}
                to={link.section}
                spy
                smooth
                duration={500}
                offset={-80}
                className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-300 hover-line"
                activeClass="!text-text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-5">
            {/* Hire CTA - desktop */}
            <a
              href="https://www.upwork.com/freelancers/~01940bb9c33250ffae"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-2 text-sm px-5 py-2.5 border border-accent text-accent hover:bg-accent hover:text-bg-primary transition-all duration-300"
            >
              Available for Work
            </a>

            {/* Hamburger */}
            <button
              type="button"
              onClick={() => dispatch(toggleMenu())}
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
              aria-label="Toggle menu"
            >
              <span
                className="block w-6 h-[1.5px] bg-text-primary transition-all duration-300"
                style={{
                  transform: menuOpen ? "rotate(45deg) translate(2px, 2px)" : "none",
                }}
              />
              <span
                className="block w-6 h-[1.5px] bg-text-primary transition-all duration-300"
                style={{
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                className="block w-6 h-[1.5px] bg-text-primary transition-all duration-300"
                style={{
                  transform: menuOpen ? "rotate(-45deg) translate(2px, -2px)" : "none",
                }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen overlay menu */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[99] bg-bg-primary flex-col items-center justify-center hidden"
        style={{ clipPath: "circle(0% at calc(100% - 3rem) 2rem)" }}
      >
        <div className="flex flex-col items-center gap-2">
          {navLinks.map((link, i) => (
            <div
              key={link.section}
              ref={(el) => { linkRefs.current[i] = el; }}
            >
              <Link
                to={link.section}
                spy
                smooth
                duration={500}
                offset={-80}
                onClick={() => dispatch(toggleMenu())}
                className="group flex items-baseline gap-4 py-3"
              >
                <span className="text-sm text-text-tertiary font-code">
                  {link.num}
                </span>
                <span className="font-display text-[clamp(2rem,8vw,5rem)] text-text-primary leading-none tracking-tight group-hover:text-accent transition-colors duration-300">
                  {link.label}
                </span>
              </Link>
            </div>
          ))}
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex items-center justify-between px-8 md:px-12">
          <p className="text-label">Ramy Bezriche &copy; 2026</p>
          <a
            href="https://www.upwork.com/freelancers/~01940bb9c33250ffae"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-accent hover-line"
          >
            Available for Work
          </a>
        </div>
      </div>
    </>
  );
};

export default NavbarMain;
