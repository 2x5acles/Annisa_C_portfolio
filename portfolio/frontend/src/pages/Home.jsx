// src/pages/Home.jsx
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

import jellyVideo from "../assets/jelly.mp4";
import glassbg from "../assets/glass.png";

// Import  existing section components
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    // Map route path -> section id
    const pathToId = {
      "/": "home",
      "/about": "about",
      "/projects": "projects",
      "/contacts": "contacts",
    };

    const targetId = pathToId[location.pathname] || "home";

    // Wait a tick to ensure DOM is painted
    const t = setTimeout(() => {
      scroller.scrollTo(targetId, {
        smooth: true,
        duration: 500,
        offset: -80,
      });
    }, 0);

    return () => clearTimeout(t);
  }, [location.pathname]);

  return (
    <div className="relative">
      {/* HERO / TOP SECTION */}
      <section
        id="home"
        className="relative flex flex-col items-center justify-center min-h-[800px] md:min-h-screen
                   overflow-hidden bg-gray-900 text-white rounded-lg m-0 shadow-lg"
      >
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-80 z-0"
          src={jellyVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
        {/* Glass Overlay Image */}
        <div
          className="absolute inset-0 w-full h-full bg-no-repeat bg-cover z-10 pointer-events-none"
          style={{ backgroundImage: `url(${glassbg})` }}
        />
        {/* Hero Content */}
        <div className="relative z-20 flex flex-col items-center justify-center p-4 text-center">
          <h1 className="text-3xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg
                         bg-gradient-to-r from-blue-300 to-teal-200 text-transparent bg-clip-text">
            Product Designer
          </h1>
          <p>Blending UX research, UI design, and frontend development to craft smooth, stylish experiences.</p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="w-full">
        <About />
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="w-full">
        <Projects />
      </section>

      {/* CONTACT SECTION */}
      <section id="contacts" className="w-full">
        <Contact />
      </section>
    </div>
  );
}
