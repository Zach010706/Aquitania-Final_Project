import React from 'react';
// IMPORT the local image from your assets folder
import heroImage from '../assets/profile.jpg'; 

function Hero() {
  return (
    <section 
      id="home" 
      className="min-h-[90vh] flex items-center justify-center py-20 px-6 relative overflow-hidden"
    >
      {/* BACKGROUND DECORATION */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none hidden lg:block">
        <h2 className="text-[12rem] font-black text-white/5 tracking-tighter uppercase whitespace-nowrap">
          My Portfolio
        </h2>
      </div>

      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-32 relative z-10">
        
        {/* Left Side: Text Content */}
        <div className="md:w-1/2 text-center md:text-left order-2 md:order-1" data-aos="fade-right">
          <span className="text-blue-500 font-mono tracking-widest uppercase text-sm font-bold mb-4 block">
            Welcome to my space
          </span>

          <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-tight">
            Hi, I'm <span className="text-blue-500">Zacharry</span>
          </h1>
          <p className="mt-6 text-xl text-slate-400">
            A 2nd Year BSIT Student at UC <br />
            specializing in <span className="text-blue-500 font-bold">Network and Security</span>
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#contact" className="px-10 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">
              Let's Talk
            </a>
            <a href="#about" className="px-10 py-3 border border-slate-700 text-slate-300 rounded-xl font-bold hover:border-blue-500 transition-all">
              Learn More
            </a>
          </div>
        </div>

        {/* Right Side: The Image */}
        <div className="md:w-auto flex justify-center order-1 md:order-2" data-aos="fade-left">
          <div className="relative group">
            <div className="absolute -inset-4 bg-blue-500/20 rounded-[2.5rem] blur-2xl opacity-50 transition-opacity group-hover:opacity-100"></div>
            
            <div className="absolute -left-10 top-10 bg-[#0f172a] border border-slate-700 px-4 py-2 rounded-lg shadow-xl z-20 hidden lg:flex items-center gap-2 animate-bounce hover:animate-none">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">My Portfolio</span>
            </div>

            <img 
              /* USE THE IMPORTED heroImage VARIABLE HERE */
              src={heroImage} 
              alt="Zacharry John P. Aquitania"
              className="relative w-72 h-72 lg:w-96 lg:h-96 object-cover rounded-4xl border-4 border-slate-800 shadow-2xl transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;