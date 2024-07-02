// src/components/Skills.jsx
import React from 'react';

const skills = [
  "HTML5", "CSS", "JavaScript", "React", "TypeScript", "Node.js", "Next.js", "Tailwind CSS", "Bootstrap", "Git", "GitHub", "Visual Studio Code"
];

const Skills = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white py-20 px-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Minhas Skills</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map(skill => (
          <li key={skill} className="bg-white dark:bg-gray-700 shadow-md p-4 rounded text-center">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
