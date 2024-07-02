// src/components/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-800 text-gray-100 dark:text-white py-10 px-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Onde me encontrar</h2>
      <div className="flex justify-center space-x-4 mb-4">
        <a href="https://linkedin.com/in/patrickmf97" className="text-blue-400" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/patrickmf97" className="text-blue-400" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="mailto:patrickmf97@gmail.com" className="text-blue-400">Gmail</a>
      </div>
      <p className="text-center">&copy; {new Date().getFullYear()} Patrick Morais</p>
    </footer>
  );
};

export default Contact;
