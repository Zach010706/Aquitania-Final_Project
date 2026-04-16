import "./App.css";
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import all components
import Navbar from './components/NavBar2'; 
import Hero from './components/Hero';
import AboutMe from './components/AboutMe2';
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      mirror: false,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="bg-[#0f172a] text-slate-200 min-h-screen font-sans selection:bg-blue-500 selection:text-white">
      
      <Navbar />

      {/* CHANGED p-6 to px-6 to ensure horizontal alignment matches the navbar exactly */}
      <main className="max-w-6xl mx-auto px-6 pt-32 overflow-x-hidden">
        
        <Hero /> 
        <AboutMe />
        <Education />
        <Experience />
        <Skills />
        <Contact />
        
      </main>

      <footer className="text-center py-10 text-slate-500 text-sm border-t border-slate-800">
        <p>© {new Date().getFullYear()} Zacharry John P. Aquitania</p>
        <p className="mt-2 italic font-medium text-blue-400">"Sakto Lang"</p>
      </footer>
    </div>
  );
}

export default App;