import ScrambleText from "../ScrambleText";
import { scrollToSection } from "../../lib/scroll";
import { navigationLinks, navigationOffset } from "../../lib/navigation";

const FooterMain = () => {
  return (
    <footer className="border-t border-border-subtle">
      <div className="section-padding-sm max-container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Logo */}
          <span className="font-display text-lg text-text-primary tracking-tight">
            RB<span className="text-accent">.</span>
          </span>

          {/* Links */}
          <ul className="flex flex-wrap gap-6 text-sm text-text-secondary">
            {navigationLinks.map((item) => (
              <li key={item.section}>
                <button
                  type="button"
                  onClick={() =>
                    scrollToSection(item.section, { offset: navigationOffset })
                  }
                  className="hover:text-text-primary transition-colors hover-line"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 h-[1px] bg-border-subtle" />

        <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-xs text-text-tertiary">
            &copy; 2026 Ramy Bezriche. All rights reserved.
          </p>
          <ScrambleText
            text="Crafted with precision."
            className="text-xs text-text-tertiary cursor-default"
          />
        </div>
      </div>
    </footer>
  );
};

export default FooterMain;
