import React from 'react';

const About = () => {
  return (
    <section id="à-propos" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-500" data-aos="fade-up">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">À Propos de Moi</h2>
        <div className="w-24 h-1 bg-indigo-600 mx-auto mb-8"></div>
        <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          En tant que futur ingénieur en génie informatique , je possède de solides compétences en développement full-stack, avec une expertise particulière dans la stack MERN (MongoDB, Express.js, React.js, Node.js). Mon expérience comprend la gestion du cycle de vie complet du développement d'applications , comme l'illustre la création d'un système de gestion scolaire de A à Z. Motivé, proactif et doté d'une forte capacité à résoudre les problèmes , je suis prêt à m'investir dans des projets innovants et à collaborer efficacement en équipe pour optimiser la performance des applications.
        </p>
      </div>
    </section>
  );
};

export default About;