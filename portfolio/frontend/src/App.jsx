import React from "react"; 
import { Routes, Route } from "react-router-dom"; 

import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  return (
    <div className="">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contact />} />
          {/* fallback to home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}
