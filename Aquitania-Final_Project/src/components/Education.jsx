import React from 'react';

function Education() {
  return (
    <section 
      id="education" 
      data-aos="fade-left"
      data-aos-once="true"
      /* Border color matched to slate-800 from AboutMe.jsx */
      className="my-12 py-10 border-b border-slate-800"
    >
      
      <span className="text-sm tracking-widest text-slate-500 uppercase font-bold block mb-2">
        LEARNING PATH
      </span>

      {/* Heading color matched to AboutMe.jsx */}
      <h2 className="text-4xl font-bold text-blue-500 mb-8">Education</h2>

      {/* Main body text changed to text-slate-300 for consistency */}
      <div className="space-y-8 text-lg text-slate-300 leading-relaxed max-w-4xl">
        
        {/* College Section */}
        <div className="relative pl-6 border-l-2 border-blue-500">
          <h3 className="text-2xl font-bold text-white">University of the Cordilleras</h3>
          <p className="text-blue-400 font-medium">Bachelor of Science in Information Technology</p>
          <p className="text-sm text-slate-500 italic mb-3">Major in Network and Security | 2024 - Present</p>
          <p>
            I am continuously learning about networking, cybersecurity, programming, and system development. 
            I am building my skills through hands-on activities and school projects to improve my 
            understanding of how to secure complex systems.
          </p>
        </div>

        {/* High School Section */}
        <div className="relative pl-6 border-l-2 border-slate-700">
          <h3 className="text-2xl font-bold text-white">Ilocos Sur National High School</h3>
          <p className="text-slate-400 font-medium">STEM Strand (Science, Technology, Engineering, and Mathematics)</p>
          <p className="text-sm text-slate-500 italic mb-3">Graduated with Honors</p>
          <p>
            During my time here, I developed strong skills in critical thinking and problem-solving, 
            which laid the foundation for my current studies in IT.
          </p>
        </div>

        <p className="pt-4 font-medium text-slate-500">
          I am motivated to keep improving so I can reach my goals and build a successful career in the IT field.
        </p>
      </div>
    </section>
  );
}

export default Education;