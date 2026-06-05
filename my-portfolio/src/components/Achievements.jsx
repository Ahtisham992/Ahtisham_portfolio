import React from 'react';
import { motion } from 'framer-motion';

const achievementsData = [
  {
    title: "Software Engineer (Part-time)",
    description: "Contributing to a distributed system simulation platform using React, Node.js, and TypeScript at Turing Intelligence.",
    date: "2026"
  },
  {
    title: "Prismora AI Deployment",
    description: "Built and deployed an AI podcast summarisation platform using Whisper AI and NLP transformers.",
    date: "2025"
  },
  {
    title: "Web Development Intern",
    description: "Implemented full-stack features using the MERN stack and optimized MySQL databases at eAccounting360.",
    date: "2024"
  },
  {
    title: "SalesCare Service Center System",
    description: "Delivered a comprehensive ERP platform with 50+ REST APIs for complaint and inventory management.",
    date: "2025"
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="section-padding border-t border-border bg-bone">
      <div className="container-custom">
        <div className="mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-ink-light mb-2">Achievements</h2>
          <p className="text-3xl font-medium tracking-tight text-ink max-w-2xl">
            Key milestones and delivered projects.
          </p>
        </div>

        <div className="border-t border-border">
          {achievementsData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col md:flex-row justify-between py-8 border-b border-border group"
            >
              <div className="md:w-1/3 pr-8 mb-4 md:mb-0">
                <h3 className="text-xl font-bold text-ink">{item.title}</h3>
                <div className="text-sm font-mono text-ink-light mt-2">{item.date}</div>
              </div>
              <div className="md:w-2/3">
                <p className="text-ink-light leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
