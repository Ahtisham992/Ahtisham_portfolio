import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, education, certifications } from '../data/portfolio';

const About = () => {
  return (
    <section id="about" className="section-padding border-t border-border bg-bone">
      <div className="container-custom">
        <div className="mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-ember mb-2">About</h2>
          <p className="text-3xl font-medium tracking-tight text-ink max-w-2xl">
            Engineering background and current focus.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">
          
          {/* Bio Card (Span 2 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-surface border border-border p-8"
          >
            <h3 className="text-xs font-bold uppercase tracking-widest text-ink-light mb-6">Bio</h3>
            <p className="text-lg text-ink leading-relaxed">
              {personalInfo.bio}
            </p>
          </motion.div>

          {/* Personal Image Card */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-surface border border-border overflow-hidden h-64 md:h-auto group relative flex items-center justify-center p-4"
          >
            <img 
              src="/Ahtisham.png" 
              alt="Muhammad Ahtisham" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 border border-border transition-all duration-500 group-hover:scale-[1.02]"
            />
          </motion.div>

          {/* Education Card */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-surface border border-border p-8"
          >
            <h3 className="text-xs font-bold uppercase tracking-widest text-ink-light mb-6">Education</h3>
            <div className="space-y-2">
              <h4 className="text-lg font-bold text-ink">{education.degree}</h4>
              <p className="text-ink-light font-medium">{education.institution}</p>
              <p className="text-sm text-ink-light font-mono mt-4">{education.period}</p>
            </div>
          </motion.div>

          {/* Focus Card */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-surface border border-border p-8"
          >
            <h3 className="text-xs font-bold uppercase tracking-widest text-ink-light mb-6">Current Focus</h3>
            <ul className="space-y-3">
              <li className="text-ink font-medium">Distributed System Performance</li>
              <li className="text-ink font-medium">LLM Integrations & Agents</li>
              <li className="text-ink font-medium">Full-Stack SaaS Architecture</li>
            </ul>
          </motion.div>

          {/* Stats Card */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-surface border border-border p-8 flex flex-col justify-between"
          >
            <h3 className="text-xs font-bold uppercase tracking-widest text-ink-light mb-6">By the Numbers</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-3xl font-bold text-ink">{personalInfo.stats.projects}</div>
                <div className="text-xs text-ink-light mt-1 uppercase tracking-wider">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-ink">{personalInfo.stats.internships}</div>
                <div className="text-xs text-ink-light mt-1 uppercase tracking-wider">Internships</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-ink">{personalInfo.stats.technologies}</div>
                <div className="text-xs text-ink-light mt-1 uppercase tracking-wider">Technologies</div>
              </div>
            </div>
          </motion.div>

          {/* Certifications Card (Span 3 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3 bg-surface border border-border p-8"
          >
            <h3 className="text-xs font-bold uppercase tracking-widest text-ink-light mb-6">Certifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {certifications.slice(0, 6).map((cert, index) => (
                <div key={index} className="border-l-2 border-border pl-4">
                  <h4 className="text-sm font-bold text-ink mb-1 line-clamp-2">{cert.title}</h4>
                  <div className="text-xs text-ink-light font-medium">{cert.issuer}</div>
                  <div className="text-xs text-ink-light font-mono mt-2">{cert.date}</div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;