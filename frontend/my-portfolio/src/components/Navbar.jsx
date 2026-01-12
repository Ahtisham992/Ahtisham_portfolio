// ========================================
// FILE: src/components/Navbar.jsx - UPDATED
// ========================================
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Home, User, Code2, Briefcase, Mail, FolderOpen, Video } from 'lucide-react';
import { useTheme } from '../theme/ThemeContext';
import { getThemeClasses } from '../theme/theme';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const themeClasses = getThemeClasses();
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'Home', href: '/', icon: Home, type: 'route' },
    { name: 'Video Intro', href: '/intro', icon: Video, type: 'route' },
    { name: 'Projects Gallery', href: '/projects', icon: FolderOpen, type: 'route' },
    { name: 'About', href: '#about', icon: User, type: 'scroll' },
    { name: 'Skills', href: '#skills', icon: Code2, type: 'scroll' },
    { name: 'Experience', href: '#experience', icon: Briefcase, type: 'scroll' },
    { name: 'Contact', href: '#contact', icon: Mail, type: 'scroll' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, item) => {
    e.preventDefault();
    setIsOpen(false);

    if (item.type === 'route') {
      navigate(item.href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // If not on home page, navigate there first
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          scrollToSection(item.href);
        }, 100);
      } else {
        scrollToSection(item.href);
      }
    }
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const isActive = (item) => {
    if (item.type === 'route') {
      return location.pathname === item.href;
    }
    return false;
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? `${themeClasses.cardGlass} shadow-lg`
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.button
              onClick={(e) => handleNavClick(e, { href: '/', type: 'route' })}
              className={`text-2xl font-black relative ${
                !isScrolled 
                  ? 'text-white px-4 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 shadow-lg' 
                  : 'text-gradient'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              M. Ahtisham
            </motion.button>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item);
                
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`${
                      active
                        ? 'text-primary-600 dark:text-primary-400'
                        : !isScrolled 
                          ? 'text-white font-semibold drop-shadow-lg' 
                          : `${themeClasses.textSecondary} hover:text-primary-600 dark:hover:text-primary-400`
                    } font-medium transition-colors relative group flex items-center gap-2`}
                    whileHover={{ y: -2 }}
                  >
                    <Icon className="w-4 h-4" />
                    {item.name}
                    <span className={`absolute bottom-0 left-0 ${
                      active ? 'w-full' : 'w-0'
                    } h-0.5 ${
                      !isScrolled ? 'bg-white' : themeClasses.gradient
                    } group-hover:w-full transition-all duration-300`} />
                  </motion.a>
                );
              })}
              
              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-colors ${
                  !isScrolled
                    ? 'hover:bg-white/20 text-white'
                    : `hover:bg-gray-200 dark:hover:bg-gray-800 ${themeClasses.textSecondary}`
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isDark ? (
                  <Sun className="w-5 h-5 text-yellow-400" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-2 sm:space-x-4">
              <motion.button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-colors ${
                  !isScrolled
                    ? 'hover:bg-white/20 text-white'
                    : `hover:bg-gray-200 dark:hover:bg-gray-800 ${themeClasses.textSecondary}`
                }`}
                whileTap={{ scale: 0.9 }}
              >
                {isDark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5" />}
              </motion.button>
              
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-lg transition-colors ${
                  !isScrolled
                    ? 'hover:bg-white/20 text-white'
                    : `hover:bg-gray-200 dark:hover:bg-gray-800 ${themeClasses.textPrimary}`
                }`}
                whileTap={{ scale: 0.9 }}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className={`fixed top-0 right-0 h-full w-[85vw] max-w-sm ${themeClasses.bgCard} z-50 lg:hidden shadow-2xl overflow-y-auto`}
            >
              <div className="flex flex-col h-full p-6">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-xl font-bold text-gradient">Menu</span>
                  <button 
                    onClick={() => setIsOpen(false)} 
                    className={`p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors ${themeClasses.textPrimary}`}
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <nav className="flex flex-col space-y-2">
                  {navItems.map((item, index) => {
                    const Icon = item.icon;
                    const active = isActive(item);
                    
                    return (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item)}
                        className={`text-lg font-medium py-3 px-4 rounded-lg transition-colors flex items-center gap-3 ${
                          active
                            ? 'bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400'
                            : `hover:bg-primary-50 dark:hover:bg-primary-900/20 ${themeClasses.textPrimary}`
                        }`}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Icon className="w-5 h-5" />
                        {item.name}
                      </motion.a>
                    );
                  })}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;