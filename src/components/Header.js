import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ['À propos', 'Compétences', 'Expérience', 'Formation', 'Contact'];

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">GHRIB ZAKARIA</div>
        
        {/* Navigation pour écrans larges */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map(link => (
            <a href={`#${link.toLowerCase()}`} className="text-gray-600 hover:text-indigo-600 transition duration-300">{link}</a>
          ))}
        </nav>

        {/* Bouton pour menu mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"}></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <nav className="md:hidden bg-white px-6 pb-4">
          {navLinks.map(link => (
            <a href={`#${link.toLowerCase()}`} className="block py-2 text-gray-600 hover:text-indigo-600 transition duration-300">{link}</a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;