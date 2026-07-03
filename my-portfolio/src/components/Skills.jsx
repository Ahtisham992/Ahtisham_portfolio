import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { skills, projects, siteMetadata } from '../data/portfolio';

// Match a skill name against a project's technology list.
// Uses direct inclusion first, then falls back to significant-word overlap
// so "Whisper ASR" still matches "Whisper AI", "AWS (EC2…)" matches "AWS", etc.
const matchesTech = (skillName, techList) => {
  const sn = skillName.toLowerCase();
  const snWords = sn.split(/[\s\/\(\),\.+]+/).filter(w => w.length >= 4);

  return techList.some(tech => {
    const t = tech.toLowerCase();
    if (t === sn || t.includes(sn) || sn.includes(t)) return true;
    const tWords = t.split(/[\s\/\(\),\.+]+/).filter(w => w.length >= 4);
    return (
      snWords.length > 0 &&
      tWords.length > 0 &&
      snWords.some(sw => tWords.some(tw => tw === sw || tw.startsWith(sw) || sw.startsWith(tw)))
    );
  });
};

const SkillProjectsModal = ({ skill, onClose }) => {
  const matched = projects.filter(p => matchesTech(skill, p.technologies));

  useEffect(() => {
    const handleKey = e => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
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
        transition={{ duration: 0.25 }}
        className="bg-surface w-full max-w-2xl max-h-[80vh] overflow-y-auto border border-border"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-8 md:p-10">
          {/* Header */}
          <div className="flex justify-between items-start mb-8 pb-6 border-b border-border">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-ember mb-2">Projects using</p>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-ink leading-tight">
                {skill}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="text-ember hover:text-[#e04518] transition-colors font-bold tracking-widest text-xs uppercase shrink-0 mt-1 ml-4"
            >
              Close (ESC)
            </button>
          </div>

          {matched.length === 0 ? (
            <p className="text-ink-light text-sm">
              No projects explicitly list this technology in their stack.
            </p>
          ) : (
            <div className="divide-y divide-border">
              {matched.map(project => (
                <div key={project.id} className="py-5 flex items-start gap-5 group">
                  {/* Thumbnail */}
                  {project.media?.thumbnail && (
                    <div className="w-16 h-16 bg-bone border border-border shrink-0 overflow-hidden">
                      <img
                        src={project.media.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                  )}

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs font-bold uppercase tracking-widest text-ember">
                        {project.category}
                      </span>
                      <span className="text-xs text-ink-light">{project.date}</span>
                    </div>
                    <h3 className="text-base font-bold text-ink mb-1 leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-sm text-ink-light leading-relaxed line-clamp-2">
                      {project.shortDescription}
                    </p>
                    <div className="flex gap-4 mt-2">
                      {project.liveDemo && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs text-ember hover:text-[#e04518] font-medium transition-colors"
                          onClick={e => e.stopPropagation()}
                        >
                          <ExternalLink className="w-3 h-3" />
                          Live Demo
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs text-ink-light hover:text-ink font-medium transition-colors"
                          onClick={e => e.stopPropagation()}
                        >
                          <Github className="w-3 h-3" />
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <section id="capabilities" className="section-padding border-t border-border bg-bone">
      <div className="container-custom">
        <div className="mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-ember mb-2">
            {siteMetadata.capabilities.heading}
          </h2>
          <p className="text-3xl font-medium tracking-tight text-ink max-w-2xl">
            {siteMetadata.capabilities.description}
          </p>
          <p className="text-sm text-ink-light mt-3">
            Click any skill to see which projects use it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 border-t border-border pt-12">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-sm font-bold uppercase tracking-widest text-ink capitalize shrink-0">
                  {category}
                </h3>
                <div className="h-[1px] w-full bg-border" />
              </div>
              <div className="flex flex-wrap gap-3">
                {items.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedSkill(item.name)}
                    className="flex items-center gap-2 bg-surface border border-border px-4 py-2 hover:border-ember transition-colors cursor-pointer group"
                  >
                    <span className="text-ink font-medium text-sm group-hover:text-ember transition-colors">
                      {item.name}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedSkill && (
          <SkillProjectsModal
            skill={selectedSkill}
            onClose={() => setSelectedSkill(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Skills;
