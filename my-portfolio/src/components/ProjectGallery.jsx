import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, ExternalLink, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import { projects } from '../data/portfolio';

// ─── Image Carousel Modal ─────────────────────────────────────────────────────

const GalleryDetailModal = ({ project, onClose }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const images = project.media?.images?.filter(Boolean) ?? [];

  useEffect(() => {
    setImgIndex(0);
    const handleKey = e => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setImgIndex(i => (i + 1) % Math.max(images.length, 1));
      if (e.key === 'ArrowLeft') setImgIndex(i => (i - 1 + Math.max(images.length, 1)) % Math.max(images.length, 1));
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose, images.length]);

  const prev = e => { e.stopPropagation(); setImgIndex(i => (i - 1 + images.length) % images.length); };
  const next = e => { e.stopPropagation(); setImgIndex(i => (i + 1) % images.length); };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-bone/90 backdrop-blur-sm p-4 md:p-10"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 24, opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="bg-surface border border-border w-full max-w-4xl max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Image Carousel */}
        {images.length > 0 && (
          <div className="relative aspect-video bg-bone border-b border-border overflow-hidden">
            <img
              src={images[imgIndex]}
              alt={`${project.title} screenshot ${imgIndex + 1}`}
              className="w-full h-full object-cover"
            />
            {images.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-bone/80 border border-border flex items-center justify-center hover:border-ember hover:text-ember transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-bone/80 border border-border flex items-center justify-center hover:border-ember hover:text-ember transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                {/* Dot indicators */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={e => { e.stopPropagation(); setImgIndex(i); }}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === imgIndex ? 'w-6 bg-ember' : 'w-1.5 bg-ink/30 hover:bg-ink/60'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {/* Content */}
        <div className="p-8 md:p-12">
          {/* Header */}
          <div className="flex justify-between items-start mb-10">
            <div className="flex-1 pr-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold uppercase tracking-widest text-ember">
                  {project.category}
                </span>
                <span className="text-xs text-ink-light">{project.date}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink leading-tight">
                {project.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="text-ember hover:text-[#e04518] transition-colors font-bold tracking-widest text-xs uppercase shrink-0 mt-1"
            >
              Close (ESC)
            </button>
          </div>

          {/* Two-column layout (mirrors CaseStudyModal) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Left: Overview + Highlights + Features */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-ink-light mb-4">Overview</h3>
                <p className="text-ink leading-relaxed">{project.description}</p>
              </div>

              {project.highlights && (
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-ink-light mb-4">
                    Architecture & Highlights
                  </h3>
                  <ul className="space-y-2">
                    {project.highlights.map((item, i) => (
                      <li key={i} className="text-ink leading-relaxed flex gap-3">
                        <span className="mt-2 w-1 h-1 bg-ember rounded-full block flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.features && (
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-ink-light mb-4">Features</h3>
                  <ul className="space-y-2">
                    {project.features.map((item, i) => (
                      <li key={i} className="text-ink leading-relaxed flex gap-3">
                        <span className="mt-2 w-1 h-1 bg-border rounded-full block flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right sidebar: Tech Stack + Links */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-ink-light mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-sm text-ink-light border border-border px-3 py-1 bg-bone"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-ink-light mb-4">Links</h3>
                <div className="space-y-3">
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-ember hover:text-[#e04518] font-medium transition-colors text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Project
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-ember hover:text-[#e04518] font-medium transition-colors text-sm"
                    >
                      <Github className="w-4 h-4" />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ─── Category filter pill ─────────────────────────────────────────────────────

const FilterPill = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-5 py-2 text-xs font-bold uppercase tracking-widest border transition-colors ${
      active
        ? 'border-ember text-ember bg-ember/5'
        : 'border-border text-ink-light bg-surface hover:border-ink hover:text-ink'
    }`}
  >
    {label}
  </button>
);

// ─── Project card ─────────────────────────────────────────────────────────────

const ProjectCard = ({ project, onClick }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 12 }}
    transition={{ duration: 0.3 }}
    whileHover={{ y: -4 }}
    onClick={onClick}
    className="bg-surface border border-border hover:border-ember transition-colors cursor-pointer group flex flex-col"
  >
    {/* Thumbnail */}
    <div className="aspect-video bg-bone overflow-hidden border-b border-border">
      {project.media?.thumbnail ? (
        <img
          src={project.media.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-ink-light text-xs uppercase tracking-widest">
          No Preview
        </div>
      )}
    </div>

    {/* Body */}
    <div className="p-6 flex flex-col flex-1">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-xs font-bold uppercase tracking-widest text-ember">
          {project.category}
        </span>
        <span className="text-xs text-ink-light">{project.date}</span>
      </div>

      <h3 className="text-lg font-bold tracking-tight text-ink mb-2 leading-snug group-hover:text-ember transition-colors line-clamp-2">
        {project.title}
      </h3>

      <p className="text-sm text-ink-light leading-relaxed line-clamp-2 flex-1">
        {project.shortDescription}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5 mt-4">
        {project.technologies.slice(0, 4).map((tech, i) => (
          <span
            key={i}
            className="text-xs text-ink-light bg-bone border border-border px-2 py-0.5"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 4 && (
          <span className="text-xs text-ink-light bg-bone border border-border px-2 py-0.5">
            +{project.technologies.length - 4}
          </span>
        )}
      </div>

      {/* Footer row */}
      <div className="flex items-center justify-between pt-4 mt-4 border-t border-border">
        <span className="text-xs font-bold uppercase tracking-widest text-ember group-hover:underline">
          View Details →
        </span>
        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              className="text-ink-light hover:text-ember transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              className="text-ink-light hover:text-ember transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  </motion.div>
);

// ─── Page ─────────────────────────────────────────────────────────────────────

const ProjectGallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  const filtered =
    activeCategory === 'All'
      ? projects
      : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-bone">
      <div className="container-custom section-padding">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-12"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ink-light hover:text-ember transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
        </motion.div>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-sm font-bold uppercase tracking-widest text-ember mb-2">Gallery</h2>
          <p className="text-4xl md:text-5xl font-bold tracking-tight text-ink leading-tight">
            All Projects
          </p>
          <p className="text-ink-light mt-4 max-w-xl leading-relaxed">
            Every project I've shipped — click any card for a full case study with screenshots and links.
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap gap-3 mb-12 pb-12 border-b border-border"
        >
          {categories.map(cat => (
            <FilterPill
              key={cat}
              label={cat}
              active={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
            />
          ))}
          <span className="text-xs text-ink-light self-center ml-2">
            {filtered.length} project{filtered.length !== 1 ? 's' : ''}
          </span>
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="popLayout">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(project => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </AnimatePresence>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <GalleryDetailModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectGallery;
