import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';
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
          <h2 className="text-sm font-bold uppercase tracking-widest text-ember mb-2">Contact</h2>
          <p className="text-3xl font-medium tracking-tight text-ink">
            Start a conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          
          {/* Left: Contact Info & Links */}
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-12"
          >
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-ink-light mb-4">Email</h3>
              <a href={`mailto:${personalInfo.email}`} className="text-xl md:text-2xl font-medium text-ink hover:text-ember transition-colors inline-flex items-center gap-3">
                <Mail className="w-6 h-6 text-ember" />
                {personalInfo.email}
              </a>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-ink-light mb-4">Socials</h3>
              <div className="flex gap-6">
                <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-surface border border-border text-ink hover:text-ember hover:border-ember transition-all rounded-lg">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-surface border border-border text-ink hover:text-ember hover:border-ember transition-all rounded-lg">
                  <Github className="w-6 h-6" />
                </a>
                <a href={personalInfo.social.instagram} target="_blank" rel="noopener noreferrer" className="p-3 bg-surface border border-border text-ink hover:text-ember hover:border-ember transition-all rounded-lg">
                  <Instagram className="w-6 h-6" />
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

          {/* Right: JS Style Form */}
          <motion.div 
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-surface p-6 sm:p-8 border border-border rounded-lg shadow-sm relative overflow-hidden"
          >
            <div className="flex gap-2 mb-6 border-b border-border pb-4">
              <div className="w-3 h-3 rounded-full bg-border" />
              <div className="w-3 h-3 rounded-full bg-border" />
              <div className="w-3 h-3 rounded-full bg-border" />
            </div>
            
            <div className="text-ink-light font-mono text-sm mb-6 flex items-center gap-2">
              <span className="text-ember font-bold">const</span> sendMessage = <span className="text-ember font-bold">async</span> (data) =&gt; &#123;
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 font-mono text-sm pl-4 border-l-2 border-border/50 ml-2">
              <div>
                <label className="block text-ink-light mb-1">
                  <span className="text-ember font-bold">const</span> name = 
                </label>
                <input 
                  type="text" 
                  required
                  placeholder="'Your Name'"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-bone border border-border text-ink focus:border-ember focus:ring-1 focus:ring-ember focus:outline-none py-2 px-3 rounded-md transition-all"
                />
              </div>

              <div>
                <label className="block text-ink-light mb-1">
                  <span className="text-ember font-bold">const</span> email = 
                </label>
                <input 
                  type="email" 
                  required
                  placeholder="'your@email.com'"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-bone border border-border text-ink focus:border-ember focus:ring-1 focus:ring-ember focus:outline-none py-2 px-3 rounded-md transition-all"
                />
              </div>

              <div>
                <label className="block text-ink-light mb-1">
                  <span className="text-ember font-bold">const</span> message = 
                </label>
                <textarea 
                  required
                  rows="3"
                  placeholder="`Hello Ahtisham...`"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-bone border border-border text-ink focus:border-ember focus:ring-1 focus:ring-ember focus:outline-none p-3 rounded-md resize-none transition-all"
                />
              </div>

              <div className="pt-2">
                <button 
                  type="submit" 
                  disabled={status === 'sending' || status === 'success'}
                  className="w-full bg-ember text-white font-sans font-medium px-6 py-3 rounded-md hover:bg-[#e04518] transition-colors disabled:opacity-50 shadow-sm"
                >
                  {status === 'idle' && 'await api.send(data)'}
                  {status === 'sending' && 'Sending...'}
                  {status === 'success' && 'return { success: true }'}
                  {status === 'error' && 'throw new Error()'}
                </button>
              </div>
            </form>

            <div className="text-ink-light font-mono text-sm mt-6">
              &#125;;
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;