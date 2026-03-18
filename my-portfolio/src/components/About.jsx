// ========================================
// FILE: src/components/About.jsx
// ========================================
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Briefcase, FolderGit2, Award, Code, Smartphone, Globe, Database, Brain } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { getThemeClasses } from '../theme/theme';

const About = () => {
  const [ref, isInView] = useInView();
  const themeClasses = getThemeClasses();

  const achievements = [
    { icon: '🏆', text: 'FYP Grade A — Prismora AI', border: 'border-amber-500/30', textCol: 'text-amber-400' },
    { icon: '🚀', text: 'SalesCare: 50+ APIs in Production', border: 'border-emerald-500/30', textCol: 'text-emerald-400' },
    { icon: '🌍', text: 'Remote work — Turing Intelligence, Prague', border: 'border-blue-500/30', textCol: 'text-blue-400' },
  ];

  const expertise = [
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'ReactNative & Flutter for cross-platform apps',
      gradient: 'group-hover:text-primary-400'
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'MERN Stack',
      gradient: 'group-hover:text-accent-400'
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'MongoDB, MySQL & SQL Server',
      gradient: 'group-hover:text-emerald-400'
    },
    {
      icon: Brain,
      title: 'AI / Machine Learning',
      description: 'Building smart applications using AI & ML',
      gradient: 'group-hover:text-blue-400'
    },
  ];

  return (
    <section id="about" className={`section-padding ${themeClasses.bgPrimary}`}>
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            About Me
          </h2>
          <div className={`w-24 h-1 ${themeClasses.gradient} mx-auto rounded-full`} />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className={`text-3xl font-bold ${themeClasses.textPrimary} mb-6`}>
              Crafting Digital Excellence
            </h3>
            <p className={`${themeClasses.textSecondary} text-lg leading-relaxed mb-10`}>
              I'm a final-year Software Engineering student at FAST-NUCES Islamabad 
              specialising in full-stack web development (MERN), cross-platform 
              mobile (React Native), and applied AI/ML engineering. I've shipped 
              production systems including an enterprise ERP platform with 50+ REST 
              APIs and an AI podcast pipeline using Whisper and transformer NLP. I 
              currently contribute remotely to Turing Intelligence, a Prague-based 
              simulation and AI research lab.
            </p>

            {/* Achievements Banner */}
            <div 
              className="relative w-full overflow-hidden py-2"
              style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
            >
              <motion.div 
                className="flex gap-4 w-max"
                animate={{ x: ['0%', '-50%'] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
              >
                {[...achievements, ...achievements].map((ach, idx) => (
                  <div 
                    key={idx}
                    className={`inline-flex items-center gap-3 px-5 py-2.5 rounded-md border bg-slate-900/50 backdrop-blur-sm ${ach.border} shadow-sm font-mono text-sm tracking-wide ${ach.textCol}`}
                  >
                    <span className="text-lg">{ach.icon}</span>
                    <span className="whitespace-nowrap">{ach.text}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Expertise Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className={`bg-slate-900 border border-slate-800 p-6 rounded-lg shadow-sm hover:border-slate-600 transition-colors group`}
              >
                <item.icon className={`w-8 h-8 mb-4 text-slate-400 transition-colors duration-200 ${item.gradient}`} />
                <h4 className="text-lg font-bold mb-2 text-slate-100">{item.title}</h4>
                <p className="text-slate-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;