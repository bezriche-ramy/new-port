import { lazy, Suspense, useState, useEffect, useRef } from "react";
import NavbarMain from "./components/navbar/NavbarMain";
import HeroMain from "./components/heroSection/HeroMain";
import HeroGradient from "./components/heroSection/HeroGradient";
import MagneticCursor from "./components/MagneticCursor";
import PageTransition from "./components/PageTransition";

import LoadingDots from "./components/LoadingDots";
import { ThemeProvider } from "./context/ThemeContext";
import Lenis from 'lenis';

// Lazy load components in chunks for better performance
const AboutAndSkills = lazy(() =>
  Promise.all([
    import("./components/aboutMeSection/AboutMeMain"),
    import("./components/skillsSection/SkillsMain")
  ]).then(([about, skills]) => ({
    default: () => (
      <>
        <about.default />
        <skills.default />
      </>
    )
  }))
);

const ProjectsAndExperience = lazy(() =>
  Promise.all([
    import("./components/experienceSection/ExperienceMain"),
    import("./components/projectsSection/ProjectsMain")
  ]).then(([exp, proj]) => ({
    default: () => (
      <>
        <exp.default />
        <proj.default />
      </>
    )
  }))
);

const CertAndContact = lazy(() =>
  Promise.all([
    import("./components/certificateSection/CertificateMain"),
    import("./components/contactMeSection/ContactMeMain"),
    import("./components/footer/FooterMain")
  ]).then(([cert, contact, footer]) => ({
    default: () => (
      <>
        <cert.default />
        <contact.default />
        <footer.default />
      </>
    )
  }))
);

function App() {
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const lenisRef = useRef(null);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);

    const listener = (e) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
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
    <ThemeProvider>
      <PageTransition />
      <MagneticCursor />
      <main className="font-body text-black relative overflow-hidden bg-void min-h-screen">
        <div className="relative z-10">
          <NavbarMain />
          <HeroMain />
          <HeroGradient />

          <Suspense fallback={<LoadingDots />}>
            <div className="section-background">
              <AboutAndSkills />
              <ProjectsAndExperience />
              <CertAndContact />
            </div>
          </Suspense>
        </div>
      </main>
    </ThemeProvider>
  );
}

export default App;
