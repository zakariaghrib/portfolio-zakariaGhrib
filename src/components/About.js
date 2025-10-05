import React from 'react';

const About = () => {
  return (
    <section id="à-propos" className="py-20 bg-white dark:bg-gray-800" data-aos="fade-up">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6 dark:text-white">À Propos de Moi</h2>
        <div className="w-24 h-1 bg-indigo-600 mx-auto mb-8"></div>
        <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          Futur ingénieur en génie informatique, j'ai de solides compétences en gestion de projet, en bases de données et en plusieurs langages de programmation.
        </p>
      </div>
    </section>
  );
};

export default About;