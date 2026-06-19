import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram } from 'lucide-react';
import { personalInfo, siteMetadata } from '../data/portfolio';
import SkillOrbit from './SkillOrbit';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-metallic">
      <div className="container-custom relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="max-w-3xl flex-1 z-10">

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
            className="text-[48px] sm:text-[72px] lg:text-[101px] leading-[1.05] tracking-tight font-bold mb-6 text-ink relative z-10"
          >
            {siteMetadata.hero.heading}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[28px] sm:text-[32px] md:text-[36px] font-medium leading-tight mb-6 text-ink-light relative z-10"
          >
            {siteMetadata.hero.subheading}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-[18px] sm:text-[20px] text-ink-light mb-12 max-w-2xl leading-relaxed relative z-10"
          >
            {siteMetadata.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4 items-start sm:items-center mb-8 relative z-10"
          >
            <a href="#projects" className="btn-primary">
              View Work &rarr;
            </a>
            <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Download Resume
            </a>
          </motion.div>

          {/* Social Links under CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-6 text-ink-light relative z-10"
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

        {/* Right Side - Orbiting Skills */}
        <div className="hidden lg:flex flex-1 justify-center items-center relative lg:opacity-100 lg:pointer-events-auto">
          <SkillOrbit />
        </div>

      </div>
    </section>
  );
};

export default Hero;