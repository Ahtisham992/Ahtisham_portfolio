import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolio';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate sending
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section id="contact" className="section-padding border-t border-border bg-bone">
      <div className="container-custom">
        <div className="mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-ink-light mb-2">Contact</h2>
          <p className="text-3xl font-medium tracking-tight text-ink max-w-2xl">
            Start a conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left: Terminal Style Form */}
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-ink p-6 sm:p-8 border border-border"
          >
            <div className="flex gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            
            <div className="text-[#4af626] font-mono text-sm mb-6">
              $ ./send_message.sh
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 font-mono text-sm">
              <div>
                <label className="block text-ink-light mb-2">
                  <span className="text-[#4af626] mr-2">❯</span>
                  Enter your name:
                </label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-transparent border-b border-ink-light text-bone focus:border-[#4af626] focus:outline-none py-1 transition-colors"
                />
              </div>

              <div>
                <label className="block text-ink-light mb-2">
                  <span className="text-[#4af626] mr-2">❯</span>
                  Enter your email:
                </label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-transparent border-b border-ink-light text-bone focus:border-[#4af626] focus:outline-none py-1 transition-colors"
                />
              </div>

              <div>
                <label className="block text-ink-light mb-2">
                  <span className="text-[#4af626] mr-2">❯</span>
                  Enter your message:
                </label>
                <textarea 
                  required
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-transparent border border-ink-light text-bone focus:border-[#4af626] focus:outline-none p-3 resize-none transition-colors mt-2"
                />
              </div>

              <button 
                type="submit" 
                disabled={status === 'sending' || status === 'success'}
                className="bg-[#4af626]/10 text-[#4af626] border border-[#4af626]/30 px-6 py-2 hover:bg-[#4af626]/20 transition-colors disabled:opacity-50"
              >
                {status === 'idle' && 'Execute'}
                {status === 'sending' && 'Executing...'}
                {status === 'success' && 'Message Sent Successfully'}
                {status === 'error' && 'Execution Failed'}
              </button>
            </form>
          </motion.div>

          {/* Right: Links */}
          <motion.div 
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-12"
          >
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-ink-light mb-4">Email</h3>
              <a href={`mailto:${personalInfo.email}`} className="text-xl md:text-2xl font-medium text-ink hover:text-ember transition-colors">
                {personalInfo.email}
              </a>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-ink-light mb-4">Socials</h3>
              <div className="flex flex-col space-y-4">
                <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-xl font-medium text-ink hover:text-ember transition-colors inline-flex items-center gap-2">
                  LinkedIn &rarr;
                </a>
                <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="text-xl font-medium text-ink hover:text-ember transition-colors inline-flex items-center gap-2">
                  GitHub &rarr;
                </a>
                <a href={personalInfo.social.instagram} target="_blank" rel="noopener noreferrer" className="text-xl font-medium text-ink hover:text-ember transition-colors inline-flex items-center gap-2">
                  Instagram &rarr;
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-ink-light mb-4">Location</h3>
              <p className="text-xl font-medium text-ink">
                {personalInfo.location}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;