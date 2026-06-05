import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/portfolio';
import CaseStudyModal from './CaseStudyModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  return (
    <section id="projects" className="section-padding border-t border-border bg-bone">
      <div className="container-custom">
        <div className="mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-ink-light mb-2">Selected Work</h2>
          <p className="text-3xl font-medium tracking-tight text-ink max-w-2xl">
            Case studies of systems and products I've engineered.
          </p>
        </div>

        <div className="flex flex-col border-t border-border">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: Math.min(index * 0.1, 0.5) }}
              className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-border cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="flex-1 pr-8">
                <h3 className="text-2xl font-bold tracking-tight text-ink mb-2 group-hover:text-ember transition-colors">
                  {project.title}
                </h3>
                <p className="text-ink-light max-w-3xl">
                  {project.shortDescription}
                </p>
              </div>

              <div className="mt-4 md:mt-0 flex items-center gap-6 justify-between md:justify-end">
                <div className="hidden lg:flex flex-wrap gap-2 justify-end max-w-md">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span key={i} className="text-xs font-medium text-ink-light bg-surface px-2 py-1">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs font-medium text-ink-light bg-surface px-2 py-1">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                <div className="w-8 h-8 flex items-center justify-center text-ink-light group-hover:text-ember transition-colors">
                  &rarr;
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <CaseStudyModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};

export default Projects;