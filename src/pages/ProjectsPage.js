import React from 'react';
import Projects from '../components/Projects'; // Le composant avec TOUS vos projets
import { Link } from 'react-router-dom';

const ProjectsPage = () => {
  return (
    <div className="bg-gray-50 pt-20"> {/* pt-20 pour l'espace sous le header */}
      <header className="bg-white shadow-md fixed w-full top-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <Link to="/" className="text-xl font-bold text-gray-800 hover:text-indigo-600">
            &larr; Retour à l'accueil
          </Link>
        </div>
      </header>
      <main>
        <Projects />
      </main>
    </div>
  );
};

export default ProjectsPage;