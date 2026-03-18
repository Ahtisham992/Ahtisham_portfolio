// ========================================
// FILE: src/components/Hero.jsx
// TASK 6.4: Added "Open to full-time roles" green pill badge above the name.
// ========================================
import React, { useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  Github, Linkedin, Instagram, Send, Code,
  ChevronDown, Terminal as TerminalIcon, Download,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { personalInfo } from "../data/portfolio";
import ParticleBackground from "./ParticleBackground";
import InteractiveTerminal from "./InteractiveTerminal";

const Hero = () => {
  const [showTerminal, setShowTerminal] = useState(false);
  const navigate = useNavigate();

  const containerVariants = {
    hidden:  { opacity: 0 },
    visible: { opacity: 1, transition: { delayChildren: 0.3, staggerChildren: 0.2 } },
  };
  const itemVariants = {
    hidden:  { y: 20, opacity: 0 },
    visible: { y: 0,  opacity: 1, transition: { duration: 0.5 } },
  };

  const socialLinks = [
    { icon: Linkedin,  href: personalInfo.social.linkedin,  color: "hover:text-blue-300"  },
    { icon: Github,    href: personalInfo.social.github,    color: "hover:text-gray-300"  },
    { icon: Instagram, href: personalInfo.social.instagram, color: "hover:text-pink-300"  },
  ];

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 overflow-hidden"
      >
        <ParticleBackground />

        {/* Subtle tech grid overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Text content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-white"
            >
              {/* TASK 6.4 — "Open to full-time roles" badge */}
              <motion.div variants={itemVariants}>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/20 border border-green-400/40 text-green-300 text-sm font-medium mb-4">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Open to full-time roles
                </span>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-lg text-purple-200 mb-2 font-medium tracking-wide"
              >
                Hello, I'm
              </motion.p>

              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
              >
                {personalInfo.name.split(" ")[0]}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-pink-200 to-purple-100">
                  {personalInfo.name.split(" ")[1]}
                </span>
              </motion.h1>

              <motion.div
                variants={itemVariants}
                className="text-xl md:text-2xl mb-8 h-16"
              >
                <TypeAnimation
                  sequence={[
                    ...personalInfo.titles.flatMap((title) => [title, 2000]),
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-purple-100 font-semibold"
                />
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-lg text-purple-100 mb-8 leading-relaxed max-w-2xl"
              >
                {personalInfo.bio}
              </motion.p>

              {/* Row 1: Get In Touch + View Projects */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 gap-3 mb-3 max-w-md"
              >
                <motion.button
                  onClick={() => {
                    const el = document.querySelector("#contact");
                    if (el) {
                      const offset          = 80;
                      const elementPosition = el.getBoundingClientRect().top;
                      const offsetPosition  = elementPosition + window.pageYOffset - offset;
                      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                    }
                  }}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,255,255,0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary-700 px-6 py-3.5 rounded-full font-bold hover:shadow-2xl transition-all inline-flex items-center justify-center gap-2 group"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  Get In Touch
                </motion.button>

                <motion.button
                  onClick={() => {
                    navigate("/projects");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-6 py-3.5 rounded-full font-bold hover:bg-white hover:text-primary-700 transition-all inline-flex items-center justify-center gap-2 backdrop-blur-sm"
                >
                  <Code className="w-4 h-4" />
                  View Projects
                </motion.button>
              </motion.div>

              {/* Row 2: Download CV + Terminal */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 gap-3 mb-8 max-w-md"
              >
                <motion.a
                  href={personalInfo.resumeUrl}
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-purple-200 text-white px-6 py-3.5 rounded-full font-bold hover:bg-white hover:text-primary-700 transition-all inline-flex items-center justify-center gap-2 backdrop-blur-sm"
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </motion.a>

                <motion.button
                  onClick={() => setShowTerminal(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-green-300 text-white px-6 py-3.5 rounded-full font-bold hover:bg-green-400 hover:text-gray-900 transition-all inline-flex items-center justify-center gap-2 backdrop-blur-sm"
                >
                  <TerminalIcon className="w-4 h-4" />
                  Terminal
                </motion.button>
              </motion.div>

              {/* Social links */}
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

            {/* Right side — particles fill this */}
            <div className="hidden lg:block" />
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white z-10"
        >
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2 font-medium">Scroll Down</span>
            <ChevronDown className="w-6 h-6" />
          </div>
        </motion.div>
      </section>

      <InteractiveTerminal
        isOpen={showTerminal}
        onClose={() => setShowTerminal(false)}
      />
    </>
  );
};

export default Hero;