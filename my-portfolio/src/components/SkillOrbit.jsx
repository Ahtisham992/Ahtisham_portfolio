import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaDocker, FaGitAlt, FaFigma } from 'react-icons/fa';
import { SiPostgresql, SiTailwindcss, SiTypescript, SiNextdotjs } from 'react-icons/si';

const SkillOrbit = () => {
  const orbits = [
    {
      radius: 80,
      orbitClass: 'animate-spin-slow',
      iconClass: 'animate-spin-slow-reverse',
      items: [
        { icon: FaReact, color: '#61DAFB', name: 'React' },
        { icon: FaNodeJs, color: '#339933', name: 'Node.js' },
        { icon: SiTypescript, color: '#3178C6', name: 'TypeScript' }
      ]
    },
    {
      radius: 140,
      orbitClass: 'animate-spin-slower',
      iconClass: 'animate-spin-slower-reverse',
      items: [
        { icon: FaPython, color: '#3776AB', name: 'Python' },
        { icon: SiPostgresql, color: '#336791', name: 'PostgreSQL' },
        { icon: SiTailwindcss, color: '#06B6D4', name: 'Tailwind' },
        { icon: FaGitAlt, color: '#F05032', name: 'Git' }
      ]
    },
    {
      radius: 200,
      orbitClass: 'animate-spin-slowest',
      iconClass: 'animate-spin-slowest-reverse',
      items: [
        { icon: FaDocker, color: '#2496ED', name: 'Docker' },
        { icon: SiNextdotjs, color: '#000000', name: 'Next.js' },
        { icon: FaFigma, color: '#F24E1E', name: 'Figma' }
      ]
    }
  ];

  return (
    <div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity duration-500">
      
      {/* Center Logo */}
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 1, bounce: 0.5 }}
        className="relative z-10 w-20 h-20 rounded-full bg-surface border-2 border-ember flex items-center justify-center shadow-[0_0_30px_rgba(253,83,33,0.2)]"
      >
        <span className="font-black text-3xl tracking-tighter">
          <span className="text-ember">M</span>
          <span className="text-ink">A</span>
        </span>
      </motion.div>

      {/* Orbits */}
      {orbits.map((orbit, oIdx) => (
        <motion.div 
          key={oIdx}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: oIdx * 0.2 }}
          className="absolute rounded-full border border-ember/30 pointer-events-none"
          style={{ width: orbit.radius * 2, height: orbit.radius * 2 }}
        >
          {/* Rotating Container */}
          <div className={`absolute inset-0 ${orbit.orbitClass}`}>
            {orbit.items.map((item, i) => {
              // Calculate position on the circle
              const angle = (i * 360) / orbit.items.length;
              // We subtract 90 degrees so the first item starts at the top
              const angleRad = ((angle - 90) * Math.PI) / 180;
              const x = orbit.radius * Math.cos(angleRad);
              const y = orbit.radius * Math.sin(angleRad);
              
              const Icon = item.icon;

              return (
                <div 
                  key={i}
                  className="absolute w-12 h-12 -ml-6 -mt-6 pointer-events-auto"
                  style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
                  title={item.name}
                >
                  {/* Counter-rotating Item */}
                  <div className={`w-full h-full rounded-full bg-surface border border-border flex items-center justify-center ${orbit.iconClass} group hover:border-ember transition-colors cursor-pointer shadow-sm hover:shadow-md`}>
                    <Icon 
                      className="w-6 h-6 text-ink-light transition-colors duration-300 group-hover:!text-[var(--hover-color)]" 
                      style={{ '--hover-color': item.color }} 
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      ))}

      {/* Decorative stars/particles in the background */}
      <div className="absolute top-[10%] left-[20%] w-1 h-1 bg-ink-light rounded-full opacity-30 animate-pulse" />
      <div className="absolute bottom-[20%] right-[15%] w-1.5 h-1.5 bg-ember rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-[30%] right-[10%] w-1 h-1 bg-ink-light rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
      
    </div>
  );
};

export default SkillOrbit;
