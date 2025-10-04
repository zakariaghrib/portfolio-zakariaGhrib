import React, { useState, useMemo } from 'react';
import {
    FaReact, FaNodeJs, FaPhp, FaLaravel, FaHtml5, FaCss3Alt, FaBootstrap,
    FaDatabase, FaAws, FaDocker, FaWindows, FaLinux, FaBrain, FaUsers,
    FaRegHandshake, FaBullhorn
} from 'react-icons/fa';

// ÉTAPE 1 : On ajoute une catégorie à chaque compétence
const allSkills = [
  // Frontend
  { name: 'React.js', icon: <FaReact size={50} className="text-blue-400" />, category: 'Frontend' },
  { name: 'HTML5', icon: <FaHtml5 size={50} className="text-orange-500" />, category: 'Frontend' },
  { name: 'CSS3', icon: <FaCss3Alt size={50} className="text-blue-500" />, category: 'Frontend' },
  { name: 'Bootstrap', icon: <FaBootstrap size={50} className="text-purple-600" />, category: 'Frontend' },
  // Backend
  { name: 'Node.js', icon: <FaNodeJs size={50} className="text-green-500" />, category: 'Backend' },
  { name: 'PHP', icon: <FaPhp size={50} className="text-indigo-400" />, category: 'Backend' },
  { name: 'Laravel', icon: <FaLaravel size={50} className="text-red-500" />, category: 'Backend' },
  // Base de données
  { name: 'PostgreSQL', icon: <FaDatabase size={50} className="text-blue-600" />, category: 'Base de données' },
  { name: 'MySQL', icon: <FaDatabase size={50} className="text-blue-500" />, category: 'Base de données' },
  { name: 'MongoDB', icon: <FaDatabase size={50} className="text-green-600" />, category: 'Base de données' },
  { name: 'SQL Server', icon: <FaDatabase size={50} className="text-red-600" />, category: 'Base de données' },
  // Outils & DevOps
  { name: 'AWS', icon: <FaAws size={50} className="text-orange-400" />, category: 'Outils & DevOps' },
  { name: 'Docker', icon: <FaDocker size={50} className="text-blue-500" />, category: 'Outils & DevOps' },
  { name: 'Linux', icon: <FaLinux size={50} className="text-gray-800" />, category: 'Outils & DevOps' },
];

const professionalSkills = [
  { name: 'Résolution de problèmes', icon: <FaBrain size={40} className="text-indigo-500" /> },
  { name: 'Travail d\'équipe', icon: <FaUsers size={40} className="text-indigo-500" /> },
  { name: 'Méthodologie Agile', icon: <FaRegHandshake size={40} className="text-indigo-500" /> },
  { name: 'Communication', icon: <FaBullhorn size={40} className="text-indigo-500" /> },
];

// Noms des filtres
const filters = ['Tous', 'Frontend', 'Backend', 'Base de données', 'Outils & DevOps'];

const Skills = () => {
  // ÉTAPE 2 : On utilise un "état" pour garder en mémoire le filtre actif
  const [activeFilter, setActiveFilter] = useState('Tous');

  // ÉTAPE 3 : On filtre les compétences à afficher en fonction du filtre actif
  const filteredSkills = useMemo(() => {
    if (activeFilter === 'Tous') {
      return allSkills;
    }
    return allSkills.filter(skill => skill.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="compétences" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Mes Compétences</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mt-6"></div>
        </div>

        {/* ÉTAPE 4 : La barre de filtre */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`py-2 px-6 font-semibold rounded-full transition-colors duration-300 ${
                activeFilter === filter
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-indigo-100'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grille des Compétences Techniques filtrées */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
          {filteredSkills.map(skill => (
            <div key={skill.name} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center text-center transform hover:-translate-y-2 transition-transform duration-300">
              {skill.icon}
              <p className="mt-4 font-semibold text-gray-700">{skill.name}</p>
            </div>
          ))}
        </div>
        
        {/* Section Compétences Professionnelles (ne change pas) */}
        <div className="text-center mb-16">
            <h3 className="text-3xl font-bold">Compétences Professionnelles</h3>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mt-6"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {professionalSkills.map(skill => (
            <div key={skill.name} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center text-center transform hover:-translate-y-2 transition-transform duration-300">
                {skill.icon}
                <p className="mt-4 font-semibold text-gray-700">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;