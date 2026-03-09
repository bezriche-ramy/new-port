import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu, openMenu } from "../../state/menuSlice";
import { gsap, ScrollTrigger } from "../../lib/gsap";
import { getLenis, scrollToSection } from "../../lib/scroll";
import {
  availabilityLink,
  mobileMenuStatus,
  navigationLinks,
  navigationOffset,
} from "../../lib/navigation";

const NavbarMain = () => {
  const dispatch = useDispatch();
  const menuOpen = useSelector((state) => state.menu.menuOpen);
  const barRef = useRef(null);
  const overlayRef = useRef(null);
  const panelRef = useRef(null);
  const topRowRef = useRef(null);
  const utilityRef = useRef(null);
  const closeButtonRef = useRef(null);
  const linkRefs = useRef([]);
  const menuTimelineRef = useRef(null);
  const isHidden = useRef(false);

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

  useEffect(() => {
    if (!overlayRef.current || !panelRef.current) return undefined;

    const ctx = gsap.context(() => {
      const animatedLinks = linkRefs.current.filter(Boolean);
      const animatedBlocks = [topRowRef.current, utilityRef.current].filter(Boolean);

      gsap.set(overlayRef.current, {
        display: "none",
        autoAlpha: 0,
        pointerEvents: "none",
      });
      gsap.set(animatedLinks, { y: 52, autoAlpha: 0 });
      gsap.set(animatedBlocks, { y: 24, autoAlpha: 0 });

      const tl = gsap.timeline({
        paused: true,
        onReverseComplete: () => {
          gsap.set(overlayRef.current, { display: "none", pointerEvents: "none" });
        },
      });

      tl.set(overlayRef.current, { display: "flex", pointerEvents: "auto" })
        .to(overlayRef.current, { autoAlpha: 1, duration: 0.24, ease: "power2.out" }, 0)
        .fromTo(
          panelRef.current,
          { clipPath: "inset(0 0 100% 0)", yPercent: -4, scale: 0.985 },
          {
            clipPath: "inset(0 0 0% 0)",
            yPercent: 0,
            scale: 1,
            duration: 0.62,
            ease: "power4.out",
          },
          0
        )
        .to(animatedBlocks, { y: 0, autoAlpha: 1, duration: 0.34, stagger: 0.06 }, 0.08)
        .to(
          animatedLinks,
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.44,
            stagger: 0.06,
            ease: "power3.out",
          },
          0.14
        );

      menuTimelineRef.current = tl;
    }, overlayRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const lenis = getLenis();
    const timeline = menuTimelineRef.current;
    if (!timeline) return undefined;

    if (menuOpen) {
      document.body.style.overflow = "hidden";
      lenis?.stop();
      timeline.play(0);
      closeButtonRef.current?.focus();
      return () => {
        document.body.style.overflow = "";
      };
    }

    document.body.style.overflow = "";
    lenis?.start();
    timeline.reverse();

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        dispatch(closeMenu());
      }
    };

    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const handleViewportChange = (event) => {
      if (event.matches) {
        dispatch(closeMenu());
      }
    };

    window.addEventListener("keydown", onKeyDown);
    mediaQuery.addEventListener?.("change", handleViewportChange);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      mediaQuery.removeEventListener?.("change", handleViewportChange);
    };
  }, [dispatch, menuOpen]);

  const handleToggleMenu = () => {
    dispatch(menuOpen ? closeMenu() : openMenu());
  };

  const handleMobileNavigation = (section) => {
    scrollToSection(section, { offset: navigationOffset });
    dispatch(closeMenu());
  };

  return (
    <>
      <nav
        ref={barRef}
        className="fixed left-0 top-0 z-[100] w-full px-6 md:px-10"
        style={{ opacity: 0 }}
      >
        <div className="max-container flex items-center justify-between py-5">
          <button
            type="button"
            onClick={() => scrollToSection("hero", { offset: 0 })}
            className="select-none"
            aria-label="Scroll to hero"
          >
            <span className="font-display text-lg tracking-tight text-text-primary">
              RB
              <span className="text-accent">.</span>
            </span>
          </button>

          <div className="hidden items-center gap-8 lg:flex">
            {navigationLinks.map((link) => (
              <button
                type="button"
                key={link.section}
                onClick={() =>
                  scrollToSection(link.section, { offset: navigationOffset })
                }
                className="text-sm text-text-secondary transition-colors duration-300 hover-line hover:text-text-primary"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4 md:gap-5">
            <a
              href={availabilityLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 border border-accent px-5 py-2.5 text-sm text-accent transition-all duration-300 hover:bg-accent hover:text-bg-primary lg:inline-flex"
            >
              {availabilityLink.label}
            </a>

            <button
              type="button"
              onClick={handleToggleMenu}
              className="inline-flex h-11 items-center gap-3 border border-border-medium bg-bg-elevated/80 px-4 backdrop-blur-sm transition-colors duration-300 hover:border-accent lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
            >
              <span className="text-[10px] uppercase tracking-[0.28em] text-text-secondary">
                {menuOpen ? "Close" : "Menu"}
              </span>
              <span className="relative block h-3 w-5">
                <span
                  className="absolute left-0 top-0 block h-[1.5px] w-full bg-text-primary transition-all duration-300"
                  style={{
                    transform: menuOpen
                      ? "translateY(5px) rotate(45deg)"
                      : "translateY(0px)",
                  }}
                />
                <span
                  className="absolute left-0 top-[5px] block h-[1.5px] w-full bg-text-primary transition-all duration-300"
                  style={{ opacity: menuOpen ? 0 : 1 }}
                />
                <span
                  className="absolute left-0 top-[10px] block h-[1.5px] w-full bg-text-primary transition-all duration-300"
                  style={{
                    transform: menuOpen
                      ? "translateY(-5px) rotate(-45deg)"
                      : "translateY(0px)",
                  }}
                />
              </span>
            </button>
          </div>
        </div>
      </nav>

      <div
        ref={overlayRef}
        id="mobile-navigation"
        className="fixed inset-0 z-[99] hidden bg-black/60 lg:hidden"
      >
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          className="relative flex min-h-full w-full flex-col overflow-hidden bg-[linear-gradient(180deg,#050505_0%,#070707_52%,#0a0a0a_100%)] px-6 pb-8 pt-5"
        >
          <div
            className="absolute inset-0 opacity-[0.045]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.55) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.55) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
            }}
          />
          <div
            className="absolute left-[-12%] top-[12%] h-56 w-56 rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(196,255,0,0.16) 0%, transparent 68%)",
            }}
          />
          <div
            className="absolute right-[-8%] bottom-[16%] h-64 w-64 rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(116,247,212,0.12) 0%, transparent 68%)",
            }}
          />

          <div
            ref={topRowRef}
            className="relative z-10 flex items-center justify-between border-b border-border-subtle pb-4"
          >
            <button
              type="button"
              onClick={() => handleMobileNavigation("hero")}
              className="select-none"
              aria-label="Scroll to hero"
            >
              <span className="font-display text-lg tracking-tight text-text-primary">
                RB
                <span className="text-accent">.</span>
              </span>
            </button>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => dispatch(closeMenu())}
              className="inline-flex h-11 items-center gap-3 border border-border-medium px-4 text-sm text-text-primary transition-colors duration-300 hover:border-accent"
            >
              Close
              <span className="relative block h-3 w-3">
                <span className="absolute left-0 top-[5px] block h-[1.5px] w-full rotate-45 bg-text-primary" />
                <span className="absolute left-0 top-[5px] block h-[1.5px] w-full -rotate-45 bg-text-primary" />
              </span>
            </button>
          </div>

          <div className="relative z-10 flex flex-1 items-center py-10">
            <div className="w-full">
              {navigationLinks.map((link, index) => (
                <div
                  key={link.section}
                  ref={(node) => {
                    linkRefs.current[index] = node;
                  }}
                  className="border-b border-border-subtle/70 last:border-b-0"
                >
                  <button
                    type="button"
                    onClick={() => handleMobileNavigation(link.section)}
                    className="group flex w-full items-center justify-between gap-5 py-5 text-left"
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="font-code text-[11px] text-text-tertiary">
                        {link.num}
                      </span>
                      <span className="font-display text-[clamp(2.25rem,9vw,4.6rem)] leading-none tracking-[-0.04em] text-text-primary transition-colors duration-300 group-hover:text-accent">
                        {link.label}
                      </span>
                    </div>
                    <span className="font-code text-xs text-text-tertiary transition-transform duration-300 group-hover:translate-x-1 group-hover:text-text-primary">
                      -&gt;
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div
            ref={utilityRef}
            className="relative z-10 border-t border-border-subtle pt-5"
          >
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-code text-[10px] uppercase tracking-[0.26em] text-text-tertiary">
                  Open to select projects
                </p>
                <p className="mt-3 max-w-[28ch] text-sm leading-relaxed text-text-secondary">
                  {mobileMenuStatus}
                </p>
              </div>

              <a
                href={availabilityLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 self-start border border-accent px-5 py-3 text-sm text-accent transition-all duration-300 hover:bg-accent hover:text-bg-primary"
              >
                {availabilityLink.label}
                <span className="h-[1px] w-5 bg-current" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarMain;
