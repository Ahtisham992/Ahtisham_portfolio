import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AuroraBackground from './components/AuroraBackground';
import PortfolioChatbot from './components/PortfolioChatbot';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';
import { ThemeProvider } from './context/ThemeContext';

const HomePage = () => (
  <>
    <Hero />
    <About />
    <Projects />
    <Experience />
    <Skills />
    <Achievements />
    <Contact />
  </>
);

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-bone text-ink relative transition-colors duration-300">
          <Preloader />
          <CustomCursor />
          <ScrollToTop />
          <AuroraBackground />
          <Navbar />

          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>

          <Footer />
          <PortfolioChatbot />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;