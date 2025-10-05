import React from 'react';
import Projects from '../components/Projects';
import ThemeToggle from '../components/ThemeToggle'; // Importer le bouton
import { Link } from 'react-router-dom';

const ProjectsPage = () => {
  return (
    // On ajoute les classes pour le mode sombre ici
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-500">
      <header className="bg-white shadow-md fixed w-full top-0 z-10 dark:bg-gray-800 dark:border-b dark:border-gray-700">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-lg font-bold text-gray-800 dark:text-white hover:text-indigo-600">
            &larr; Retour à l'accueil
          </Link>
          {/* On ajoute le bouton ici */}
          <ThemeToggle />
        </div>
      </header>
      <main className="pt-20"> {/* Ajoute de l'espace pour ne pas être sous le header fixe */}
        <Projects />
      </main>
    </div>
  );
};

export default ProjectsPage;