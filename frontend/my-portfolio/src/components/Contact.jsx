// ========================================
// FILE: src/components/Contact.jsx
// ========================================
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Instagram, CheckCircle, AlertCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import emailjs from 'emailjs-com';
import { getThemeClasses } from '../theme/theme';

const Contact = () => {
  const [ref, isInView] = useInView();
  const themeClasses = getThemeClasses();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      // Replace with your EmailJS credentials
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'YOUR_PUBLIC_KEY'
      );

      setStatus({
        type: 'success',
        message: 'Thank you for your message! I\'ll get back to you soon.'
      });
      setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again or contact me directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: 'Phone', value: personalInfo.phone },
    { icon: MapPin, label: 'Location', value: personalInfo.location },
  ];

  const socialLinks = [
    { icon: Linkedin, href: personalInfo.social.linkedin },
    { icon: Github, href: personalInfo.social.github },
    { icon: Instagram, href: personalInfo.social.instagram },
  ];

  return (
    <section id="contact" className={`section-padding ${themeClasses.bgPrimary}`}>
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Get In Touch
          </h2>
          <div className={`w-24 h-1 ${themeClasses.gradient} mx-auto rounded-full`} />
          <p className={`${themeClasses.textSecondary} text-lg mt-4`}>
            Ready to collaborate? Let's discuss your next project!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className={`text-2xl font-bold ${themeClasses.textPrimary} mb-6`}>
              Let's Connect
            </h3>
            <p className={`${themeClasses.textSecondary} text-lg mb-8`}>
              I'm always interested in new opportunities and challenging projects.
              Whether you're looking for a developer, have a question, or just want to connect, feel free to reach out!
            </p>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${themeClasses.gradient} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className={`font-semibold ${themeClasses.textPrimary}`}>{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className={`${themeClasses.textAccent} hover:underline`}>
                        {info.value}
                      </a>
                    ) : (
                      <p className={themeClasses.textSecondary}>{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div>
              <h4 className={`text-lg font-bold ${themeClasses.textPrimary} mb-4`}>Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 ${themeClasses.gradient} rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow`}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {status.message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mb-6 p-4 rounded-xl flex items-center gap-3 ${
                  status.type === 'success'
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
                    : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300'
                }`}
              >
                {status.type === 'success' ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  <AlertCircle className="w-5 h-5" />
                )}
                <p>{status.message}</p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className={`${themeClasses.bgSecondary} p-8 rounded-2xl shadow-lg space-y-6`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={`block ${themeClasses.textPrimary} font-semibold mb-2`}>
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl ${themeClasses.border} border ${themeClasses.bgPrimary} ${themeClasses.textPrimary} focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all`}
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className={`block ${themeClasses.textPrimary} font-semibold mb-2`}>
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl ${themeClasses.border} border ${themeClasses.bgPrimary} ${themeClasses.textPrimary} focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all`}
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className={`block ${themeClasses.textPrimary} font-semibold mb-2`}>
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-xl ${themeClasses.border} border ${themeClasses.bgPrimary} ${themeClasses.textPrimary} focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all`}
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className={`block ${themeClasses.textPrimary} font-semibold mb-2`}>
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-xl ${themeClasses.border} border ${themeClasses.bgPrimary} ${themeClasses.textPrimary} focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all`}
                  placeholder="Project Collaboration"
                />
              </div>

              <div>
                <label className={`block ${themeClasses.textPrimary} font-semibold mb-2`}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className={`w-full px-4 py-3 rounded-xl ${themeClasses.border} border ${themeClasses.bgPrimary} ${themeClasses.textPrimary} focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none resize-none transition-all`}
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full ${themeClasses.gradient} text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                <Send className="w-5 h-5" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;