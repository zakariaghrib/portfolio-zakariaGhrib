import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact'; // Importer
import Footer from './components/Footer';   // Importer
import './App.css';

function App() {
  return (
    <div className="font-sans text-gray-900 bg-gray-50">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact /> {/* Ajouter */}
      </main>
      <Footer /> {/* Ajouter */}
    </div>
  );
}

export default App;