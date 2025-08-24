import React from 'react';
import waterImage from '../assets/water.png';
import glassImage from '../assets/glass.png';



 
export default function About() {
  return (
    <div
      id="about" // ID for navbar scrolling
      className="relative min-h-screen flex items-center justify-center p-4 md:p-8 overflow-hidden"
      style={{ backgroundColor: '#4E75D9' }} // Set the solid blue background color
    >
      {/* Background Image: water.png */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(${waterImage})` }}
      ></div>

      {/* Overlay Image: glass.png */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${glassImage})` }}
      ></div>

      {/* Central Content Box with updated styling */}
      <div 
        className="relative z-10 bg-white/90 backdrop-blur-sm text-gray-800 p-8 md:p-12 rounded-lg max-w-3xl text-center
                   border-2 border-black
                   shadow-inner shadow-blue-400/50
                   hover:shadow-blue-600/75 hover:shadow-xl
                   transition-all duration-300"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6">
          About Me:
        </h2>
        <p className="text-lg md:text-xl leading-relaxed">
          I’m a product designer with a frontend background and a UX mindset. I map user flows, prototype quick demos, and evolve them into polished, intuitive experiences. I love crafting creative, unique UI that feels both fresh and functional designs that surprise users in delightful ways while staying clear and usable. My years in customer service sharpened my empathy and problem-solving skills, giving me firsthand insight into how people think, feel, and interact with products. My focus: thoughtful structure, meaningful microcopy, smooth interactions, and real world performance. I design for inclusivity and accessibility ensuring contrast and typography are clear, navigation is effortless, and assistive tech users have full support so everyone can engage with what I create.
        </p>
      </div>
    </div>
  );
}