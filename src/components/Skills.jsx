// src/components/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  "HTML5", "CSS", "JavaScript", "React", "TypeScript", "Node.js", "Next.js", "Tailwind CSS", "Bootstrap", "Git", "GitHub", "Visual Studio Code"
];

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.section 
      className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white py-20 px-10"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center">Minhas Skills</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <motion.li 
            key={skill} 
            className="bg-white dark:bg-gray-700 shadow-md p-4 rounded text-center"
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
};

export default Skills;
