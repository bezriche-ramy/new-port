import { lazy, Suspense, useState, useEffect } from "react";
import NavbarMain from "./components/navbar/NavbarMain";
import HeroMain from "./components/heroSection/HeroMain";
import HeroGradient from "./components/heroSection/HeroGradient";

import LoadingDots from "./components/LoadingDots";
import { ThemeProvider } from "./context/ThemeContext";

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

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);

    const listener = (e) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  return (
    <ThemeProvider>
      <main className="font-body text-gray-900 dark:text-gray-100 relative overflow-hidden bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
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
