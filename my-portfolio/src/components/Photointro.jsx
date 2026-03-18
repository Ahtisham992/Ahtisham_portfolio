import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, MapPin, Mail, Phone, Github, Linkedin, Instagram } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { getThemeClasses } from '../theme/theme';
import { useNavigate } from 'react-router-dom';

const PhotoIntro = () => {
  const themeClasses = getThemeClasses();
  const navigate = useNavigate();

  const scrollToPortfolio = () => {
    const heroSection = document.getElementById('hero-section');
    if (heroSection) {
      const offset = heroSection.offsetHeight + 100;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      const contactSection = document.querySelector('#contact');
      if (contactSection) {
        const offset = 80;
        const elementPosition = contactSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <div className={`${themeClasses.bgPrimary} pt-20`}>
      {/* Hero Section */}
      <div id="hero-section" className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <div className="relative">
              {/* Decorative background elements */}
              <div className={`absolute -top-4 -left-4 w-72 h-72 bg-primary-500 rounded-2xl opacity-10 blur-2xl`} />
              <div className={`absolute -bottom-4 -right-4 w-72 h-72 bg-accent-500 rounded-2xl opacity-10 blur-2xl`} />
              
              {/* Photo Container */}
              <div className={`relative ${themeClasses.card} p-2 shadow-2xl`}>
                <div className="bg-slate-900 rounded-md overflow-hidden border border-slate-800 aspect-square">
                  <img
                    src="/Ahtisham.jpg" // Add your photo to public folder
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-center opacity-90 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-500"
                    onError={(e) => {
                      // Fallback to placeholder if image not found
                      e.target.src = "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=800&q=80";
                    }}
                  />
                </div>
              </div>

              {/* Floating skill badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className={`absolute -bottom-6 -right-6 ${themeClasses.card} shadow-xl p-4`}
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className={`text-sm font-semibold ${themeClasses.textPrimary}`}>Available for Work</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Introduction */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 md:order-2"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-4"
            >
              <span className="text-lg font-mono text-primary-500">
                Hello, I'm
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-6xl font-bold mb-4 text-gradient"
            >
              {personalInfo.name}
            </motion.h1>

            {/* Title with typing effect */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className={`text-2xl md:text-3xl font-semibold ${themeClasses.textPrimary} mb-6`}
            >
              {personalInfo.title}
            </motion.p>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className={`${themeClasses.textSecondary} text-lg leading-relaxed mb-8`}
            >
              {personalInfo.bio}
            </motion.p>

            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="space-y-3 mb-8"
            >
              <div className={`flex items-center gap-3 ${themeClasses.textSecondary}`}>
                <MapPin className="w-5 h-5 text-primary-500" />
                <span>{personalInfo.location}</span>
              </div>
              <div className={`flex items-center gap-3 ${themeClasses.textSecondary}`}>
                <Mail className="w-5 h-5 text-primary-500" />
                <a href={`mailto:${personalInfo.email}`} className={`hover:${themeClasses.textAccent} transition-colors`}>
                  {personalInfo.email}
                </a>
              </div>
              <div className={`flex items-center gap-3 ${themeClasses.textSecondary}`}>
                <Phone className="w-5 h-5 text-primary-500" />
                <a href={`tel:${personalInfo.phone}`} className={`hover:${themeClasses.textAccent} transition-colors`}>
                  {personalInfo.phone}
                </a>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4 mb-8"
            >
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md transition-all hover:scale-110"
              >
                <Github className={`w-5 h-5 ${themeClasses.textPrimary}`} />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md transition-all hover:scale-110"
              >
                <Linkedin className="w-5 h-5 text-blue-500" />
              </a>
              <a
                href={personalInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md transition-all hover:scale-110"
              >
                <Instagram className="w-5 h-5 text-pink-500" />
              </a>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                onClick={handleContactClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 ${themeClasses.gradient} text-white rounded-md font-bold shadow-lg hover:shadow-xl transition-all inline-flex items-center justify-center`}
              >
                Get In Touch
              </motion.button>
              
              <motion.a
                href={personalInfo.resumeUrl}
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 ${themeClasses.btnOutline} rounded-md font-bold hover:shadow-lg transition-all inline-flex items-center justify-center gap-2`}
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center mt-16"
        >
          <button
            onClick={scrollToPortfolio}
            className="inline-flex flex-col items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors group"
          >
            <span className="text-sm font-medium">Explore My Work</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </button>
        </motion.div>
      </div>

      {/* About Section with Stats */}
      <div className="py-16 bg-gradient-to-b from-transparent to-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              What I Bring to the Table
            </h2>
            <div className={`w-24 h-1 ${themeClasses.gradient} mx-auto rounded-full mb-8`} />
            
            <p className={`${themeClasses.textSecondary} text-lg leading-relaxed mb-12 max-w-3xl mx-auto`}>
              As a passionate BS Software Engineering student at FAST-NUCES Islamabad, I specialize in building 
              innovative solutions using modern technologies. From full-stack web applications to cross-platform 
              mobile apps and AI-powered systems, I love turning ideas into reality.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {Object.entries(personalInfo.stats).map(([key, value], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`${themeClasses.card} p-6 hover:shadow-xl transition-all`}
                >
                  <div className="text-4xl font-bold text-gradient mb-2">
                    {value}
                  </div>
                  <div className={`${themeClasses.textSecondary} text-sm capitalize font-medium`}>
                    {key}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tech Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-3 mb-12"
            >
              {['React.js', 'React Native', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'AWS', 'Machine Learning'].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="px-4 py-2 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-md font-mono text-sm"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* Final CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-lg text-gray-600 mb-6">
                Interested in working together? Let's create something amazing!
              </p>
              <motion.button
                onClick={handleContactClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-10 py-4 ${themeClasses.gradient} text-white rounded-md font-bold shadow-lg hover:shadow-xl transition-all inline-flex items-center justify-center`}
              >
                Start a Conversation
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PhotoIntro;