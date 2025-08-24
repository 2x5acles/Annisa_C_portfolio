import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Description page for the PokeDex project.
 */
export default function PokeDexDescription() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-8 rounded-lg m-4 shadow-lg">
      <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6">
        PokeDex Project
      </h2>
      <p className="text-lg leading-relaxed mb-6">
        The PokeDex project is a dynamic web application built to explore the vast world of Pokémon. It allows users to search for specific Pokémon, view their detailed statistics, abilities, types, and even their evolutionary lines. The application focuses on delivering a smooth, interactive user experience by leveraging a comprehensive public API.
      </p>

      <h3 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Features:</h3>
      <ul className="list-disc list-inside text-lg leading-relaxed mb-6 pl-4">
        <li>**Comprehensive Search:** Quickly find any Pokémon by name or ID.</li>
        <li>**Detailed Profiles:** View HP, Attack, Defense, Special Attack, Special Defense, and Speed stats.</li>
        <li>**Type Information:** Clearly displays Pokémon types with associated weaknesses and strengths.</li>
        <li>**Evolutionary Chains:** Track a Pokémon's evolution path.</li>
        <li>**Responsive Design:** Optimized for seamless use across desktop, tablet, and mobile devices.</li>
      </ul>

      <h3 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Technologies Used:</h3>
      <ul className="list-disc list-inside text-lg leading-relaxed mb-6 pl-4">
        <li>**React.js:** For building a reactive and component-based user interface.</li>
        <li>**Tailwind CSS:** For rapid and responsive utility-first styling.</li>
        <li>**PokeAPI:** Integrated for all Pokémon data.</li>
        <li>**JavaScript ES6+:** For core logic and interactivity.</li>
      </ul>

      <h3 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Challenges & Solutions:</h3>
      <p className="text-lg leading-relaxed mb-6">
        A primary challenge was efficiently managing and displaying large datasets fetched from the API, especially for complex evolutionary chains. This was addressed by implementing a robust state management system and optimizing data fetching to minimize load times and ensure a fluid user experience. Responsive design across various screen sizes also required careful planning with Tailwind CSS.
      </p>

      <Link
        to="/projects"
        className="inline-block px-6 py-2 bg-blue-700 text-white font-semibold rounded-full shadow-md
                   hover:bg-blue-800 transition duration-300 ease-in-out mt-6"
      >
        Back to Projects
      </Link>
    </div>
  );
}
