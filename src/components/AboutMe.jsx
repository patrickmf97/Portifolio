// src/components/AboutMe.jsx
import React from 'react';

const AboutMe = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white py-20 px-10 w-full">
      <h2 className="text-3xl font-bold mb-6 text-center">Sobre Mim</h2>
      <div className="text-center max-w-4xl mx-auto">
        <p className="text-lg mb-4">🤔 Apaixonado por criar experiências digitais incríveis!</p>
        <p className="text-lg mb-4">🎓 Estudando HTML, CSS, JavaScript, React, TypeScript, Node.js e Next.js.</p>
        <p className="text-lg mb-4">💼 Explorando o mundo FullStack na busca por inovação.</p>
        <p className="text-lg">🌱 Aprendendo mais sobre desenvolvimento web e suas tecnologias.</p>
      </div>
    </section>
  );
};

export default AboutMe;
