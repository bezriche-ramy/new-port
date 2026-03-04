import { Link } from "react-scroll";

const links = [
  { name: "About", section: "about" },
  { name: "Skills", section: "skills" },
  { name: "Experience", section: "experience" },
  { name: "Projects", section: "projects" },
  { name: "Contact", section: "contact" },
];

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
            {links.map((item) => (
              <li key={item.section}>
                <Link
                  to={item.section}
                  smooth
                  duration={450}
                  offset={-80}
                  className="hover:text-text-primary transition-colors hover-line"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 h-[1px] bg-border-subtle" />

        <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-xs text-text-tertiary">
            &copy; 2026 Ramy Bezriche. All rights reserved.
          </p>
          <p className="text-xs text-text-tertiary">
            Crafted with precision.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterMain;
