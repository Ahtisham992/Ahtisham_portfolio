import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';

const Skills = () => {
  return (
    <section id="capabilities" className="section-padding border-t border-border bg-bone">
      <div className="container-custom">
        <div className="mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-ember mb-2">Capabilities</h2>
          <p className="text-3xl font-medium tracking-tight text-ink max-w-2xl">
            Core technologies and tools I work with daily.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 border-t border-border pt-12">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-sm font-bold uppercase tracking-widest text-ink capitalize shrink-0">
                  {category}
                </h3>
                <div className="h-[1px] w-full bg-border" />
              </div>
              <div className="flex flex-wrap gap-3">
                {items.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 bg-surface border border-border px-4 py-2 hover:border-ink transition-colors cursor-default">
                    <span className="text-ink font-medium text-sm">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;