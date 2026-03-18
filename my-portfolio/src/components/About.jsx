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

  const stats = [
    { icon: Briefcase, value: personalInfo.stats.internships, label: 'Internships' },
    { icon: FolderGit2, value: personalInfo.stats.projects, label: 'Projects' },
    { icon: Award, value: personalInfo.stats.certificates, label: 'Certificates' },
    { icon: Code, value: personalInfo.stats.technologies, label: 'Technologies' },
  ];

  const expertise = [
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'ReactNative & Flutter for cross-platform apps',
      gradient: 'from-primary-500 to-primary-600'
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'MERN Stack',
      gradient: 'from-primary-600 to-primary-700'
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'MongoDB, MySQL & SQL Server',
      gradient: 'from-primary-500 to-primary-700'
    },
    {
      icon: Brain,
      title: 'AI / Machine Learning',
      description: 'Building smart applications using AI & ML',
      gradient: 'from-primary-600 to-primary-800'
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
            <p className={`${themeClasses.textSecondary} text-lg leading-relaxed mb-6`}>
              I'm a passionate final year BS Software Engineering student at FAST-NUCES Islamabad,
              eager to apply my growing expertise in software development and web technologies to real-world
              challenges. I specialize in building practical, user-centered applications using modern frameworks and
              technologies.
            </p>
            <p className={`${themeClasses.textSecondary} text-lg leading-relaxed mb-8`}>
              With experience in MERN Stack, AWS, AI/ML and various other technologies, I thrive on solving
              complex problems through clean, efficient code. My goal is to create innovative solutions that
              make a positive impact.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className={`text-center p-6 bg-primary-50 dark:bg-primary-900/20 rounded-xl ${themeClasses.card}`}
                >
                  <stat.icon className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-3" />
                  <p className={`text-3xl font-bold ${themeClasses.textPrimary}`}>
                    {stat.value}
                  </p>
                  <p className={`${themeClasses.textSecondary} mt-1`}>
                    {stat.label}
                  </p>
                </motion.div>
              ))}
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
                whileHover={{ scale: 1.05, y: -10 }}
                className={`bg-gradient-to-br ${item.gradient} p-6 rounded-2xl text-white shadow-xl`}
              >
                <item.icon className="w-10 h-10 mb-4" />
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-white/90 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;