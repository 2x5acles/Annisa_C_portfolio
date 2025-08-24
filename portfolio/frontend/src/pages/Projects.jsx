import React from 'react';

// Import your project images
import pokedexImage from '../assets/pokedex.png';
import todoImage from '../assets/todo.png';
import knightImage from '../assets/knight.png';

// SVG Icon for GitHub link
const GitHubIcon = () => (
  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
  </svg>
);

// SVG Icon for External Link
const ExternalLinkIcon = () => (
    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
    </svg>
);


export default function Projects() {
  const projects = [
    {
      id: 'pokedex',
      title: 'Interactive PokeDex',
      image: pokedexImage,
      description: 'A dynamic front-end app that allows users to browse and search for Pokémon, fetching data live from the PokeAPI.',
      technologies: ['React', 'Tailwind CSS', 'REST API'],
      liveUrl: '#',
      repoUrl: 'https://github.com/2x5acles/mini-pokedex.git',
    },
    {
      id: 'donezo',
      title: 'Donezo To-Do App',
      image: todoImage,
      description: 'A sleek and responsive to-do list application to help users manage daily tasks with a clean, intuitive interface.',
      technologies: ['JavaScript', 'HTML5', 'CSS3'],
      liveUrl: '#',
      repoUrl: 'https://github.com/2x5acles/denzo1.git',
    },
    {
      id: 'knights-of-javascript',
      title: 'Knights Of JavaScript',
      image: knightImage,
      description: 'A text-based adventure game built in vanilla JavaScript. Players navigate challenges and make choices to progress the story.',
      technologies: ['JavaScript', 'Node.js', 'Jest'],
      liveUrl: 'https://knightsofjava.netlify.app',
      repoUrl: 'https://github.com/2x5acles/Annisa_C_KnightsOfJavaScript.git',
    },
  ];

  return (
    <div
      id="projects"
      className="min-h-screen bg-white text-gray-800 p-4 md:p-8 rounded-lg m-4 shadow-lg flex flex-col items-center"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-12 text-center">
        My Work
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group bg-white rounded-xl overflow-hidden
                       border-2 border-black
                       flex flex-col
                       shadow-[inset_0_6px_18px_rgba(30,64,175,0.45),_0_0_14px_rgba(56,189,248,0.70)]
                       hover:shadow-[inset_0_6px_18px_rgba(30,64,175,0.45),_0_0_18px_rgba(56,189,248,0.90)]
                       transition-all duration-300 ease-in-out transform hover:-translate-y-2"
          >
            {/* ***MODIFIED***: Image container now applies effects directly to the image */}
            <div className="overflow-hidden h-56">
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="w-full h-full object-cover 
                           transition-all duration-500 ease-in-out 
                           group-hover:scale-110 group-hover:brightness-75"
              />
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 text-base flex-grow mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span key={tech} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex justify-start space-x-4">
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gray-800 text-white font-semibold rounded-lg text-sm
                             hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75
                             transition-all duration-300 transform hover:scale-105"
                >
                  <GitHubIcon />
                  GitHub
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg text-sm
                             hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75
                             transition-all duration-300 transform hover:scale-105"
                >
                  Live Demo
                  <ExternalLinkIcon />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}