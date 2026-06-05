import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';

const Skills = () => {
  return (
    <section id="capabilities" className="section-padding border-t border-border bg-bone">
      <div className="container-custom">
        <div className="mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-ink-light mb-2">Capabilities</h2>
          <p className="text-3xl font-medium tracking-tight text-ink max-w-2xl">
            Core technologies and tools I work with daily.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-border pt-12">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h3 className="text-sm font-bold uppercase tracking-widest text-ink mb-6 pb-2 border-b border-border capitalize">
                {category}
              </h3>
              <ul className="space-y-3">
                {items.map((item, i) => (
                  <li key={i} className="text-ink-light font-medium text-sm hover:text-ink transition-colors">
                    {item.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;