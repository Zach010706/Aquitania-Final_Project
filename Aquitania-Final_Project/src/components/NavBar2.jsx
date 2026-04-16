import React, { useState, useEffect } from 'react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 pointer-events-none px-4">
      <div className="max-w-6xl mx-auto">
        <div
          className={`
            mt-6 w-full pointer-events-auto transition-all duration-500 rounded-2xl relative overflow-hidden
            ${scrolled 
              ? 'bg-[#0f172a]/95 backdrop-blur-xl py-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-slate-700' 
              : 'bg-transparent py-8 border border-transparent'
            }
          `}
        >
          {/* TOP ROW: Logo and Menu pushed to the sides */}
          <div className="flex justify-between items-center relative z-10 px-12">
            
            {/* LOGO */}
            <a href="#home" className="text-2xl font-black tracking-tighter text-white shrink-0">
              ZJ<span className="text-blue-500">.AQUITANIA</span>
            </a>

            {/* MENU */}
            <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
              {['about', 'education', 'experience', 'skills', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="text-[15px] font-bold uppercase tracking-widest text-slate-200 hover:text-white transition-all relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full shadow-[0_0_10px_#3b82f6]"></span>
                </a>
              ))}
            </div>
          </div>

          {/* --- DATA STREAM LINE: Now sitting in the "underneath" space --- */}
          <div className="mt-4 px-12">
             <div className="data-stream-track">
                <div className="data-pulse"></div>
             </div>
          </div>

          {/* Centered Tech Sub-Bar */}
          <div className={`
            flex flex-col items-center transition-all duration-700 mt-2
            ${scrolled ? 'opacity-100 h-6' : 'opacity-0 h-0 overflow-hidden'}
          `}>
            <div className="flex items-center space-x-2 text-[9px] font-mono tracking-widest text-blue-500/60">
              <span>[</span>
              <span className="animate-pulse">SECURE_NODE_ACTIVE</span>
              <span>]</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;