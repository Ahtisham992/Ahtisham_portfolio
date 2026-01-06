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
    { icon: Linkedin, href: personalInfo.social.linkedin, color: 'hover:text-blue-300' },
    { icon: Github, href: personalInfo.social.github, color: 'hover:text-gray-300' },
    { icon: Instagram, href: personalInfo.social.instagram, color: 'hover:text-pink-300' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 overflow-hidden">
      <ParticleBackground />
      
      {/* Animated tech grid overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-white"
          >
            <motion.p variants={itemVariants} className="text-lg text-purple-200 mb-4 font-medium tracking-wide">
              Hello, I'm
            </motion.p>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              {personalInfo.name.split(' ')[0]}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-pink-200 to-purple-100">
                {personalInfo.name.split(' ')[1]}
              </span>
            </motion.h1>

            <motion.div variants={itemVariants} className="text-xl md:text-2xl mb-8 h-16">
              <TypeAnimation
                sequence={[
                  ...personalInfo.titles.flatMap(title => [title, 2000])
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-purple-100 font-semibold"
              />
            </motion.div>

            <motion.p variants={itemVariants} className="text-lg text-purple-100 mb-8 leading-relaxed max-w-2xl">
              {personalInfo.bio}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,255,255,0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-700 px-8 py-4 rounded-full font-bold hover:shadow-2xl transition-all inline-flex items-center justify-center group"
              >
                <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                Get In Touch
              </motion.a>
              
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-primary-700 transition-all inline-flex items-center justify-center backdrop-blur-sm"
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
                  className={`text-white ${social.color} transition-colors duration-300 p-2 rounded-full backdrop-blur-sm bg-white/10 hover:bg-white/20`}
                >
                  <social.icon className="w-6 h-6" />
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
          <span className="text-sm mb-2 font-medium">Scroll Down</span>
          <ChevronDown className="w-6 h-6" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;