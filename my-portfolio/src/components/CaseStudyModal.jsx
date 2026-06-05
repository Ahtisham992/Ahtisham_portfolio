import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CaseStudyModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-bone/90 backdrop-blur-sm p-4 md:p-12"
        onClick={onClose}
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          className="bg-surface w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-border"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-8 md:p-12">
            <div className="flex justify-between items-start mb-12">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-ink leading-tight">
                {project.title}
              </h2>
              <button
                onClick={onClose}
                className="text-ink-light hover:text-ink transition-colors font-medium text-sm border-b border-transparent hover:border-ink"
              >
                Close (ESC)
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-2 space-y-8">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-ink-light mb-4">Overview</h3>
                  <p className="text-ink leading-relaxed">{project.description}</p>
                </div>

                {project.highlights && (
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-ink-light mb-4">Architecture & Highlights</h3>
                    <ul className="space-y-2">
                      {project.highlights.map((item, i) => (
                        <li key={i} className="text-ink leading-relaxed flex gap-3">
                          <span className="text-ember mt-1.5 w-1 h-1 bg-ember rounded-full block flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-ink-light mb-4">Features</h3>
                  <ul className="space-y-2">
                    {project.features.map((item, i) => (
                      <li key={i} className="text-ink leading-relaxed flex gap-3">
                        <span className="text-border mt-1.5 w-1 h-1 bg-border rounded-full block flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-ink-light mb-4">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="text-sm text-ink-light border border-border px-3 py-1 bg-bone">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-ink-light mb-4">Links</h3>
                  {project.liveDemo && (
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="block text-ink font-medium hover:text-ember transition-colors">
                      Live Project &rarr;
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="block text-ink font-medium hover:text-ember transition-colors">
                      Source Code &rarr;
                    </a>
                  )}
                </div>
              </div>
            </div>

            {project.media && project.media.images && project.media.images.length > 0 && (
              <div className="mt-16 space-y-8">
                <h3 className="text-xs font-bold uppercase tracking-widest text-ink-light mb-4">Gallery</h3>
                {project.media.images.slice(0, 3).map((img, i) => (
                  <img key={i} src={img} alt={`${project.title} screenshot ${i+1}`} className="w-full border border-border" />
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CaseStudyModal;
