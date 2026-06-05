import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram } from 'lucide-react';
import { personalInfo, siteMetadata } from '../data/portfolio';

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
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ember opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-ember"></span>
            </div>
            <span className="text-sm font-medium tracking-wide text-ink-light uppercase">
              {siteMetadata.hero.statusText}
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[48px] sm:text-[72px] lg:text-[101px] leading-[1.05] tracking-tight font-bold mb-6 text-ink"
          >
            {siteMetadata.hero.heading}
          </motion.h1>

          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[28px] sm:text-[32px] md:text-[36px] font-medium leading-tight mb-6 text-ink-light"
          >
            {siteMetadata.hero.subheading}
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-[18px] sm:text-[20px] text-ink-light mb-12 max-w-2xl leading-relaxed"
          >
            {siteMetadata.hero.description}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4 items-start sm:items-center mb-8"
          >
            <a href="#projects" className="btn-primary">
              View Work &rarr;
            </a>
            <a href="/Ahtisham_Resume_Final.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Download Resume
            </a>
          </motion.div>

          {/* Social Links under CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-6 text-ink-light"
          >
            <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-ink hover:-translate-y-0.5 transition-all">
              <Github className="w-5 h-5" />
            </a>
            <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-ink hover:-translate-y-0.5 transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={personalInfo.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-ink hover:-translate-y-0.5 transition-all">
              <Instagram className="w-5 h-5" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;