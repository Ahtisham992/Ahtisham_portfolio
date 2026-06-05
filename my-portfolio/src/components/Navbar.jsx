import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="#home" className="text-xl font-bold tracking-tighter text-ink">
          M. Ahtisham
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-ink-light hover:text-ink transition-colors relative group"
            >
              {link.name}
              <span className="absolute left-0 bottom-[-4px] w-0 h-[1px] bg-ember transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a href="#contact" className="text-sm font-medium text-ember hover:text-[#e04518] transition-colors ml-4">
            Let's Talk &rarr;
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
