import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="container-custom relative z-10 w-full">
        <div className="max-w-3xl">
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </div>
            <span className="text-sm font-medium tracking-wide text-ink-light uppercase">
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[64px] sm:text-[72px] lg:text-[101px] leading-[1.05] tracking-tight font-bold mb-6 text-ink"
          >
            Muhammad Ahtisham
          </motion.h1>

          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[28px] sm:text-[32px] md:text-[36px] font-medium leading-tight mb-6 text-ink-light"
          >
            Full-Stack Engineer building AI-driven systems.
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-[18px] sm:text-[20px] text-ink-light mb-12 max-w-2xl leading-relaxed"
          >
            I design and build scalable web, mobile, and AI-powered products.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#projects" className="btn-primary">
              View Work &rarr;
            </a>
            <a href="/Ahtisham_Resume_Final.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Download Resume
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;