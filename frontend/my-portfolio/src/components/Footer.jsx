// ========================================
// FILE: src/components/Footer.jsx
// ========================================
import React from 'react';
import { Linkedin, Github, Instagram, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { getThemeClasses } from '../theme/theme';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const themeClasses = getThemeClasses();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Web Development (MERN Stack)',
    'Mobile App Development (Flutter, ReactNative)',
    'AI/Machine Learning',
    'Database Design & Management',
    'UI/UX Design',
    'API Development',
  ];

  const socialLinks = [
    { icon: Linkedin, href: personalInfo.social.linkedin },
    { icon: Github, href: personalInfo.social.github },
    { icon: Instagram, href: personalInfo.social.instagram },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">
              {personalInfo.name}
            </h3>
            <p className="text-gray-400 mb-4">
              Software Engineer passionate about creating innovative solutions and delivering exceptional user experiences.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-400">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-400">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              {services.map((service, index) => (
                <li key={index}>• {service}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © {currentYear} {personalInfo.name}. All rights reserved. Built with
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            and dedication.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;