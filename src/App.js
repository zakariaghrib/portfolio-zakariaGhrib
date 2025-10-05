import React from 'react';
// Imports pour le routing
import { Routes, Route } from 'react-router-dom';

// Importez toutes vos sections de la page d'accueil
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import ProjectsPreview from './components/ProjectsPreview'; // Le composant avec l'aperçu et le bouton
import Contact from './components/Contact';
import Footer from './components/Footer';

// Importez la nouvelle page des projets
import ProjectsPage from './pages/ProjectsPage';

// Un composant pour la Page d'Accueil pour garder le code propre
const HomePage = () => (
  <>
    <Header />
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <ProjectsPreview /> {/* Cette section contiendra le bouton */}
      <Contact />
    </main>
    <Footer />
  </>
);

function App() {
  return (
    <div className="font-sans text-gray-900 bg-gray-50">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </div>
  );
}

export default App;