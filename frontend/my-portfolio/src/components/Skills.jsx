// ========================================
// FILE: src/components/Skills.jsx
// ========================================
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { skills } from '../data/portfolio';
import { Code, Database, Cpu, Cloud, Smartphone, Globe } from 'lucide-react';
import { getThemeClasses } from '../theme/theme';

const Skills = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const themeClasses = getThemeClasses();

  const techIcons = [
    { name: 'React.js', icon: Code, color: 'text-primary-600 dark:text-primary-400', bgColor: 'bg-primary-100 dark:bg-primary-900/30' },
    { name: 'Node.js', icon: Database, color: 'text-accent-600 dark:text-accent-400', bgColor: 'bg-accent-100 dark:bg-accent-900/30' },
    { name: 'Flutter', icon: Smartphone, color: 'text-primary-500 dark:text-primary-400', bgColor: 'bg-primary-100 dark:bg-primary-900/30' },
    { name: 'Python', icon: Code, color: 'text-accent-500 dark:text-accent-400', bgColor: 'bg-accent-100 dark:bg-accent-900/30' },
    { name: 'JavaScript', icon: Globe, color: 'text-primary-600 dark:text-primary-400', bgColor: 'bg-primary-100 dark:bg-primary-900/30' },
    { name: 'AWS', icon: Cloud, color: 'text-accent-600 dark:text-accent-400', bgColor: 'bg-accent-100 dark:bg-accent-900/30' },
  ];

  const SkillBar = ({ skill, delay }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="mb-6"
    >
      <div className="flex justify-between mb-2">
        <span className={`font-semibold ${themeClasses.textPrimary}`}>{skill.name}</span>
        <span className={themeClasses.textSecondary}>{skill.level}%</span>
      </div>
      <div className={`${themeClasses.bgSecondary} rounded-full h-3 overflow-hidden`}>
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: delay + 0.2, ease: 'easeOut' }}
          className={`h-full ${themeClasses.gradient} rounded-full`}
        />
      </div>
    </motion.div>
  );

  const skillCategories = [
    { title: 'Frontend Development', skills: skills.frontend, Icon: Code, color: 'text-primary-600 dark:text-primary-400' },
    { title: 'Backend Development', skills: skills.backend, Icon: Database, color: 'text-accent-600 dark:text-accent-400' },
    { title: 'AI Engine', skills: skills.ai, Icon: Cpu, color: 'text-primary-500 dark:text-primary-400' },
    { title: 'Cloud Services', skills: skills.cloud, Icon: Cloud, color: 'text-accent-500 dark:text-accent-400' },
  ];

  return (
    <section id="skills" className={`section-padding ${themeClasses.bgSecondary}`}>
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Skills & Technologies
          </h2>
          <div className={`w-24 h-1 ${themeClasses.gradient} mx-auto rounded-full`} />
        </motion.div>

        {/* Tech Icons Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {techIcons.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -10 }}
                className={`${themeClasses.card} p-6 text-center`}
              >
                <div className={`${tech.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3`}>
                  <IconComponent className={`w-8 h-8 ${tech.color}`} />
                </div>
                <div className={`font-semibold ${themeClasses.textPrimary}`}>{tech.name}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => {
            const IconComponent = category.Icon;
            return (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: catIndex * 0.2 }}
                className={`${themeClasses.card} p-8`}
              >
                <h3 className={`text-2xl font-bold ${themeClasses.textPrimary} mb-6 flex items-center gap-3`}>
                  <IconComponent className={`w-7 h-7 ${category.color}`} />
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, index) => (
                    <SkillBar
                      key={index}
                      skill={skill}
                      delay={catIndex * 0.2 + index * 0.1}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;