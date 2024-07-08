// src/components/AboutMe.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutMe = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.section 
      className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white py-20 px-10 w-full"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center">Sobre Mim</h2>
      <div className="text-center max-w-4xl mx-auto">
        <motion.p className="text-lg mb-4" initial={{ x: -100 }} animate={inView ? { x: 0 } : { x: -100 }} transition={{ duration: 0.5 }}>
          🤔 Apaixonado por criar experiências digitais incríveis!
        </motion.p>
        <motion.p className="text-lg mb-4" initial={{ x: -100 }} animate={inView ? { x: 0 } : { x: -100 }} transition={{ duration: 0.6 }}>
          🎓 Estudando HTML, CSS, JavaScript, React, TypeScript, Node.js e Next.js.
        </motion.p>
        <motion.p className="text-lg mb-4" initial={{ x: -100 }} animate={inView ? { x: 0 } : { x: -100 }} transition={{ duration: 0.7 }}>
          💼 Explorando o mundo FullStack na busca por inovação.
        </motion.p>
        <motion.p className="text-lg" initial={{ x: -100 }} animate={inView ? { x: 0 } : { x: -100 }} transition={{ duration: 0.8 }}>
          🌱 Aprendendo mais sobre desenvolvimento web e suas tecnologias.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default AboutMe;
