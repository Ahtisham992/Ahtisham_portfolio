import React from 'react';
import { personalInfo, siteMetadata } from '../data/portfolio';

const Footer = () => {
  return (
    <footer className="border-t border-border bg-surface pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <a href="#home" className="text-3xl font-black tracking-tighter flex items-center mb-6">
              <span className="text-ember">M</span>
              <span className="text-ink">A</span>
            </a>
            <p className="text-ink-light max-w-sm mb-6 leading-relaxed">
              {siteMetadata.footer.description}
            </p>
            <div className="flex items-center gap-4 text-sm font-bold text-ink">
              <div className="w-2 h-2 rounded-full bg-ember animate-pulse" />
              Open to new opportunities
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-ink mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-ink-light hover:text-ember transition-colors">About</a></li>
              <li><a href="#projects" className="text-ink-light hover:text-ember transition-colors">Projects</a></li>
              <li><a href="#experience" className="text-ink-light hover:text-ember transition-colors">Experience</a></li>
              <li><a href="#capabilities" className="text-ink-light hover:text-ember transition-colors">Capabilities</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-ink mb-6">Connect</h4>
            <ul className="space-y-4">
              <li><a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="text-ink-light hover:text-ember transition-colors">GitHub</a></li>
              <li><a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-ink-light hover:text-ember transition-colors">LinkedIn</a></li>
              <li><a href={personalInfo.social.instagram} target="_blank" rel="noopener noreferrer" className="text-ink-light hover:text-ember transition-colors">Instagram</a></li>
              <li><a href={`mailto:${personalInfo.email}`} className="text-ink-light hover:text-ember transition-colors">Email</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-ink-light font-medium">
            &copy; {new Date().getFullYear()} Muhammad Ahtisham. All rights reserved.
          </div>
          
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-sm font-medium text-ink-light hover:text-ember transition-colors flex items-center gap-1"
          >
            Back to top &uarr;
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;