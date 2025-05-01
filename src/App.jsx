import { lazy, Suspense } from "react";
import NavbarMain from "./components/navbar/NavbarMain";
import HeroMain from "./components/heroSection/HeroMain";
import HeroGradient from "./components/heroSection/HeroGradient";
import SubHeroMain from "./components/subHeroSection/SubHeroMain";
import LoadingDots from "./components/LoadingDots";

// Lazy load non-critical components
const AboutMeMain = lazy(() => import("./components/aboutMeSection/AboutMeMain"));
const SkillsMain = lazy(() => import("./components/skillsSection/SkillsMain"));
const SubSkills = lazy(() => import("./components/skillsSection/SubSkills"));
const ExperienceMain = lazy(() => import("./components/experienceSection/ExperienceMain"));
const ProjectsMain = lazy(() => import("./components/projectsSection/ProjectsMain"));
const CertificateMain = lazy(() => import("./components/certificateSection/CertificateMain"));
const ContactMeMain = lazy(() => import("./components/contactMeSection/ContactMeMain"));
const FooterMain = lazy(() => import("./components/footer/FooterMain"));

function App() {
  return (
    <main className="font-body text-accent relative overflow-hidden bg-background min-h-screen">
      {/* Reduced number of binary rain layers */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="binary-rain"></div>
        <div className="binary-rain" style={{ left: '50%', animationDelay: '-10s' }}></div>
      </div>

      {/* Single matrix background effect */}
      <div className="fixed inset-0 pointer-events-none matrix-bg opacity-10"></div>

      {/* Main content */}
      <div className="relative z-10">
        <NavbarMain />
        <HeroMain />
        <HeroGradient />
        <SubHeroMain />
        
        <Suspense fallback={<LoadingDots />}>
          <AboutMeMain />
          <SkillsMain />
          <SubSkills />
          <ExperienceMain />
          <ProjectsMain />
          <CertificateMain />
          <ContactMeMain />
          <FooterMain />
        </Suspense>
      </div>
    </main>
  );
}

export default App;
