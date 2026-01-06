// ========================================
// FILE: src/components/Experience.jsx
// ========================================
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Briefcase, GraduationCap, Award, CheckCircle } from 'lucide-react';
import { experience, education, certifications } from '../data/portfolio';
import { getThemeClasses } from '../theme/theme';

const Experience = () => {
  const [ref, isInView] = useInView();
  const themeClasses = getThemeClasses();

  return (
    <section id="experience" className={`section-padding ${themeClasses.bgSecondary}`}>
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Experience & Education
          </h2>
          <div className={`w-24 h-1 ${themeClasses.gradient} mx-auto rounded-full`} />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Professional Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className={`text-2xl font-bold ${themeClasses.textPrimary} mb-8 flex items-center gap-3`}>
              <Briefcase className="w-7 h-7 text-primary-600 dark:text-primary-400" />
              Professional Experience
            </h3>

            <div className="space-y-6">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className={`${themeClasses.card} p-6`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                    <div>
                      <h4 className={`text-xl font-bold ${themeClasses.textPrimary}`}>
                        {exp.title}
                      </h4>
                      <p className={themeClasses.textAccent}>
                        {exp.company}
                      </p>
                      {exp.location && (
                        <p className={`${themeClasses.textSecondary} text-sm`}>
                          {exp.location}
                        </p>
                      )}
                    </div>
                    <span className="inline-block mt-2 sm:mt-0 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className={`flex items-start ${themeClasses.textSecondary}`}>
                        <CheckCircle className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education & Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className={`text-2xl font-bold ${themeClasses.textPrimary} mb-8 flex items-center gap-3`}>
              <GraduationCap className="w-7 h-7 text-primary-600 dark:text-primary-400" />
              Education
            </h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className={`${themeClasses.card} p-6 mb-8`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                <div>
                  <h4 className={`text-xl font-bold ${themeClasses.textPrimary}`}>
                    {education.degree}
                  </h4>
                  <p className={themeClasses.textAccent}>
                    {education.institution}
                  </p>
                  <p className={`${themeClasses.textSecondary} text-sm`}>
                    {education.location}
                  </p>
                </div>
                <span className="inline-block mt-2 sm:mt-0 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                  {education.period}
                </span>
              </div>
              <ul className={`space-y-1 ${themeClasses.textSecondary}`}>
                {education.details.map((detail, i) => (
                  <li key={i}>• {detail}</li>
                ))}
              </ul>
            </motion.div>

            <h4 className={`text-lg font-bold ${themeClasses.textPrimary} mb-4 flex items-center gap-2`}>
              <Award className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              Certifications
            </h4>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className={`${themeClasses.card} p-4 flex items-center gap-4`}
                >
                  <Award className="w-8 h-8 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                  <div>
                    <p className={`font-semibold ${themeClasses.textPrimary}`}>
                      {cert.title}
                    </p>
                    <p className={`text-sm ${themeClasses.textSecondary}`}>
                      {cert.issuer}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;