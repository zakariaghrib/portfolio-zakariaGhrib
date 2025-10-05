import React from 'react';

const About = () => {
  return (
    <section id="à-propos" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-500" data-aos="fade-up">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">À Propos de Moi</h2>
        <div className="w-24 h-1 bg-indigo-600 mx-auto mb-8"></div>
        <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          [cite_start]Futur ingénieur en génie informatique, j'ai de solides compétences en gestion de projet, en bases de données et en plusieurs langages de programmation, avec des certifications en Node.js, Express.js, MongoDB et JavaScript. [cite: 12] [cite_start]Motivé et proactif, je suis prêt à m'investir dans des projets innovants. [cite: 13]
        </p>
      </div>
    </section>
  );
};

export default About;