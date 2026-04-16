import React from 'react';

function Experience() {
  return (
    <section 
      id="experience" 
      data-aos="fade-right"
      data-aos-once="true"
      /* Border matched to your About Me section */
      className="my-12 py-10 border-b border-slate-800"
    >
      
      <span className="text-sm tracking-widest text-slate-500 uppercase font-bold block mb-2">
        WORK & PROJECTS
      </span>

      <h2 className="text-4xl font-bold text-blue-500 mb-8">Experience</h2>

      <div className="space-y-8 text-lg text-slate-300 leading-relaxed max-w-4xl">
        
        {/* OJT Experience - Removed white background, added dark theme styling */}
        <div className="bg-[#0f172a]/40 p-6 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-all group">
          <div className="flex justify-between items-start flex-wrap gap-2">
            <div>
              <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">On-the-Job Trainee</h3>
              <p className="text-blue-500 font-medium">Bureau of Fire Protection (BFP)</p>
            </div>
            <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-bold px-3 py-1 rounded-full font-mono">
              OJT
            </span>
          </div>
          <p className="mt-4 text-slate-400">
            During my training at the BFP, I was exposed to real-world administrative work and government processes. 
            This experience helped me develop strong professional discipline, responsibility, and the ability 
            to operate effectively within a structured environment.
          </p>
        </div>

        {/* Technical/Academic Experience - Matched dark theme */}
        <div className="bg-[#0f172a]/40 p-6 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-all group">
          <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">Academic Projects</h3>
          <p className="text-blue-500 font-medium">Web Development & System Design</p>
          <p className="mt-4 text-slate-400">
            I have developed various school projects using modern technologies like <b className="text-slate-200">React, Node.js, and Tailwind CSS</b>. 
            My experience includes managing databases with <b className="text-slate-200">MySQL and MongoDB</b>, ensuring that applications 
            are not only functional but also secure and efficient.
          </p>
        </div>

        <p className="pt-4 italic text-slate-500 text-base border-t border-slate-800/50">
          "I continue to improve my skills through consistent practice and continuous learning to prepare for 
          future opportunities in the IT industry."
        </p>
      </div>
    </section>
  );
}

export default Experience;