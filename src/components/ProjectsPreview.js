import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const previewProjects = [
  {
    title: "Système de Gestion d'une École",
    description: "Une plateforme de gestion scolaire complète conçue pour digitaliser l'environnement éducatif.",
    image: "/gestion-ecole.png"
  },
  {
    title: "Plateforme RH de Recrutement",
    description: "Une plateforme de recrutement complète pour gérer l'ensemble du cycle de vie du recrutement.",
    image: "/plateforme-rh.png"
  },
];

const ProjectsPreview = () => {
  return (
    <section id="projets-preview" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-500" data-aos="fade-up">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Mes Projets Récents</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mt-6"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {previewProjects.map((project) => (
            <div key={project.title} className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:-translate-y-2 transition-transform duration-300">
              <img src={project.image} alt={project.title} className="h-56 w-full object-cover bg-gray-200 dark:bg-gray-600" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm h-20">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <Link to="/projects" className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-indigo-700 transition duration-300 shadow-lg text-lg inline-flex items-center">
            Voir tous les projets <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;