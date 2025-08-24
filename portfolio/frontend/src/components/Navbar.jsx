import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';
import glass from '../assets/glass.png';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollOpts = { smooth: true, duration: 500, offset: -80 };

  // Try to scroll on "/", otherwise route to the page
  const routeOrScroll = (e, id, path) => {
    if (location.pathname === '/' && document.getElementById(id)) {
      e.preventDefault();
      scroller.scrollTo(id, scrollOpts);
    } else {
      // go to the real route (e.g., /about, /projects, /contacts)
      // remove preventDefault so Link works as a normal router link
    }
  };

  return (
    <nav className="w-full sticky top-0 z-50 rounded-b-lg bg-no-repeat bg-cover">
      <div className="container mx-auto px-0 flex flex-col items-center justify-center">
        {/* Portfolio Owner's Name */}
        <h1 className="text-[clamp(2.5rem,8vw,6rem)] font-extrabold text-black-800 mb-6 mt-2 text-center leading-tight">
          Annisa A. Carter
        </h1>

        {/* Navigation Links Container - transparent background */}
        <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-6 p-3 rounded-xl">
         
          {/* Home: try to scroll to #home when on "/" */}
          <Link
            to="/"
            onClick={(e) => {
              if (location.pathname === '/' && document.getElementById('home')) {
                e.preventDefault();
                scroller.scrollTo('home', scrollOpts);
              }
            }}
            className="glass-hover px-6 py-2 bg-white text-blue-800 font-semibold rounded-full
                       border-2 border-black
                       shadow-inner
                       shadow-blue-400/50
                       hover:bg-blue-50 hover:text-blue-900
                       hover:shadow-blue-600/75 hover:shadow-xl
                       transition-all duration-300 ease-in-out
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75
                       w-full md:w-auto text-lg text-center"
          >
            Home
          </Link>

          {/* About: scroll on "/", else route to /about */}
          <Link
            to="/about"
            onClick={(e) => routeOrScroll(e, 'about', '/about')}
            className="glass-hover px-6 py-2 bg-white text-blue-800 font-semibold rounded-full
                       border-2 border-black
                       shadow-inner
                       shadow-blue-400/50
                       hover:bg-blue-50 hover:text-blue-900
                       hover:shadow-blue-600/75 hover:shadow-xl
                       transition-all duration-300 ease-in-out
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75
                       w-full md:w-auto text-lg text-center"
          >
            About
          </Link>

          {/* Projects */}
          <Link
            to="/projects"
            onClick={(e) => routeOrScroll(e, 'projects', '/projects')}
            className="glass-hover px-6 py-2 bg-white text-blue-800 font-semibold rounded-full
                       border-2 border-black
                       shadow-inner
                       shadow-blue-400/50
                       hover:bg-blue-50 hover:text-blue-900
                       hover:shadow-blue-600/75 hover:shadow-xl
                       transition-all duration-300 ease-in-out
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75
                       w-full md:w-auto text-lg text-center"
          >
            Projects
          </Link>

          {/* Contact */}
          <Link
            to="/contacts"
            onClick={(e) => routeOrScroll(e, 'contacts', '/contacts')}
            className="glass-hover px-6 py-2 bg-white text-blue-800 font-semibold rounded-full
                       border-2 border-black
                       shadow-inner
                       shadow-blue-400/50
                       hover:bg-blue-50 hover:text-blue-900
                       hover:shadow-blue-600/75 hover:shadow-xl
                       transition-all duration-300 ease-in-out
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75
                       w-full md:w-auto text-lg text-center"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
