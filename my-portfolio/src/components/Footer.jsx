import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-border py-8 mt-20">
      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-ink-light font-medium">
          &copy; {new Date().getFullYear()} Muhammad Ahtisham.
        </div>
        
        <div className="flex items-center gap-6 text-sm font-medium text-ink-light">
          <a href="https://github.com/Ahtisham992" target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/muhammad-ahtisham0" target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors">LinkedIn</a>
          <a href="https://twitter.com/MAhtisham12" target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors">Twitter</a>
        </div>

        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-sm font-medium text-ink-light hover:text-ember transition-colors flex items-center gap-1"
        >
          Back to top &uarr;
        </button>
      </div>
    </footer>
  );
};

export default Footer;