import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { achievements, siteMetadata } from '../data/portfolio';

const Achievements = () => {
  return (
    <section id="achievements" className="section-padding border-t border-border bg-surface">
      <div className="container-custom">
        <div className="mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-ember mb-2">{siteMetadata.achievements.heading}</h2>
          <p className="text-3xl font-medium tracking-tight text-ink max-w-2xl">
            {siteMetadata.achievements.description}
          </p>
        </div>

        <div className="border-t border-border">
          {achievements.map((item, index) => (
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
