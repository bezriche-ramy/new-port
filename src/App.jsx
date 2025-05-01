import { lazy, Suspense, useState, useEffect } from "react";
import NavbarMain from "./components/navbar/NavbarMain";
import HeroMain from "./components/heroSection/HeroMain";
import HeroGradient from "./components/heroSection/HeroGradient";
import SubHeroMain from "./components/subHeroSection/SubHeroMain";
import LoadingDots from "./components/LoadingDots";

// Lazy load components in chunks for better performance
const AboutAndSkills = lazy(() => 
  Promise.all([
    import("./components/aboutMeSection/AboutMeMain"),
    import("./components/skillsSection/SkillsMain"),
    import("./components/skillsSection/SubSkills")
  ]).then(([about, skills, subSkills]) => ({
    default: () => (
      <>
        <about.default />
        <skills.default />
        <subSkills.default />
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
    <main className="font-body text-accent relative overflow-hidden bg-background min-h-screen">
      {/* Removed global binary-rain overlays for performance */}
      <div className="fixed inset-0 pointer-events-none matrix-bg opacity-5" style={{ animation: 'none' }}></div>
      <div className="relative z-10">
        <NavbarMain />
        <HeroMain />
        <HeroGradient />
        <SubHeroMain />
        
        <Suspense fallback={<LoadingDots />}>
          <AboutAndSkills />
          <ProjectsAndExperience />
          <CertAndContact />
        </Suspense>
      </div>
    </main>
  );
}

export default App;
