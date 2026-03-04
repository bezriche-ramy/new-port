import { lazy, Suspense, useEffect, useRef, useState } from "react";
import NavbarMain from "./components/navbar/NavbarMain";
import HeroMain from "./components/heroSection/HeroMain";
import MagneticCursor from "./components/MagneticCursor";
import PageTransition from "./components/PageTransition";
import ScrollProgress from "./components/ScrollProgress";
import EasterEgg from "./components/EasterEgg";
import BackToTop from "./components/BackToTop";
import LoadingDots from "./components/LoadingDots";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "./lib/gsap";

const AboutAndSkills = lazy(() =>
  Promise.all([
    import("./components/aboutMeSection/AboutMeMain"),
    import("./components/skillsSection/SkillsMain"),
  ]).then(([about, skills]) => ({
    default: () => (
      <>
        <about.default />
        <skills.default />
      </>
    ),
  }))
);

const ProjectsAndExperience = lazy(() =>
  Promise.all([
    import("./components/experienceSection/ExperienceMain"),
    import("./components/projectsSection/ProjectsMain"),
  ]).then(([exp, proj]) => ({
    default: () => (
      <>
        <exp.default />
        <proj.default />
      </>
    ),
  }))
);

const CertAndContact = lazy(() =>
  Promise.all([
    import("./components/certificateSection/CertificateMain"),
    import("./components/contactMeSection/ContactMeMain"),
    import("./components/footer/FooterMain"),
  ]).then(([cert, contact, footer]) => ({
    default: () => (
      <>
        <cert.default />
        <contact.default />
        <footer.default />
      </>
    ),
  }))
);

const emitLayoutUpdated = () => {
  window.dispatchEvent(new Event("app:layout-updated"));
};

const LazyContentReady = () => {
  useEffect(() => {
    emitLayoutUpdated();
  }, []);

  return null;
};

function App() {
  const [isIntroActive, setIsIntroActive] = useState(true);
  const lenisRef = useRef(null);
  const refreshRafRef = useRef(0);
  const refreshTimeoutRef = useRef(0);

  useEffect(() => {
    const scheduleRefresh = () => {
      if (refreshRafRef.current) {
        cancelAnimationFrame(refreshRafRef.current);
      }

      refreshRafRef.current = requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    };

    const scheduleRefreshBurst = () => {
      scheduleRefresh();
      if (refreshTimeoutRef.current) {
        window.clearTimeout(refreshTimeoutRef.current);
      }
      refreshTimeoutRef.current = window.setTimeout(scheduleRefresh, 140);
    };

    const scheduleRefreshDebounced = () => {
      if (refreshTimeoutRef.current) {
        window.clearTimeout(refreshTimeoutRef.current);
      }
      refreshTimeoutRef.current = window.setTimeout(scheduleRefresh, 120);
    };

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.35,
    });

    lenisRef.current = lenis;
    window.__lenis = lenis;
    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);
    window.addEventListener("load", scheduleRefreshBurst);
    window.addEventListener("resize", scheduleRefreshDebounced);
    window.addEventListener("app:layout-updated", scheduleRefreshDebounced);
    scheduleRefreshBurst();

    return () => {
      window.removeEventListener("load", scheduleRefreshBurst);
      window.removeEventListener("resize", scheduleRefreshDebounced);
      window.removeEventListener("app:layout-updated", scheduleRefreshDebounced);
      if (refreshRafRef.current) {
        cancelAnimationFrame(refreshRafRef.current);
      }
      if (refreshTimeoutRef.current) {
        window.clearTimeout(refreshTimeoutRef.current);
      }
      gsap.ticker.remove(raf);
      lenis.off?.("scroll", ScrollTrigger.update);
      if (window.__lenis === lenis) {
        delete window.__lenis;
      }
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    if (isIntroActive) {
      root.style.overflow = "hidden";
      body.style.overflow = "hidden";
      lenisRef.current?.stop();
      return () => {
        root.style.overflow = "";
        body.style.overflow = "";
      };
    }

    root.style.overflow = "";
    body.style.overflow = "";
    lenisRef.current?.start();
    emitLayoutUpdated();

    return () => {
      root.style.overflow = "";
      body.style.overflow = "";
    };
  }, [isIntroActive]);

  return (
    <>
      <PageTransition onComplete={() => setIsIntroActive(false)} />
      <MagneticCursor />
      <ScrollProgress />
      <EasterEgg />
      <BackToTop />
      <div className="noise-overlay" />
      <main className="relative bg-bg-primary min-h-screen text-text-primary font-body">
        <NavbarMain />
        <HeroMain />

        <Suspense fallback={<LoadingDots />}>
          <AboutAndSkills />
          <ProjectsAndExperience />
          <CertAndContact />
          <LazyContentReady />
        </Suspense>
      </main>
    </>
  );
}

export default App;
