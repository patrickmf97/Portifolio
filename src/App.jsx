// src/App.jsx
import React, { useState } from 'react';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500">
        <button
          className="p-2 fixed top-4 right-4 bg-blue-500 text-white rounded"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? 'Modo Claro' : 'Modo Escuro'}
        </button>
        <Hero />
        <div id="about">
          <AboutMe />
        </div>
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
