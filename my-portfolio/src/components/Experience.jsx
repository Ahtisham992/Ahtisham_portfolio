import React from 'react';
import { motion } from 'framer-motion';
import { experience, education } from '../data/portfolio';

const Experience = () => {
  return (
    <section id="experience" className="section-padding border-t border-border bg-bone">
      <div className="container-custom">
        <div className="mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-ink-light mb-2">Experience</h2>
          <p className="text-3xl font-medium tracking-tight text-ink max-w-2xl">
            Where I've built systems and solved problems.
          </p>
        </div>

        <div className="max-w-4xl relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] md:left-[11px] top-2 bottom-2 w-[1px] bg-border" />

          <div className="space-y-16">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative pl-10 md:pl-16"
              >
                {/* Dot */}
                <div className="absolute left-[3px] md:left-[7px] top-2 w-[9px] h-[9px] bg-bone border-[2px] border-ink rounded-full" />

                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-ink">{job.title}</h3>
                    <div className="text-ink-light font-medium mt-1">
                      {job.company} &middot; {job.location}
                    </div>
                  </div>
                  <div className="text-sm text-ink-light font-mono shrink-0">
                    {job.period}
                  </div>
                </div>

                <ul className="space-y-3 mt-4">
                  {job.responsibilities.map((resp, i) => (
                    <li key={i} className="text-ink leading-relaxed text-sm md:text-base flex gap-3">
                      <span className="text-border mt-2 w-1 h-1 bg-border rounded-full block flex-shrink-0" />
                      {resp}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;