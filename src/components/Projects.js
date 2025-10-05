import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "Système de Gestion d'une École",
    description:
      "Une plateforme de gestion scolaire complète conçue pour digitaliser l'environnement éducatif. Elle offre des tableaux de bord distincts pour les administrateurs, les professeurs et les étudiants, permettant une gestion centralisée des cours, des inscriptions, et du suivi des présences.",
    tags: ["React", "Node.js", "MongoDB", "Material-UI", "JWT"], // Technologies mises à jour
    githubLink: "https://github.com/zakariaghrib/school-management-system",
    liveLink: "#",
    image: "/gestion-ecole.png",
  },
  {
    title: "Plateforme RH de Recrutement",
    description:
      "Une plateforme de recrutement complète conçue pour les RH. Elle permet de gérer l'ensemble du cycle de vie du recrutement, de la publication des offres d'emploi au suivi des candidatures. Le système intègre une authentification sécurisée via JWT.",
    tags: ["MERN", "Express", "JWT Auth", "Framer Motion"],
    githubLink: "https://github.com/zakariaghrib/mon-projet-recrutement",
    liveLink: "#",
    image: "/plateforme-rh.png",
  },
  {
    title: "Application Météo en React",
    description:
      "Une application météo dynamique construite avec React, utilisant l'API OpenWeatherMap pour fournir des prévisions en temps réel. L'interface permet de rechercher des villes et d'obtenir des informations détaillées.",
    tags: ["React", "API", "TailwindCSS"],
    githubLink: "https://github.com/zakariaghrib/react-app-meteo",
    liveLink: "#",
    image: "/meteo.png",
  },
];

// ... Le reste du fichier ne change pas
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Projects = () => {
    return (
      <section id="projets" className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white"
            >
              Mes <span className="text-indigo-600">Projets</span>
            </motion.h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Une sélection de mes projets les plus récents, combinant créativité,
              performance et bonnes pratiques du développement web.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group relative border border-gray-100 dark:border-gray-700"
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="h-56 w-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center space-x-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-400 transform hover:scale-125 transition-transform duration-300">
                      <FaGithub size={30} />
                    </a>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-400 transform hover:scale-125 transition-transform duration-300">
                      <FiExternalLink size={30} />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 min-h-[100px] leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs font-semibold py-1 px-3 bg-indigo-100 text-indigo-800 dark:bg-gray-700 dark:text-indigo-300 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;