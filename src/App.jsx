import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import ContactMeMain from "./components/contactMeSection/ContactMeMain";
import ExperienceMain from "./components/experienceSection/ExperienceMain";
import FooterMain from "./components/footer/FooterMain";
import HeroGradient from "./components/heroSection/HeroGradient";
import HeroMain from "./components/heroSection/HeroMain";
import NavbarMain from "./components/navbar/NavbarMain";
import ProjectsMain from "./components/projectsSection/ProjectsMain";
import SkillsMain from "./components/skillsSection/SkillsMain";
import SubSkills from "./components/skillsSection/SubSkills";
import SubHeroMain from "./components/subHeroSection/SubHeroMain";
import CertificateMain from "./components/certificateSection/CertificateMain";

function App() {
  return (
    <main className="font-body text-accent relative overflow-hidden bg-background min-h-screen">
      {/* Binary rain container */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="binary-rain"></div>
        <div className="binary-rain" style={{ left: '25%', animationDelay: '-5s' }}></div>
        <div className="binary-rain" style={{ left: '50%', animationDelay: '-10s' }}></div>
        <div className="binary-rain" style={{ left: '75%', animationDelay: '-15s' }}></div>
      </div>

      {/* Matrix scan effect */}
      <div className="fixed inset-0 pointer-events-none matrix-bg opacity-20"></div>

      {/* Main content */}
      <div className="relative z-10">
        <NavbarMain />
        <HeroMain />
        <HeroGradient />
        <SubHeroMain />
        <AboutMeMain />
        <SkillsMain />
        <SubSkills />
        <ExperienceMain />
        <ProjectsMain />
        <CertificateMain />
        <ContactMeMain />
        <FooterMain />
      </div>
    </main>
  );
}

export default App;
