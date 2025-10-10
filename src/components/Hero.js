import React from 'react';
import { FaPhone, FaEnvelope, FaLinkedin, FaDownload, FaGithub } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <section id="hero" className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center transition-colors duration-500">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between pt-24 md:pt-0"> {/* Ajout d'un padding-top pour mobile */}
        <div className="md:w-3/5 mb-10 md:mb-0 text-center md:text-left">
          {/* ---- MODIFICATION ICI ---- */}
          {/* J'ai ajouté sm:text-5xl pour une meilleure transition de taille */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            GHRIB ZAKARIA
          </h1>
          
          {/* ---- MODIFICATION ICI ---- */}
          {/* J'ai remplacé la hauteur fixe par une hauteur minimale pour plus de flexibilité */}
          <div className="text-xl md:text-2xl text-indigo-600 font-semibold mb-6 min-h-[60px] flex items-center justify-center md:justify-start">
            <Typewriter
              options={{
                strings: ['Futur ingénieur en Génie Informatique', 'Développeur Full-Stack'],
                autoStart: true,
                loop: true,
                delay: 75,
              }}
            />
          </div>

          <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-xl">
            Motivé et proactif, je suis prêt à m'investir dans des projets innovants.
          </p>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 mb-8">
            <a href="tel:0679412403" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300 flex items-center">
              <FaPhone className="mr-2" /> 0679412403
            </a>
            <a href="mailto:zikoghb12@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300 flex items-center">
              <FaEnvelope className="mr-2" /> zikoghb12@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/zakaria-ghrib-164169273" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300 flex items-center">
              <FaLinkedin className="mr-2" /> LinkedIn
            </a>
            <a href="https://github.com/zakariaghrib" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300 flex items-center">
              <FaGithub className="mr-2" /> GitHub
            </a>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a 
              href="/GHRIB-ZAKARIA-CV-1 (2).pdf" 
              download="GHRIB-ZAKARIA-CV.pdf"
              className="bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-300 shadow-lg flex items-center"
            >
              <FaDownload className="mr-2" /> Télécharger CV
            </a>
            <a href="#contact" className="bg-white text-indigo-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-200 transition duration-300 border border-indigo-600 shadow-lg dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
              Me Contacter
            </a>
          </div>
        </div>
        <div className="md:w-2/5 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur-md opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <img 
              src="/photo-profil.jpg" 
              alt="Zakaria Ghrib" 
              className="relative rounded-full shadow-2xl mx-auto w-64 h-64 md:w-80 md:h-80 object-cover" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;