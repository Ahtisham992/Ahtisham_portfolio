import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, X } from 'lucide-react';
import { personalInfo, projects, skills } from '../data/portfolio';

const InteractiveTerminal = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([
    { type: 'system', text: 'Welcome to M. Ahtisham\'s Portfolio Terminal v1.0' },
    { type: 'system', text: 'Type "help" to see available commands' },
    { type: 'prompt', text: '' }
  ]);
  const terminalRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);

  const commands = {
    help: () => [
      'Available commands:',
      '  about          - Learn about me',
      '  skills         - View my technical skills',
      '  projects       - List my projects',
      '  contact        - Get contact information',
      '  experience     - View work experience',
      '  social         - Social media links',
      '  resume         - Download resume',
      '  clear          - Clear terminal',
      '  exit           - Close terminal',
      '  ls             - List available sections',
      '  whoami         - Display current user'
    ],
    about: () => [
      personalInfo.bio,
      '',
      `📍 Location: ${personalInfo.location}`,
      `🎓 Institution: FAST-NUCES Islamabad`,
      `💼 Status: Final Year SE Student`
    ],
    skills: () => {
      const allSkills = [
        '=== Frontend ===',
        ...skills.frontend.map(s => `  ${s.name} - ${s.level}%`),
        '',
        '=== Backend ===',
        ...skills.backend.map(s => `  ${s.name} - ${s.level}%`),
        '',
        '=== AI/ML ===',
        ...skills.ai.map(s => `  ${s.name} - ${s.level}%`),
        '',
        '=== Cloud ===',
        ...skills.cloud.map(s => `  ${s.name} - ${s.level}%`)
      ];
      return allSkills;
    },
    projects: () => [
      'Featured Projects:',
      '',
      ...projects.map((p, i) => [
        `${i + 1}. ${p.title}`,
        `   ${p.shortDescription}`,
        `   Tech: ${p.technologies.slice(0, 3).join(', ')}`,
        ''
      ]).flat()
    ],
    contact: () => [
      'Contact Information:',
      `  📧 Email: ${personalInfo.email}`,
      `  📱 Phone: ${personalInfo.phone}`,
      `  📍 Location: ${personalInfo.location}`,
      '',
      'Type "social" for social media links'
    ],
    social: () => [
      'Social Media:',
      `  LinkedIn: ${personalInfo.social.linkedin}`,
      `  GitHub: ${personalInfo.social.github}`,
      `  Instagram: ${personalInfo.social.instagram}`
    ],
    experience: () => [
      'Work Experience:',
      '',
      '1. Software Engineer Intern @ Turing Intelligence',
      '   Jun 2024 - Aug 2024',
      '   • AI-powered application development',
      '',
      '2. Web Development Intern @ eaccounting360',
      '   Jun 2023 - Aug 2023',
      '   • MERN stack development'
    ],
    resume: () => {
      window.open(personalInfo.resumeUrl, '_blank');
      return ['Opening resume in new tab...'];
    },
    ls: () => ['about', 'skills', 'projects', 'experience', 'contact', 'social'],
    whoami: () => ['m.ahtisham@portfolio:~$'],
    clear: () => 'CLEAR',
    exit: () => 'EXIT'
  };

  const executeCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();

    if (trimmedCmd === '') return;

    const newOutput = [...output, { type: 'command', text: `$ ${cmd}` }];

    if (commands[trimmedCmd]) {
      const result = commands[trimmedCmd]();

      if (result === 'CLEAR') {
        setOutput([{ type: 'prompt', text: '' }]);
        return;
      }

      if (result === 'EXIT') {
        onClose();
        return;
      }

      result.forEach(line => {
        newOutput.push({ type: 'output', text: line });
      });
    } else {
      newOutput.push({
        type: 'error',
        text: `Command not found: ${trimmedCmd}. Type "help" for available commands.`
      });
    }

    newOutput.push({ type: 'prompt', text: '' });
    setOutput(newOutput);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      executeCommand(input);
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const matches = Object.keys(commands).filter(cmd =>
        cmd.startsWith(input.toLowerCase())
      );
      if (matches.length === 1) {
        setInput(matches[0]);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-4xl bg-gray-900 rounded-lg shadow-2xl overflow-hidden border border-gray-700"
        >
          {/* Terminal Header */}
          <div className="bg-gray-800 px-4 py-3 flex items-center justify-between border-b border-gray-700">
            <div className="flex items-center gap-3">
              {/* macOS-style traffic lights */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={onClose}
                  className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors"
                />
                <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-40 cursor-not-allowed" />
                <div className="w-3 h-3 rounded-full bg-green-500 opacity-40 cursor-not-allowed" />
              </div>
              <div className="flex items-center gap-2 ml-2">
                <Terminal className="w-4 h-4 text-green-400" />
                <span className="text-gray-300 text-sm font-medium">
                  m.ahtisham@portfolio:~
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 hover:bg-red-500/20 rounded transition-colors"
            >
              <X className="w-4 h-4 text-red-400" />
            </button>
          </div>

          {/* Terminal Body */}
          <div
            ref={terminalRef}
            className="bg-gray-900 text-gray-100 p-4 h-96 overflow-y-auto font-mono text-sm"
          >
            {output.map((line, i) => (
              <div key={i} className="mb-1">
                {line.type === 'system' && (
                  <span className="text-blue-400">{line.text}</span>
                )}
                {line.type === 'command' && (
                  <span className="text-green-400">{line.text}</span>
                )}
                {line.type === 'output' && (
                  <span className="text-gray-300">{line.text}</span>
                )}
                {line.type === 'error' && (
                  <span className="text-red-400">{line.text}</span>
                )}
                {line.type === 'prompt' && (
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">$</span>
                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      className="flex-1 bg-transparent outline-none text-gray-100"
                      autoFocus
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Terminal Footer */}
          <div className="bg-gray-800 px-4 py-2 border-t border-gray-700">
            <p className="text-xs text-gray-500">
              Press Tab for autocomplete • Type "help" for commands • Type "exit" to close
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default InteractiveTerminal;