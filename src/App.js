import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About'; // Importer le composant About
import Skills from './components/Skills'; // Importer le composant Skills
import './App.css';

function App() {
  return (
    <div className="font-sans text-gray-900 bg-gray-50">
      <Header />
      <main>
        <Hero />
        <About />   {/* Ajouter le composant About ici */}
        <Skills />  {/* Ajouter le composant Skills ici */}
        {/* Les autres sections viendront ici */}
      </main>
    </div>
  );
}

export default App;