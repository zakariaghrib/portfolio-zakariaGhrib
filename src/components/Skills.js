import React from 'react';
// On importe TOUTES les icônes depuis 'react-icons/fa' pour garantir la stabilité
import { 
    FaReact, FaNodeJs, FaPhp, FaLaravel, FaHtml5, FaCss3Alt, FaBootstrap, 
    FaDatabase, FaAws, FaDocker, FaWindows, FaLinux, 
    FaBrain, FaUsers, FaRegHandshake, FaBullhorn
} from 'react-icons/fa';

// On utilise les icônes 'FaDatabase' comme substitut générique pour les bases de données
const technicalSkills = [
  { name: 'React.js', icon: <FaReact size={50} className="text-blue-400" /> },
  { name: 'Node.js', icon: <FaNodeJs size={50} className="text-green-500" /> },
  { name: 'PHP', icon: <FaPhp size={50} className="text-indigo-400" /> },
  { name: 'Laravel', icon: <FaLaravel size={50} className="text-red-500" /> },
  { name: 'PostgreSQL', icon: <FaDatabase size={50} className="text-blue-600" /> },
  { name: 'MySQL', icon: <FaDatabase size={50} className="text-blue-500" /> },
  { name: 'MongoDB', icon: <FaDatabase size={50} className="text-green-600" /> },
  { name: 'SQL Server', icon: <FaDatabase size={50} className="text-red-600" /> },
  { name: 'HTML5', icon: <FaHtml5 size={50} className="text-orange-500" /> },
  { name: 'CSS3', icon: <FaCss3Alt size={50} className="text-blue-500" /> }, // Note: FaCss3Alt est plus courant
  { name: 'Bootstrap', icon: <FaBootstrap size={50} className="text-purple-600" /> },
  { name: 'AWS', icon: <FaAws size={50} className="text-orange-400" /> },
  { name: 'Docker', icon: <FaDocker size={50} className="text-blue-500" /> },
  { name: 'Windows', icon: <FaWindows size={50} className="text-blue-700" /> },
  { name: 'Linux', icon: <FaLinux size={50} className="text-gray-800" /> },
];

const professionalSkills = [
  { name: 'Résolution de problèmes', icon: <FaBrain size={40} className="text-indigo-500" /> },
  { name: 'Travail d\'équipe', icon: <FaUsers size={40} className="text-indigo-500" /> },
  { name: 'Méthodologie Agile', icon: <FaRegHandshake size={40} className="text-indigo-500" /> },
  { name: 'Communication', icon: <FaBullhorn size={40} className="text-indigo-500" /> },
];

const Skills = () => {
  return (
    <section id="compétences" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Mes Compétences</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mt-6"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Voici les technologies et les méthodologies avec lesquelles j'aime travailler et développer des solutions.
          </p>
        </div>

        {/* Grille des Compétences Techniques */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
          {technicalSkills.map(skill => (
            <div key={skill.name} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center text-center transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
              {skill.icon}
              <p className="mt-4 font-semibold text-gray-700">{skill.name}</p>
            </div>
          ))}
        </div>
        
        {/* Section Compétences Professionnelles */}
        <div className="text-center mb-16">
            <h3 className="text-3xl font-bold">Compétences Professionnelles</h3>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mt-6"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {professionalSkills.map(skill => (
            <div key={skill.name} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center text-center transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
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