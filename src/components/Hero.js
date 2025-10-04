import React from 'react';
// Placez votre photo dans src/assets/
// import profilePic from '../assets/votre-photo.jpg'; 

const Hero = () => {
  return (
    <section id="hero" className="bg-gray-100 min-h-screen flex items-center">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        
        {/* Texte de présentation */}
        <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            GHRIB ZAKARIA
          </h1>
          <p className="text-xl text-indigo-600 font-semibold mb-8">
            Futur ingénieur en Génie Informatique 
          </p>
          <p className="text-gray-600 mb-8 max-w-lg">
            Motivé et proactif, je suis prêt à m'investir dans des projets innovants. 
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://github.com/zakariaghrib" target="_blank" rel="noopener noreferrer" className="bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-300 shadow-lg">
              Mon GitHub
            </a>
            <a href="#contact" className="bg-white text-indigo-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-200 transition duration-300 border border-indigo-600 shadow-lg">
              Me Contacter
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/3">
          {/* Remplacez 'path/to/your/image.jpg' par le chemin de votre photo */}
          {/* <img src={profilePic} alt="Zakaria Ghrib" className="rounded-full shadow-2xl mx-auto w-64 h-64 md:w-80 md:h-80 object-cover" /> */}
          <div className="rounded-full shadow-2xl mx-auto w-64 h-64 md:w-80 md:h-80 bg-gray-300 flex items-center justify-center text-gray-500">
            Votre Photo Ici
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;