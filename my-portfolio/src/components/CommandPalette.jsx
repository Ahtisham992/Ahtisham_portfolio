import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Home, User, Briefcase, Code, Award, Mail, Moon, Sun, Download, Command } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { personalInfo } from '../data/portfolio';

const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const { theme, toggleTheme } = useTheme();

  // Handle global keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setSearchQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const commands = [
    { id: 'home', title: 'Go to Home', icon: Home, action: () => { window.location.hash = '#home'; setIsOpen(false); } },
    { id: 'about', title: 'Go to About', icon: User, action: () => { window.location.hash = '#about'; setIsOpen(false); } },
    { id: 'projects', title: 'Go to Projects', icon: Code, action: () => { window.location.hash = '#projects'; setIsOpen(false); } },
    { id: 'experience', title: 'Go to Experience', icon: Briefcase, action: () => { window.location.hash = '#experience'; setIsOpen(false); } },
    { id: 'achievements', title: 'Go to Achievements', icon: Award, action: () => { window.location.hash = '#achievements'; setIsOpen(false); } },
    { id: 'contact', title: 'Go to Contact', icon: Mail, action: () => { window.location.hash = '#contact'; setIsOpen(false); } },
    { id: 'theme', title: `Switch to ${theme === 'light' ? 'Dark' : 'Light'} Theme`, icon: theme === 'light' ? Moon : Sun, action: () => { toggleTheme(); setIsOpen(false); } },
    { id: 'resume', title: 'Download Resume', icon: Download, action: () => { window.open(personalInfo.resumeUrl, '_blank'); setIsOpen(false); } }
  ];

  const filteredCommands = commands.filter(cmd =>
    cmd.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    setSelectedIndex(0);
  }, [searchQuery]);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredCommands[selectedIndex]) {
        filteredCommands[selectedIndex].action();
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[100] bg-ink/20 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-[15vh] left-1/2 -translate-x-1/2 w-full max-w-xl z-[101] px-4"
          >
            <div className="bg-bone border border-border shadow-2xl overflow-hidden flex flex-col">
              <div className="flex items-center px-4 py-4 border-b border-border bg-surface">
                <Search className="w-5 h-5 text-ink-light mr-3 shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Type a command or search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent outline-none text-ink text-lg placeholder:text-ink-light/50 min-w-0"
                />
                <div className="flex items-center gap-1 text-[10px] font-bold text-ink-light bg-bone px-2 py-1 border border-border shrink-0 ml-2">
                  <Command className="w-3 h-3" /> K
                </div>
              </div>

              <div className="max-h-[60vh] overflow-y-auto p-2">
                {filteredCommands.length === 0 ? (
                  <div className="py-12 text-center text-ink-light text-sm">
                    No commands found.
                  </div>
                ) : (
                  filteredCommands.map((cmd, index) => {
                    const Icon = cmd.icon;
                    const isSelected = index === selectedIndex;
                    return (
                      <button
                        key={cmd.id}
                        onClick={cmd.action}
                        onMouseEnter={() => setSelectedIndex(index)}
                        className={`w-full flex items-center px-4 py-3 text-left transition-colors duration-150 ${isSelected ? 'bg-ember text-white' : 'text-ink hover:bg-surface'
                          }`}
                      >
                        <Icon className={`w-5 h-5 mr-3 shrink-0 ${isSelected ? 'text-white' : 'text-ink-light'}`} />
                        <span className="font-medium text-sm">{cmd.title}</span>
                      </button>
                    );
                  })
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
