// ========================================
// FILE: src/components/Skills.jsx
// TASK 2: Complete overhaul
//   - Removed SkillBar component and all percentage bars (2.1)
//   - Removed tech icons grid row (2.2)
//   - Replaced with flat grouped pill-badge category cards (2.2)
// ========================================
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Code, Database, Cpu, Cloud, Smartphone, Server } from 'lucide-react';
import { getThemeClasses } from '../theme/theme';

// ── Skill categories with pills ──────────────────────────────────────────────
const skillCategories = [
  {
    title: 'Frontend Development',
    Icon: Code,
    color: 'text-primary-600 dark:text-primary-400',
    skills: [
      'React.js', 'TypeScript', 'JavaScript', 'HTML5',
      'CSS3', 'Tailwind CSS', 'Redux',
    ],
  },
  {
    title: 'Backend Development',
    Icon: Server,
    color: 'text-accent-600 dark:text-accent-400',
    skills: [
      'Node.js', 'Express.js', 'NestJS', 'FastAPI',
      'RESTful APIs', 'JWT',
    ],
  },
  {
    title: 'Mobile',
    Icon: Smartphone,
    color: 'text-primary-500 dark:text-primary-400',
    skills: ['React Native', 'Flutter'],
  },
  {
    title: 'AI & Machine Learning',
    Icon: Cpu,
    color: 'text-accent-500 dark:text-accent-400',
    skills: [
      'Python', 'PyTorch', 'Whisper ASR', 'Transformers',
      'BERT', 'CodeT5', 'MediaPipe', 'OpenCV', 'NLP',
    ],
  },
  {
    title: 'Databases',
    Icon: Database,
    color: 'text-primary-600 dark:text-primary-400',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL'],
  },
  {
    title: 'Cloud & DevOps',
    Icon: Cloud,
    color: 'text-accent-600 dark:text-accent-400',
    skills: [
      'AWS (EC2)', 'AWS S3', 'AWS RDS',
      'Docker', 'Hugging Face', 'Git',
    ],
  },
];

// ── Component ─────────────────────────────────────────────────────────────────
const Skills = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const themeClasses = getThemeClasses();

  return (
    <section id="skills" className={`section-padding ${themeClasses.bgSecondary}`}>
      <div className="container-custom">

        {/* Section heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Skills &amp; Technologies
          </h2>
          <div className={`w-24 h-1 ${themeClasses.gradient} mx-auto rounded-full`} />
          <p className={`${themeClasses.textSecondary} text-lg mt-4 max-w-xl mx-auto`}>
            A flat overview of every technology I work with — no artificial percentages,
            just the honest stack.
          </p>
        </motion.div>

        {/* Category cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => {
            const IconComponent = category.Icon;

            return (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                whileHover={{ y: -4 }}
                className={`${themeClasses.card} p-6`}
              >
                {/* Card heading */}
                <h3
                  className={`text-lg font-bold ${themeClasses.textPrimary} mb-4 flex items-center gap-2`}
                >
                  <IconComponent className={`w-5 h-5 ${category.color} flex-shrink-0`} />
                  {category.title}
                </h3>

                {/* Pill badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-md px-3 py-1 text-sm font-mono"
                    >
                      {skill}
                    </span>
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