// ========================================
// FILE: src/App.jsx - FINAL VERSION WITH EASTER EGG
// ========================================
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import ProjectGallery from './components/ProjectGallery';
import VideoIntro from './components/VideoIntro';
import KonamiCode from './components/KonamiCode';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { getThemeClasses } from './theme/theme';

// Home Page Component
const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
};

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const themeClasses = getThemeClasses();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Router>
      <div className={`min-h-screen ${themeClasses.bgPrimary} transition-colors duration-300`}>
        <ScrollProgress />
        <Navbar />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectGallery />} />
          <Route path="/intro" element={<VideoIntro />} />
        </Routes>

        <Footer />

        {/* Konami Code Easter Egg */}
        <KonamiCode />

        {/* Scroll to Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              onClick={scrollToTop}
              className={`fixed bottom-8 right-8 z-50 p-3 rounded-full ${themeClasses.gradient} text-white shadow-lg hover:shadow-xl transition-shadow duration-300`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowUp className="w-6 h-6" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;