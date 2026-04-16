import React from 'react';

function Contact() {
  const contactInfo = [
    { label: "Email (Click to copy)", value: "zacharryjohna@gmail.com", icon: "@", color: "blue" },
    { label: "LinkedIn", value: "/zacharryjohna", icon: "in", color: "blue" },
    { label: "GitHub", value: "/zacharryjohna", icon: "Git", color: "slate" },
    { label: "Location", value: "Baguio City, Philippines", icon: "Pin", color: "red" }
  ];

  return (
    <section 
      id="contact" 
      data-aos="fade-up"
      data-aos-once="true"
      className="my-12 py-10"
    >
      {/* FIX: Added style={{ backgroundColor: 'transparent' }} 
          to ensure no hidden global CSS is forcing white.
      */}
      <div 
        className="p-8 md:p-12 rounded-2xl border border-slate-800 shadow-2xl relative overflow-hidden group bg-[#0f172a]/40 backdrop-blur-sm"
        style={{ backgroundColor: 'rgba(15, 23, 42, 0.4)' }}
      >
        
        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-blue-500/10 transition-all"></div>

        <span className="text-sm tracking-widest text-slate-500 uppercase font-bold block mb-2 font-mono">
          SAY HELLO
        </span>

        <h2 className="text-4xl font-bold text-blue-500 mb-6">Get In Touch</h2>

        <p className="text-slate-300 text-lg mb-10 max-w-2xl leading-relaxed">
          I'm currently looking for networking opportunities or collaborative web projects. 
          Whether you have a question or just want to say hi, my inbox is always open!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactInfo.map((item, index) => (
            <div 
              key={index}
              className="flex items-center p-4 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-all cursor-pointer group/card"
              style={{ backgroundColor: 'rgba(30, 41, 59, 0.5)' }}
            >
              <div className={`w-12 h-12 flex items-center justify-center rounded-lg mr-4 font-bold text-sm
                ${item.color === 'blue' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 
                  item.color === 'red' ? 'bg-red-500/10 text-red-400 border border-red-500/20' : 
                  'bg-slate-700/20 text-slate-300 border border-slate-700/30'}
              `}>
                {item.icon}
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-tighter">{item.label}</p>
                <p className="text-white font-medium group-hover/card:text-blue-400 transition-colors">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800/50 text-center">
          <p className="italic text-slate-500 font-medium">"Sakto Lang"</p>
        </div>
      </div>
      
      <div className="mt-16 text-center">
        <p className="text-slate-600 text-sm font-mono tracking-widest uppercase">
          © 2026 Zacharry John P. Aquitania
        </p>
      </div>
    </section>
  );
}

export default Contact;