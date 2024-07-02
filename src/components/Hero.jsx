// src/components/Hero.jsx
import React from 'react';
import ArrowDownIcon from './ArrowDownIcon';

const Hero = () => {
  const scrollToContent = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white h-screen flex flex-col justify-center items-center text-center relative">
      <img
        src="https://avatars.githubusercontent.com/u/111186316?v=4"
        alt="Foto de perfil de Patrick Morais"
        className="rounded-full h-48 w-48 mb-4"
      />
      <h1 className="text-5xl font-bold mb-4">Oi! Eu sou o Patrick</h1>
      <p className="text-xl mb-6 max-w-2xl mx-auto">Desenvolvedor Front-end apaixonado por criar experiências digitais incríveis!</p>
      <a 
        href="https://github.com/patrickmf97" 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-10"
        target="_blank"
        rel="noopener noreferrer"
      >
        Veja meus projetos
      </a>
      <div 
        className="text-blue-500 hover:text-blue-700 cursor-pointer"
        onClick={scrollToContent}
      >
        <ArrowDownIcon />
      </div>
    </div>
  );
};

export default Hero;
