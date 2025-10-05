import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom'; // On renomme Link pour éviter les conflits
import { Link as ScrollLink } from 'react-scroll'; // On importe le Link de react-scroll
import ThemeToggle from './ThemeToggle';
import { HiMenu, HiX } from 'react-icons/hi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Propriétés communes pour les liens de défilement
  const scrollLinkProps = {
    spy: true,
    smooth: true,
    offset: -70, // Pour compenser la hauteur du header fixe
    duration: 500,
    className: "text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300 cursor-pointer",
    activeClass: "text-indigo-600 dark:text-indigo-400" // Style pour le lien actif
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50 dark:bg-gray-800 dark:border-b dark:border-gray-700">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <RouterLink to="/" className="text-xl font-bold text-gray-800 dark:text-white">
          GHRIB ZAKARIA
        </RouterLink>
        
        {/* Navigation pour écrans larges */}
        <nav className="hidden md:flex items-center space-x-8">
          <ScrollLink to="à-propos" {...scrollLinkProps}>À propos</ScrollLink>
          <ScrollLink to="compétences" {...scrollLinkProps}>Compétences</ScrollLink>
          <ScrollLink to="expérience" {...scrollLinkProps}>Expérience</ScrollLink>
          {/* Le lien "Projets" utilise le routeur normal */}
          <RouterLink to="/projects" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300">
            Projets
          </RouterLink>
          <ScrollLink to="contact" {...scrollLinkProps}>Contact</ScrollLink>
          <ThemeToggle />
        </nav>

        {/* Boutons pour mobile */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 dark:text-gray-200 focus:outline-none">
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu mobile déroulant */}
      {isOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-800 px-6 pb-4 border-t border-gray-200 dark:border-gray-700">
          <ScrollLink to="à-propos" {...scrollLinkProps} onClick={() => setIsOpen(false)} className="block py-2">À propos</ScrollLink>
          <ScrollLink to="compétences" {...scrollLinkProps} onClick={() => setIsOpen(false)} className="block py-2">Compétences</ScrollLink>
          <ScrollLink to="expérience" {...scrollLinkProps} onClick={() => setIsOpen(false)} className="block py-2">Expérience</ScrollLink>
          <RouterLink to="/projects" onClick={() => setIsOpen(false)} className="block py-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300">
            Projets
          </RouterLink>
          <ScrollLink to="contact" {...scrollLinkProps} onClick={() => setIsOpen(false)} className="block py-2">Contact</ScrollLink>
        </nav>
      )}
    </header>
  );
};

export default Header;