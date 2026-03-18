// ========================================
// FILE: src/App.jsx
// TASK 6.1: Removed import of App.css (Vite boilerplate — unused).
//           Delete src/App.css from the project entirely.
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
import PhotoIntro from './components/Photointro';   // TASK 6.3: default /intro route
import VideoIntro from './components/VideoIntro';   // kept — has its own fallback guard
import KonamiCode from './components/KonamiCode';
import PortfolioChatbot from './components/PortfolioChatbot';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { getThemeClasses } from './theme/theme';

const HomePage = () => (
  <>
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Experience />
    <Contact />
  </>
);

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const themeClasses = getThemeClasses();

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <Router>
      <div className={`min-h-screen ${themeClasses.bgPrimary} transition-colors duration-300`}>
        <ScrollProgress />
        <Navbar />

        <Routes>
          <Route path="/"        element={<HomePage />} />
          <Route path="/projects" element={<ProjectGallery />} />
          {/*
            TASK 6.3: /intro now renders PhotoIntro by default.
            VideoIntro is retained with its own onError fallback (Task 3.2)
            but is no longer the default — swap if you add a real video file.
          */}
          <Route path="/intro"   element={<PhotoIntro />} />
        </Routes>

        <Footer />
        <KonamiCode />
        <PortfolioChatbot />

        {/* Scroll-to-top button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              onClick={scrollToTop}
              className={`fixed bottom-24 right-6 z-50 p-3 rounded-md bg-slate-800 border border-slate-700 text-slate-300 shadow-sm hover:text-white hover:bg-slate-700 hover:border-slate-500 transition-all duration-300`}
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