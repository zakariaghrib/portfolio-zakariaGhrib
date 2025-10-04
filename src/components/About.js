import React from 'react';

const About = () => {
  return (
    <section id="à-propos" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">À Propos de Moi [cite: 3]</h2>
        <div className="w-24 h-1 bg-indigo-600 mx-auto mb-8"></div>
        <p className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed">
          Futur ingénieur en génie informatique, j'ai de solides compétences en gestion de projet, en bases de données et en plusieurs langages de programmation, avec des certifications en Node.js, Express.js, MongoDB et JavaScript. [cite: 4]
        </p>
        <p className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed mt-4">
          Motivé et proactif, je suis prêt à m'investir dans des projets innovants. [cite: 5]
        </p>
      </div>
    </section>
  );
};

export default About;