// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import ArrowDownIcon from './ArrowDownIcon';
import './Hero.css'; 

const Hero = () => {
  const scrollToContent = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white h-screen flex flex-col justify-center items-center text-center">
      <div className="background">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <motion.img
        src="https://avatars.githubusercontent.com/u/111186316?v=4"
        alt="Foto de perfil de Patrick Morais"
        className="rounded-full h-48 w-48 mb-4 z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />
      <motion.h1
        className="text-5xl font-bold mb-4 z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Oi! Eu sou o Patrick
      </motion.h1>
      <motion.p
        className="text-xl mb-6 max-w-2xl mx-auto z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Desenvolvedor Front-end apaixonado por criar experiências digitais incríveis!
      </motion.p>
      <motion.a
        href="https://github.com/patrickmf97"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-10 z-10"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        Veja meus projetos
      </motion.a>
      <motion.div
        className="text-blue-500 hover:text-blue-700 cursor-pointer z-10"
        onClick={scrollToContent}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <ArrowDownIcon />
      </motion.div>
    </div>
  );
};

export default Hero;
