import React from 'react';

// Données des compétences tirées du CV
const technicalSkills = {
  "Backend": ["PHP (Laravel)", "Node.js"], // [cite: 7]
  "Frontend": ["Reactjs", "HTML5", "CSS3", "Bootstrap"], // [cite: 8]
  "Base de données": ["PostgreSQL", "MySQL", "MongoDB", "SQL Server"], // [cite: 9]
  "Modélisation & Conception": ["UML", "Merise"], // [cite: 10]
  "Systèmes d'exploitation": ["Windows", "Linux"], // [cite: 11]
  "Cloud et DevOps": ["Amazon Web Services (AWS)", "Docker"] // [cite: 12]
};

const professionalSkills = [
  "Résolution de problèmes", // [cite: 39]
  "Travail d'équipe", // [cite: 40]
  "Méthodologie Agile", // [cite: 41]
  "Communication" // [cite: 42]
];

const Skills = () => {
  return (
    <section id="compétences" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Compétences </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mt-6"></div>
        </div>

        {/* Compétences Techniques */}
        {Object.entries(technicalSkills).map(([category, skills]) => (
          <div key={category} className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{category}</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map(skill => (
                <span key={skill} className="bg-indigo-100 text-indigo-800 font-medium py-2 px-4 rounded-full shadow-sm transform hover:scale-105 transition duration-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}

        {/* Compétences Professionnelles */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center md:text-left">Compétences Professionnelles [cite: 38]</h3>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {professionalSkills.map(skill => (
              <span key={skill} className="bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-full shadow-sm transform hover:scale-105 transition duration-300">
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;