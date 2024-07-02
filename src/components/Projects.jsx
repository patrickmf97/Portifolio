// src/components/Projects.jsx
import React from 'react';

const projects = [
  { name: "liz-confeitaria", description: "JavaScript", link: "https://github.com/patrickmf97/liz-confeitaria" },
  { name: "LoginModern", description: "Login Page responsiva utilizando HTML e CSS", link: "https://github.com/patrickmf97/LoginModern" },
  { name: "LP-onebitx", description: "Landing page do exercício do curso Onebitcode, inspirada nas páginas da SpaceX", link: "https://github.com/patrickmf97/LP-onebitx" },
  { name: "SnakeGame", description: "Jogo 'Snake Game', criado utilizando a base de HTML, CSS e JavaScript", link: "https://github.com/patrickmf97/SnakeGame" },
  { name: "TOM-School", description: "HTML", link: "https://github.com/patrickmf97/TOM-School" },
  { name: "proschedule-react", description: "JavaScript", link: "https://github.com/patrickmf97/proschedule-react" }
];

const Projects = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white py-20 px-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Projetos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(project => (
          <div key={project.name} className="bg-white dark:bg-gray-700 shadow-md p-4 rounded">
            <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
            <p>{project.description}</p>
            <a 
              href={project.link} 
              className="text-blue-500 mt-2 inline-block" 
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver no GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
