// ========================================
// FILE: src/components/Hero.jsx
// ========================================
import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Instagram, Send, Code, ChevronDown } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const socialLinks = [
    { icon: Linkedin, href: personalInfo.social.linkedin, color: 'hover:text-primary-300' },
    { icon: Github, href: personalInfo.social.github, color: 'hover:text-gray-300' },
    { icon: Instagram, href: personalInfo.social.instagram, color: 'hover:text-primary-400' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-600 to-primary-700 overflow-hidden">
      <ParticleBackground />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-white"
          >
            <motion.p variants={itemVariants} className="text-lg text-primary-100 mb-4 font-medium">
              Hello, I'm
            </motion.p>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              {personalInfo.name.split(' ')[0]}{' '}
              <span className="text-primary-200">{personalInfo.name.split(' ')[1]}</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="text-xl md:text-2xl mb-8 h-16">
              <TypeAnimation
                sequence={[
                  ...personalInfo.titles.flatMap(title => [title, 2000])
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-primary-50"
              />
            </motion.div>

            <motion.p variants={itemVariants} className="text-lg text-primary-100 mb-8 leading-relaxed max-w-2xl">
              {personalInfo.bio}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-700 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all inline-flex items-center justify-center group"
              >
                <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                Get In Touch
              </motion.a>
              
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary-700 transition-all inline-flex items-center justify-center"
              >
                <Code className="w-5 h-5 mr-2" />
                View Projects
              </motion.a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex space-x-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`text-white ${social.color} transition-colors duration-300`}
                >
                  <social.icon className="w-7 h-7" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Interactive space for particles */}
          <div className="hidden lg:block" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white z-10"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown className="w-6 h-6" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;