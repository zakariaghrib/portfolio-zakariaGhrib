import React from 'react';
// Icônes pour le travail et l'éducation
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

// On sépare les données pour plus de clarté
const experiences = [
  {
    icon: <FaBriefcase />,
    date: "Juil 2025 - aujourd'hui",
    title: "Full-stack Developer",
    company: "Ark-x Talent Solutions",
    description: [
      "Développement et maintenance d'applications web en React.js et Node.js.",
      "Gestion du cycle de vie complet du développement, de la conception à la mise en production.",
      "Collaboration en équipe pour optimiser la performance des applications."
    ]
  }
];

// Vous pouvez ajouter vos formations ici
const education = [
    {
      icon: <FaGraduationCap />,
      date: "2023 - en cours",
      title: "Cycle d'Ingénierie Informatique et Réseaux",
      company: "SUPMTI",
      description: ["Option Génie Informatique."]
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
        {/* Ligne verticale */}
        <div className="absolute left-5 top-5 h-full w-px bg-gray-300"></div>
        {/* Icône */}
        <div className="absolute left-0 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white">
            {item.icon}
        </div>
        <div className="pl-4">
            <p className="mb-1 text-sm font-semibold text-indigo-500">{item.date}</p>
            <h4 className="mb-1.5 text-xl font-bold text-gray-800">{item.title}</h4>
            <h5 className="mb-3 font-semibold text-gray-600">{item.company}</h5>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
                {item.description.map((desc, index) => <li key={index}>{desc}</li>)}
            </ul>
        </div>
    </div>
);

const Experience = () => {
  return (
    <section id="expérience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Mon Parcours</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
                <h3 className="text-2xl font-bold mb-8 text-center md:text-left">Expérience Professionnelle</h3>
                {experiences.map((item, index) => <ExperienceItem key={index} item={item} />)}
            </div>
            <div>
                <h3 className="text-2xl font-bold mb-8 text-center md:text-left">Formation</h3>
                {education.map((item, index) => <ExperienceItem key={index} item={item} />)}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;