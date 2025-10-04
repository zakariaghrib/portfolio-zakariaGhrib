import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://www.linkedin.com/in/zakaria-ghrib-164169273" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors duration-300">
            <FaLinkedin size={28} />
          </a>
          <a href="https://github.com/zakariaghrib" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors duration-300">
            <FaGithub size={28} />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} GHRIB ZAKARIA. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;