import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

// ON N'IMPORTE PAS L'IMAGE ICI

const projectData = [
  {
    title: "Système de gestion d'une école",
    description: "Application web complète pour la gestion des étudiants, professeurs, présences, et modules.",
    tags: ["React", "Node.js", "MySQL", "TailwindCSS"],
    githubLink: "https://github.com/zakariaghrib",
    liveLink: "#",
    // IMPORTANT : On met le chemin exact depuis la racine du site
    // Le "/" au début dit au navigateur de chercher dans le dossier "public"
    image: "/gestion-ecole.png" 
  },
];

const Projects = () => {
  return (
    <section id="projets" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Mes Projets</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mt-6"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project) => (
            <div key={project.title} className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <div className="relative">
                {/* La balise img va maintenant trouver l'image */}
                <img src={project.image} alt={project.title} className="h-56 w-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center space-x-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-400 transform hover:scale-110 transition-transform duration-300">
                    <FaGithub size={32} />
                  </a>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-400 transform hover:scale-110 transition-transform duration-300">
                    <FiExternalLink size={32} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 h-20">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-semibold py-1 px-3 bg-indigo-100 text-indigo-800 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;