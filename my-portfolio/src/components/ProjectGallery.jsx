import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, Play, Filter, Calendar, Tag, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '../data/portfolio';
import { getThemeClasses } from '../theme/theme';

const ProjectGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const themeClasses = getThemeClasses();

  const categories = ['All', ...new Set(projects.map(p => p.category))];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const nextImage = () => {
    if (selectedProject && selectedProject.media.images.length > 0) {
      setCurrentImageIndex((prev) => 
        (prev + 1) % selectedProject.media.images.length
      );
    }
  };

  const prevImage = () => {
    if (selectedProject && selectedProject.media.images.length > 0) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.media.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className={`min-h-screen ${themeClasses.bgPrimary} pt-24 pb-16`}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-4">
            Project Gallery
          </h1>
          <p className={`${themeClasses.textSecondary} text-lg max-w-2xl mx-auto`}>
            Explore my complete portfolio of projects with detailed insights, media, and live demos
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <Filter className={`w-5 h-5 ${themeClasses.textSecondary} mr-2`} />
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? `${themeClasses.gradient} text-white shadow-lg`
                  : `${themeClasses.bgCard} ${themeClasses.textSecondary} hover:shadow-md`
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => {
                  setSelectedProject(project);
                  setCurrentImageIndex(0);
                }}
                className={`${themeClasses.card} overflow-hidden cursor-pointer group`}
              >
                {/* Thumbnail */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.media.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay Icons */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    {project.media.video && (
                      <div className="bg-red-500 text-white p-2 rounded-full shadow-lg">
                        <Play className="w-4 h-4" />
                      </div>
                    )}
                    {project.liveDemo && (
                      <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        Live
                      </div>
                    )}
                    {project.featured && (
                      <div className={`${themeClasses.gradient} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                        Featured
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-primary-500" />
                    <span className={`text-sm ${themeClasses.textSecondary}`}>
                      {project.date}
                    </span>
                  </div>
                  
                  <h3 className={`text-xl font-bold ${themeClasses.textPrimary} mb-2 line-clamp-1`}>
                    {project.title}
                  </h3>
                  
                  <p className={`${themeClasses.textSecondary} text-sm mb-4 line-clamp-2`}>
                    {project.shortDescription}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <span className={`text-sm font-semibold ${themeClasses.textAccent}`}>
                      View Details →
                    </span>
                    <div className="flex gap-2">
                      {project.github && (
                        <Github className="w-5 h-5 text-gray-400 group-hover:text-primary-500 transition-colors" />
                      )}
                      {project.liveDemo && (
                        <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors" />
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className={`${themeClasses.bgCard} rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto my-8`}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Image Carousel */}
              {selectedProject.media.images.length > 0 && (
                <div className="relative h-96 bg-gray-900">
                  <img
                    src={selectedProject.media.images[currentImageIndex]}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {selectedProject.media.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors"
                      >
                        <ChevronLeft className="w-6 h-6 text-white" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors"
                      >
                        <ChevronRight className="w-6 h-6 text-white" />
                      </button>
                      
                      {/* Image Indicators */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {selectedProject.media.images.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setCurrentImageIndex(i)}
                            className={`w-2 h-2 rounded-full transition-all ${
                              i === currentImageIndex 
                                ? 'bg-white w-8' 
                                : 'bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Tag className="w-5 h-5 text-primary-500" />
                  <span className={`px-3 py-1 ${themeClasses.gradient} text-white rounded-full text-sm font-medium`}>
                    {selectedProject.category}
                  </span>
                  <span className={`text-sm ${themeClasses.textSecondary}`}>
                    {selectedProject.date}
                  </span>
                </div>

                <h2 className={`text-4xl font-bold ${themeClasses.textPrimary} mb-4`}>
                  {selectedProject.title}
                </h2>
                
                <p className={`${themeClasses.textSecondary} text-lg mb-6 leading-relaxed`}>
                  {selectedProject.description}
                </p>

                {/* Video Player (if available) */}
                {selectedProject.media.video && (
                  <div className="mb-8">
                    <h3 className={`text-xl font-bold ${themeClasses.textPrimary} mb-4 flex items-center gap-2`}>
                      <Play className="w-5 h-5 text-red-500" />
                      Demo Video
                    </h3>
                    <div className="aspect-video rounded-lg overflow-hidden bg-gray-900">
                      <iframe
                        src={selectedProject.media.video}
                        className="w-full h-full"
                        title="Project Demo Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 mb-8">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-6 py-3 ${themeClasses.gradient} text-white rounded-lg font-medium hover:shadow-lg transition-all`}
                    >
                      <Github className="w-5 h-5" />
                      View on GitHub
                    </a>
                  )}
                  {selectedProject.liveDemo && (
                    <a
                      href={selectedProject.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium hover:shadow-lg transition-all`}
                    >
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
                    </a>
                  )}
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h3 className={`text-xl font-bold ${themeClasses.textPrimary} mb-4`}>
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg font-medium"
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
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedProject.features.map((feature, i) => (
                      <li
                        key={i}
                        className={`flex items-start ${themeClasses.textSecondary}`}
                      >
                        <span className="text-primary-500 font-bold mr-3 mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectGallery;