import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import './App.css';

function App() {
  return (
    <div className="font-sans text-gray-900">
      <Header />
      <main>
        <Hero />
        {/* Les autres sections viendront ici */}
        {/* <About /> */}
        {/* <Skills /> */}
        {/* etc. */}
      </main>
    </div>
  );
}

export default App;