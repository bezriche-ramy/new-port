import { Link } from "react-scroll";
import FooterLine from "./FooterLine";

const links = [
  { name: "A propos", section: "about" },
  { name: "Competences", section: "skills" },
  { name: "Experience", section: "experience" },
  { name: "Projets", section: "projects" },
  { name: "Contact", section: "contact" },
];

const FooterMain = () => {
  return (
    <footer className="px-6 md:px-8 pb-10 pt-8">
      <div className="max-w-6xl mx-auto">
        <FooterLine />

        <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <p className="font-heading text-xl text-text-primary">Ramy Bezriche</p>

          <ul className="flex flex-wrap gap-4 md:gap-5 text-sm text-text-secondary">
            {links.map((item) => (
              <li key={item.section}>
                <Link
                  to={item.section}
                  smooth
                  duration={450}
                  offset={-110}
                  className="hover:text-text-primary transition-colors cursor-pointer"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-6 text-xs md:text-sm text-text-secondary">Copyright 2026 Ramy Bezriche. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterMain;
