// ========================================
// FILE: src/components/Hero.jsx
// TASK 6.4: Added "Open to full-time roles" green pill badge above the name.
// ========================================
import React, { useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Hero3D from "./Hero3D";
import {
  Github, Linkedin, Instagram, Send, Code,
  ChevronDown, Terminal as TerminalIcon, Download,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { personalInfo } from "../data/portfolio";
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
        className="relative min-h-screen flex flex-col justify-center pt-24 lg:pt-24 pb-4 lg:pb-0 bg-slate-950 bg-grid-slate-900 overflow-hidden"
      >

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
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-slate-300 text-sm font-mono tracking-wide mb-4">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Open to full-time roles
                </span>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-lg text-primary-400 mb-2 font-mono tracking-wide"
              >
                Hello, I'm
              </motion.p>

              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-2 lg:mb-4 leading-tight tracking-tight"
              >
                {personalInfo.name.split(" ")[0]}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">
                  {personalInfo.name.split(" ")[1]}
                </span>
              </motion.h1>

              <motion.div
                variants={itemVariants}
                className="text-lg sm:text-xl md:text-2xl mb-4 lg:mb-6 min-h-[3.5rem] md:min-h-[4rem]"
              >
                <TypeAnimation
                  sequence={[
                    ...personalInfo.titles.flatMap((title) => [title, 2000]),
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-slate-300 font-mono"
                />
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg text-slate-400 mb-6 leading-relaxed max-w-2xl"
              >
                {personalInfo.bio}
              </motion.p>

              {/* Row 1: Get In Touch + View Projects */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3 max-w-md w-full"
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
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-primary-600 text-white px-6 py-3 rounded-md font-medium hover:bg-primary-500 transition-all inline-flex items-center justify-center gap-2 group w-full shadow-tech-glow"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Get In Touch
                </motion.button>

                <motion.button
                  onClick={() => {
                    navigate("/projects");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-slate-800/50 border border-slate-700 text-slate-200 px-6 py-3 rounded-md font-medium hover:bg-slate-800 transition-all inline-flex items-center justify-center gap-2 backdrop-blur-sm w-full"
                >
                  <Code className="w-5 h-5" />
                  View Projects
                </motion.button>
              </motion.div>

              {/* Row 2: Download CV + Terminal */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 max-w-md w-full"
              >
                <motion.a
                  href={personalInfo.resumeUrl}
                  download
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-slate-800/50 border border-slate-700 text-slate-200 px-6 py-3 rounded-md font-medium hover:bg-slate-800 transition-all inline-flex items-center justify-center gap-2 backdrop-blur-sm w-full"
                >
                  <Download className="w-5 h-5" />
                  Download CV
                </motion.a>

                <motion.button
                  onClick={() => setShowTerminal(true)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-slate-900 border border-emerald-500/50 text-emerald-400 px-6 py-3 rounded-md font-medium hover:bg-emerald-500/10 transition-all inline-flex items-center justify-center gap-2 backdrop-blur-sm w-full"
                >
                  <TerminalIcon className="w-5 h-5" />
                  Terminal
                </motion.button>
              </motion.div>

              {/* Social links */}
              <motion.div variants={itemVariants} className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`text-slate-400 ${social.color} transition-colors duration-200 p-2.5 rounded-md border border-slate-800 bg-slate-900/50 hover:border-slate-600 hover:bg-slate-800`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right side — 3D Interactive Robot */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 2 }}
              className="hidden lg:flex items-center justify-center relative w-[120%] h-[500px] xl:h-[600px] -right-10 z-0 pointer-events-auto mix-blend-screen"
              style={{
                maskImage: "radial-gradient(circle at center, black 30%, transparent 70%)",
                WebkitMaskImage: "radial-gradient(circle at center, black 30%, transparent 70%)"
              }}
            >
              <Hero3D />
            </motion.div>
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