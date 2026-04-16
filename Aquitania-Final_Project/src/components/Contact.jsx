import React, { useState } from 'react';

function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("zacharryjohna@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section 
      id="contact" 
      data-aos="zoom-in"
      data-aos-once="true"
      className="my-12 py-10 bg-slate-800 rounded-2xl px-8 shadow-inner"
    >
      <div className="max-w-4xl mx-auto">
        <span className="text-sm tracking-widest text-slate-300 uppercase font-bold block mb-2">
          SAY HELLO
        </span>

        <h2 className="text-4xl font-bold text-blue-500">Get In Touch</h2>
        
        <p className="text-lg mt-4 text-white">
          I'm currently looking for networking opportunities or collaborative web projects. 
          Whether you have a question or just want to say hi, my inbox is always open!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          
          {/* Email */}
          <div 
            onClick={copyEmail}
            className="cursor-pointer flex items-center p-4 bg-slate-700 border border-slate-600 rounded-xl hover:border-blue-500 hover:shadow-md transition-all group relative"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors">
              @
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-blue-400">
                {copied ? "Copied to clipboard!" : "Email (Click to copy)"}
              </p>
              <p className="text-white font-semibold text-sm sm:text-base">
                zacharryjohna@gmail.com
              </p>
            </div>
          </div>

          {/* LinkedIn */}
          <a 
            href="https://linkedin.com/in/zacharryjohna" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center p-4 bg-slate-700 border border-slate-600 rounded-xl hover:border-blue-700 hover:shadow-md transition-all group"
          >
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-700 font-bold group-hover:bg-blue-700 group-hover:text-white transition-colors">
              in
            </div>
            <div className="ml-4">
              <p className="text-sm text-slate-300 font-medium">LinkedIn</p>
              <p className="text-white font-semibold">/zacharryjohna</p>
            </div>
          </a>

          {/* GitHub */}
          <a 
            href="https://github.com/zacharryjohna" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center p-4 bg-slate-700 border border-slate-600 rounded-xl hover:border-slate-400 hover:shadow-md transition-all group"
          >
            <div className="w-12 h-12 bg-slate-600 rounded-full flex items-center justify-center text-white font-bold group-hover:bg-white group-hover:text-slate-900 transition-colors">
              Git
            </div>
            <div className="ml-4">
              <p className="text-sm text-slate-300 font-medium">GitHub</p>
              <p className="text-white font-semibold">/zacharryjohna</p>
            </div>
          </a>

          {/* Location */}
          <div className="flex items-center p-4 bg-slate-700 border border-slate-600 rounded-xl">
            <div className="w-12 h-12 bg-red-400/20 rounded-full flex items-center justify-center text-red-400 font-bold">
              Pin
            </div>
            <div className="ml-4">
              <p className="text-sm text-slate-300 font-medium">Location</p>
              <p className="text-white font-semibold text-sm sm:text-base">
                Baguio City, Philippines
              </p>
            </div>
          </div>

        </div>

        <div className="mt-10 pt-6 border-t border-slate-600 text-center">
          <p className="text-slate-400 italic font-medium">"Sakto Lang"</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;