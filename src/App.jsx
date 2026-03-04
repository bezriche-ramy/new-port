import { lazy, Suspense, useEffect, useRef } from "react";
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

function App() {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;
    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.off?.("scroll", ScrollTrigger.update);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <PageTransition />
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
        </Suspense>
      </main>
    </>
  );
}

export default App;
