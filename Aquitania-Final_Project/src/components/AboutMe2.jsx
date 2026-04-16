import React from 'react';

function AboutMe() {
  return (
    <section 
      id="about" 
      data-aos="fade-right"
      data-aos-once="true" 
      data-aos-duration="1000"
      /* Changed border color to slate-800 to match dark mode */
      className="my-12 py-10 border-b border-slate-800"
    >
      <span className="text-sm tracking-widest text-slate-500 uppercase font-bold block mb-2">
        ABOUT ME
      </span>

      <h2 className="text-4xl font-bold text-blue-500 mb-8">Who Am I?</h2>

      {/* Changed text-gray-700 to text-slate-300 for visibility */}
      <div className="space-y-6 text-lg text-slate-300 leading-relaxed max-w-4xl">
        <p>
          Hi! I'm <strong className="text-white">Zacharry</strong>, a 2nd-year BSIT student at the University of the Cordilleras, 
          majoring in <b className="text-blue-400">Network and Security</b>. I build web applications using React and Node.js, 
          driven by a deep interest in how computer networks stay safe from cyber threats and data breaches.
        </p>

        <p>
          My journey in IT is fueled by more than just a love for technology; it is built on my goal 
          to create a stable and successful future for my family. I am dedicated to mastering 
          my craft as a way to give back and provide my parents with a better life.
        </p>

        <p>
          I’m a focused, "behind-the-scenes" problem-solver who thrives on efficiency and organization. 
          When I’m not studying network protocols or coding, you’ll find me at the gym with friends 
          or conquering monsters in <em>Monster Hunter</em>. <b className="text-blue-400">Sakto lang.</b>
        </p>
      </div>
    </section>
  );
}

export default AboutMe;