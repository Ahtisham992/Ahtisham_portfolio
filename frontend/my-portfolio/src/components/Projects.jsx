// ========================================
// FILE: src/components/Projects.jsx
// ========================================
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Brain, CloudUpload, School, ExternalLink, Github } from 'lucide-react';
import { projects, personalInfo } from '../data/portfolio';
import { getThemeClasses } from '../theme/theme';

const Projects = () => {
  const [ref, isInView] = useInView();
  const [selectedProject, setSelectedProject] = useState(null);
  const themeClasses = getThemeClasses();

  const iconMap = {
    Brain: Brain,
    CloudUpload: CloudUpload,
    School: School,
  };

  const projectGradients = [
    'from-primary-500 to-primary-600',
    'from-primary-600 to-primary-700',
    'from-primary-500 to-primary-700',
  ];

  const ProjectCard = ({ project, index }) => {
    const Icon = iconMap[project.icon];
    const gradient = projectGradients[index % projectGradients.length];

    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        whileHover={{ y: -10 }}
        className={`${themeClasses.card} overflow-hidden group cursor-pointer`}
        onClick={() => setSelectedProject({...project, gradient})}
      >
        {/* Header with Gradient */}
        <div className={`bg-gradient-to-br ${gradient} p-6`}>
          <Icon className="w-12 h-12 text-white mb-4" />
          <h3 className="text-2xl font-bold text-white">
            {project.title}
          </h3>
        </div>

        {/* Body */}
        <div className="p-6">
          <p className={`${themeClasses.textSecondary} mb-4 line-clamp-3`}>
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 4).map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-sm">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Features Preview */}
          <ul className={`text-sm ${themeClasses.textSecondary} space-y-1 mb-4`}>
            {project.features.slice(0, 3).map((feature, i) => (
              <li key={i} className="flex items-start">
                <span className="text-primary-500 mr-2">•</span>
                <span className="line-clamp-1">{feature}</span>
              </li>
            ))}
          </ul>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${themeClasses.textAccent} font-semibold flex items-center gap-2 group-hover:gap-3 transition-all`}
          >
            View Details
            <ExternalLink className="w-4 h-4" />
          </motion.button>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="projects" className={`section-padding ${themeClasses.bgPrimary}`}>
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Featured Projects
          </h2>
          <div className={`w-24 h-1 ${themeClasses.gradient} mx-auto rounded-full`} />
          <p className={`${themeClasses.textSecondary} text-lg mt-4`}>
            Showcasing my latest work and technical achievements
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <motion.a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`inline-flex items-center gap-3 px-8 py-4 ${themeClasses.gradient} text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all`}
          >
            <Github className="w-5 h-5" />
            View More Projects on GitHub
          </motion.a>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className={`${themeClasses.bgCard} rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto`}
              >
                {/* Header */}
                <div className={`bg-gradient-to-br ${selectedProject.gradient} p-8 text-white`}>
                  {(() => {
                    const Icon = iconMap[selectedProject.icon];
                    return <Icon className="w-16 h-16 mb-4" />;
                  })()}
                  <h2 className="text-3xl font-bold mb-2">{selectedProject.title}</h2>
                  <p className="text-white/90">{selectedProject.description}</p>
                </div>

                {/* Body */}
                <div className="p-8">
                  {/* Technologies */}
                  <div className="mb-8">
                    <h3 className={`text-xl font-bold ${themeClasses.textPrimary} mb-4`}>
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className={`text-xl font-bold ${themeClasses.textPrimary} mb-4`}>
                      Key Features
                    </h3>
                    <ul className="space-y-3">
                      {selectedProject.features.map((feature, i) => (
                        <li
                          key={i}
                          className={`flex items-start ${themeClasses.textSecondary}`}
                        >
                          <span className="text-primary-500 font-bold mr-3 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Close Button */}
                  <motion.button
                    onClick={() => setSelectedProject(null)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`mt-8 w-full py-3 ${themeClasses.gradient} text-white font-semibold rounded-xl hover:shadow-lg transition-all`}
                  >
                    Close
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;