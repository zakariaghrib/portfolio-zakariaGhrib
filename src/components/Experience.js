import React from 'react';
import { FaBriefcase, FaGraduationCap, FaCode } from 'react-icons/fa';

const experiences = [
  {
    icon: <FaBriefcase />,
    date: "Juil 2025 - aujourd'hui",
    title: "Full-stack Developer",
    company: "Ark-x Talent Solutions",
    description: [
      "Géré le cycle de vie complet du développement, de la conception à la mise en production.",
      "Collaboré en équipe pour résoudre des problèmes techniques et optimiser la performance des applications.",
      "Technologies: React.js, Node.js, Express.js, MongoDB, Docker, Git, Jest, Swagger"
    ]
  },
  {
    icon: <FaCode />,
    date: "Sept 2025",
    title: "Système de Gestion Scolaire | Projet Full-Stack MERN",
    company: "Projet Académique (SUPMTI)",
    description: [
        "Développement d'une application web complète pour la gestion des notes, étudiants, et classes.",
        "Implémentation d'un système d'authentification sécurisé avec gestion des rôles (Admin, Enseignant, Étudiant).",
        "Création d'un système complet de gestion des notes, de la saisie à la génération de bulletins en PDF.",
        "Technologies: React.js, Node.js, Express, MongoDB, Material-UI, Framer Motion, JWT."
    ]
  }
];

const education = [
    {
      icon: <FaGraduationCap />,
      date: "2023 - en cours",
      title: "Cycle d'ingénieur en systèmes d'information",
      company: "SUPMTI",
      description: []
    },
    {
        icon: <FaGraduationCap />,
        date: "2021 - 2023",
        title: "Technicien Spécialisé en Développement Informatique",
        company: "ESIAM",
        description: []
    }
];

const ExperienceItem = ({ item }) => (
    <div className="relative mb-8 pl-16">
        <div className="absolute left-5 top-5 h-full w-px bg-gray-300 dark:bg-gray-600"></div>
        <div className="absolute left-0 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white">
            {item.icon}
        </div>
        <div className="pl-4">
            <p className="mb-1 text-sm font-semibold text-indigo-500">{item.date}</p>
            <h4 className="mb-1.5 text-xl font-bold text-gray-800 dark:text-white">{item.title}</h4>
            <h5 className="mb-3 font-semibold text-gray-600 dark:text-gray-400">{item.company}</h5>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {item.description.map((desc, index) => <li key={index}>{desc}</li>)}
            </ul>
        </div>
    </div>
);

const Experience = () => {
  return (
    <section id="expérience" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-500" data-aos="fade-up">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Mon Parcours</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mt-6"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
                <h3 className="text-2xl font-bold mb-8 text-center md:text-left text-gray-900 dark:text-white">Expérience & Projets Clés</h3>
                {experiences.map((item, index) => <ExperienceItem key={index} item={item} />)}
            </div>
            <div>
                <h3 className="text-2xl font-bold mb-8 text-center md:text-left text-gray-900 dark:text-white">Formation</h3>
                {education.map((item, index) => <ExperienceItem key={index} item={item} />)}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;