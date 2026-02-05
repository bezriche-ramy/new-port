import React from "react";
import SingleExperience from "./SingleExperience";
import { motion } from "framer-motion";

const experiences = [
  {
    job: "Développeur Web Full Stack (Freelance)",
    company: "À distance",
    date: "Septembre 2025 – Présent",
    responsibilities: [
      "Conception et développement d'applications web performantes et réactives avec Next.js et React.",
      " Intégration d'interfaces utilisateur modernes avec Tailwind CSS (UX fluide et responsive).",
      "Collaboration directe avec les clients pour traduire leurs besoins en solutions techniques.",
      "Optimisation du code pour la sécurité et la rapidité de chargement.",
    ],
  },
  {
    job: "Stagiaire - Département Télécommunications",
    company: "Djezzy, Alger",
    date: "Juillet 2024 – Septembre 2024",
    responsibilities: [
      "Analyse des indicateurs de performance (KPI) pour les connexions LTE, RRC et S1.",
      "Optimisation des performances réseau et mise en place de reporting automatisé.",
      "Surveillance de l'utilisation des PRB (Physical Resource Blocks) et amélioration des systèmes de reporting.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="max-w-4xl mx-auto relative">
      {/* Vertical Timeline Line */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent/50 via-accent to-accent/50 hidden md:block transform -translate-x-1/2 rounded-full"></div>

      {/* Experience Cards */}
      <div className="flex flex-col gap-32 md:block md:space-y-0">
        {experiences.map((experience, index) => (
          <div key={index} className="relative">
            {/* Timeline Dot */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
              viewport={{ once: true }}
              className="absolute left-0 md:left-1/2 top-12 w-6 h-6 bg-accent rounded-full border-4 border-white shadow-lg hidden md:block transform -translate-x-1/2 z-30"
            >
              <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-75"></div>
            </motion.div>

            {/* Card */}
            <div className={`md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:ml-0' : 'md:ml-auto'}`}>
              <SingleExperience experience={experience} index={index} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllExperiences;
