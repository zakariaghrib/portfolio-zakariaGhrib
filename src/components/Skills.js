import React, { useState, useMemo } from 'react';
import {
    FaReact, FaNodeJs, FaServer, FaHtml5, FaCss3Alt, FaBootstrap,
    FaDatabase, FaAws, FaDocker, FaLinux, FaBrain, FaUsers, FaProjectDiagram,
    FaRegHandshake, FaBullhorn, FaCheckCircle, FaWindows
} from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si'; // Importer l'icône Tailwind

const allSkills = [
  // Frontend
  { name: 'React.js', icon: <FaReact size={50} className="text-blue-400" />, category: 'Frontend' },
  { name: 'HTML5', icon: <FaHtml5 size={50} className="text-orange-500" />, category: 'Frontend' },
  { name: 'CSS3', icon: <FaCss3Alt size={50} className="text-blue-500" />, category: 'Frontend' },
  { name: 'Bootstrap', icon: <FaBootstrap size={50} className="text-purple-600" />, category: 'Frontend' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={50} className="text-teal-400" />, category: 'Frontend' }, // Ajouté
  // Backend
  { name: 'Node.js', icon: <FaNodeJs size={50} className="text-green-500" />, category: 'Backend' },
  { name: 'Express.js', icon: <FaServer size={50} className="text-gray-600" />, category: 'Backend' },
  // Base de données
  { name: 'PostgreSQL', icon: <FaDatabase size={50} className="text-blue-600" />, category: 'Base de données' },
  { name: 'MySQL', icon: <FaDatabase size={50} className="text-blue-500" />, category: 'Base de données' },
  { name: 'MongoDB', icon: <FaDatabase size={50} className="text-green-600" />, category: 'Base de données' },
  { name: 'SQL Server', icon: <FaDatabase size={50} className="text-red-600" />, category: 'Base de données' },
  // Conception
  { name: 'UML', icon: <FaProjectDiagram size={50} className="text-yellow-500" />, category: 'Conception' },
  { name: 'Merise', icon: <FaProjectDiagram size={50} className="text-teal-500" />, category: 'Conception' },
  // Cloud & DevOps
  { name: 'AWS', icon: <FaAws size={50} className="text-orange-400" />, category: 'Cloud & DevOps' },
  { name: 'Docker', icon: <FaDocker size={50} className="text-blue-500" />, category: 'Cloud & DevOps' },
  // Systèmes
  { name: 'Linux', icon: <FaLinux size={50} className="text-gray-800" />, category: 'Systèmes' },
  { name: 'Windows', icon: <FaWindows size={50} className="text-blue-700" />, category: 'Systèmes' }, // Ajouté
  // Outils
  { name: 'Swagger API', icon: <FaCheckCircle size={50} className="text-green-400" />, category: 'Outils' },
  { name: 'Postman', icon: <FaCheckCircle size={50} className="text-orange-500" />, category: 'Outils' },
  { name: 'ClickUp', icon: <FaCheckCircle size={50} className="text-purple-500" />, category: 'Outils' },
];

const professionalSkills = [
    { name: 'Résolution de problèmes', icon: <FaBrain size={40} className="text-indigo-500" /> },
    { name: 'Travail d\'équipe', icon: <FaUsers size={40} className="text-indigo-500" /> },
    { name: 'Méthodologie Agile', icon: <FaRegHandshake size={40} className="text-indigo-500" /> },
    { name: 'Communication', icon: <FaBullhorn size={40} className="text-indigo-500" /> },
];

const filters = ['Tous', 'Frontend', 'Backend', 'Base de données', 'Conception', 'Cloud & DevOps', 'Systèmes', 'Outils'];

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('Tous');
  const filteredSkills = useMemo(() => {
    if (activeFilter === 'Tous') return allSkills;
    return allSkills.filter(skill => skill.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="compétences" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-500" data-aos="fade-up">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Mes Compétences</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mt-6"></div>
        </div>
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`py-2 px-5 font-semibold rounded-full transition-colors duration-300 text-sm ${
                activeFilter === filter
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-indigo-100 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
          {filteredSkills.map(skill => (
            <div key={skill.name} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center text-center transform hover:-translate-y-2 transition-transform duration-300">
              {skill.icon}
              <p className="mt-4 font-semibold text-gray-700 dark:text-gray-200 text-sm">{skill.name}</p>
            </div>
          ))}
        </div>
        <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Compétences Professionnelles</h3>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mt-6"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {professionalSkills.map(skill => (
            <div key={skill.name} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center text-center transform hover:-translate-y-2 transition-transform duration-300">
                {skill.icon}
                <p className="mt-4 font-semibold text-gray-700 dark:text-gray-200">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;