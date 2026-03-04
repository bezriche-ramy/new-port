import { lazy, Suspense, useEffect, useRef } from "react";
import NavbarMain from "./components/navbar/NavbarMain";
import HeroMain from "./components/heroSection/HeroMain";
import MagneticCursor from "./components/MagneticCursor";
import PageTransition from "./components/PageTransition";
import LoadingDots from "./components/LoadingDots";
import Lenis from "lenis";

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

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <PageTransition />
      <MagneticCursor />
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
