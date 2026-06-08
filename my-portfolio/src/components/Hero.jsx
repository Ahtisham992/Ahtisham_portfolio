import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram } from 'lucide-react';
import { personalInfo, siteMetadata } from '../data/portfolio';

const BlueprintSVG = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="relative w-72 h-72 lg:w-[400px] lg:h-[400px] flex items-center justify-center cursor-crosshair group opacity-90 hover:opacity-100 transition-opacity duration-500"
    >
      <svg
        viewBox="0 0 120 120"
        className="w-full h-full stroke-ember"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Letter M */}
        <motion.path
          d="M 20 90 L 20 30 L 40 60 L 60 30 L 60 90"
          initial={{ pathLength: 1 }}
          whileHover={{ pathLength: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
        {/* Letter A */}
        <motion.path
          d="M 60 90 L 80 30 L 100 90"
          initial={{ pathLength: 1 }}
          whileHover={{ pathLength: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 0.1 }}
        />
        {/* A Crossbar */}
        <motion.path
          d="M 67 70 L 93 70"
          initial={{ pathLength: 1 }}
          whileHover={{ pathLength: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
        />
      </svg>

      {/* Decorative Blueprint Corner Marks */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-ink-light/20 group-hover:border-ember transition-colors duration-700" />
      <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-ink-light/20 group-hover:border-ember transition-colors duration-700" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-ink-light/20 group-hover:border-ember transition-colors duration-700" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-ink-light/20 group-hover:border-ember transition-colors duration-700" />
    </motion.div>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
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

        {/* Right Side - Blueprint Effect */}
        <div className="hidden lg:flex flex-1 justify-center items-center absolute right-0 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none lg:relative lg:opacity-100 lg:pointer-events-auto lg:translate-y-0 lg:top-auto">
          <BlueprintSVG />
        </div>

      </div>
    </section>
  );
};

export default Hero;