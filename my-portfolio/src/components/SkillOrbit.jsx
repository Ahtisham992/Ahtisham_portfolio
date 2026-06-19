import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimationFrame, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaDocker, FaGitAlt, FaFigma } from 'react-icons/fa';
import { SiPostgresql, SiTailwindcss, SiTypescript, SiNextdotjs } from 'react-icons/si';
import { X } from 'lucide-react';

const SkillOrbit = () => {
  const [isAccelerated, setIsAccelerated] = useState(false);
  const [countdown, setCountdown] = useState(null);
  const [robotMessage, setRobotMessage] = useState(null);
  
  const holdTimeRef = useRef(0);
  const lastSecondRef = useRef(0);

  const startAcceleration = () => {
    if (!robotMessage) setIsAccelerated(true);
  };
  const stopAcceleration = () => setIsAccelerated(false);

  // Physics Motion Values
  const acceleration = useMotionValue(1);
  const rotation1 = useMotionValue(0);
  const rotation2 = useMotionValue(0);
  const rotation3 = useMotionValue(0);
  const rotations = [rotation1, rotation2, rotation3];
  
  // Counter rotations to keep icons upright
  const counterRotation1 = useTransform(rotation1, r => -r);
  const counterRotation2 = useTransform(rotation2, r => -r);
  const counterRotation3 = useTransform(rotation3, r => -r);
  const counterRotations = [counterRotation1, counterRotation2, counterRotation3];

  // Visual effects tied to acceleration
  const coreScale = useTransform(acceleration, [1, 12], [1, 1.15]);
  const coreShadow = useTransform(acceleration, [1, 12], ['0px 0px 30px rgba(253,83,33,0.2)', '0px 0px 80px rgba(253,83,33,1)']);
  const orbitBorderColor = useTransform(acceleration, [1, 12], ['rgba(253,83,33,0.3)', 'rgba(253,83,33,1)']);
  const orbitShadow = useTransform(acceleration, [1, 12], ['0px 0px 0px rgba(253,83,33,0)', '0px 0px 20px rgba(253,83,33,0.4)']);

  // Particle System
  const particlesRef = useRef([]);
  useEffect(() => {
    particlesRef.current = Array.from({ length: 40 }).map(() => ({
      active: false, x: 0, y: 0, vx: 0, vy: 0, life: 0, maxLife: 0, el: null
    }));
  }, []);

  const orbits = [
    {
      radius: 80,
      baseSpeed: 0.3, // degrees per frame
      items: [
        { icon: FaReact, color: '#61DAFB', name: 'React' },
        { icon: FaNodeJs, color: '#339933', name: 'Node.js' },
        { icon: SiTypescript, color: '#3178C6', name: 'TypeScript' }
      ]
    },
    {
      radius: 140,
      baseSpeed: 0.2,
      items: [
        { icon: FaPython, color: '#3776AB', name: 'Python' },
        { icon: SiPostgresql, color: '#336791', name: 'PostgreSQL' },
        { icon: SiTailwindcss, color: '#06B6D4', name: 'Tailwind' },
        { icon: FaGitAlt, color: '#F05032', name: 'Git' }
      ]
    },
    {
      radius: 200,
      baseSpeed: 0.1,
      items: [
        { icon: FaDocker, color: '#2496ED', name: 'Docker' },
        { icon: SiNextdotjs, color: '#000000', name: 'Next.js' },
        { icon: FaFigma, color: '#F24E1E', name: 'Figma' }
      ]
    }
  ];

  // Physics Loop
  useAnimationFrame((time, delta) => {
    const timeFactor = delta / 16.66; // normalize to 60fps
    
    // Easter Egg Game Logic
    if (isAccelerated && !robotMessage) {
      holdTimeRef.current += delta;
      const currentSec = Math.floor(holdTimeRef.current / 1000);
      
      // Trigger Countdown when 5 seconds remain (at 5 seconds held for a 10s total)
      if (currentSec >= 5 && currentSec < 10) {
        const remaining = 10 - currentSec;
        if (lastSecondRef.current !== remaining) {
          lastSecondRef.current = remaining;
          setCountdown(remaining);
        }
      } 
      // Trigger Robot Easter Egg at 10 seconds
      else if (currentSec >= 10) {
        setIsAccelerated(false); // Force stop the engine
        setCountdown(null);
        setRobotMessage("Whoa, easy there! You almost melted the core!");
        holdTimeRef.current = 0;
      }
    } else {
      if (holdTimeRef.current > 0) {
        holdTimeRef.current = 0;
        setCountdown(null);
        lastSecondRef.current = 0;
      }
    }

    // Lerp Acceleration
    const targetAcc = isAccelerated ? 12 : 1;
    const currentAcc = acceleration.get();
    const newAcc = currentAcc + (targetAcc - currentAcc) * (delta * 0.003);
    acceleration.set(newAcc);

    // Apply Rotation
    rotations.forEach((rot, i) => {
      rot.set(rot.get() + orbits[i].baseSpeed * newAcc * timeFactor);
    });

    // Particle Spawning (when hot)
    if (newAcc > 6 && Math.random() > 0.3) {
      const p = particlesRef.current.find(p => !p.active);
      if (p && p.el) {
        p.active = true;
        p.life = 0;
        p.maxLife = Math.random() * 20 + 20;
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * (newAcc * 0.4) + 1;
        p.x = 0;
        p.y = 0;
        p.vx = Math.cos(angle) * speed;
        p.vy = Math.sin(angle) * speed;
        p.el.style.opacity = 1;
        p.el.style.transform = `translate(0px, 0px) scale(1)`;
        // Mix of orange sparks and dark gray smoke
        p.el.style.backgroundColor = Math.random() > 0.4 ? '#fd5321' : '#c1c4c2';
      }
    }

    // Update Particles
    particlesRef.current.forEach(p => {
      if (p.active) {
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.98; // friction
        p.vy *= 0.98;
        p.life += timeFactor;
        
        const progress = p.life / p.maxLife;
        if (progress >= 1) {
          p.active = false;
          if (p.el) p.el.style.opacity = 0;
        } else if (p.el) {
          p.el.style.opacity = 1 - progress;
          p.el.style.transform = `translate(${p.x}px, ${p.y}px) scale(${1 - progress * 0.3})`;
        }
      }
    });
  });

  return (
    <div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity duration-500">
      
      {/* Game Overlays */}
      <AnimatePresence>
        {countdown !== null && (
          <motion.div
            key={countdown}
            initial={{ opacity: 0, scale: 2 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
            className="absolute top-[15%] z-50 text-[80px] font-black text-ember drop-shadow-[0_0_20px_rgba(253,83,33,0.8)] pointer-events-none"
          >
            {countdown}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {robotMessage && (
          <motion.div
            initial={{ y: 50, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 50, opacity: 0, scale: 0.8 }}
            className="absolute bottom-[-20%] z-50 flex flex-col items-center pointer-events-auto"
          >
            <div className="bg-surface border-2 border-ember py-2 pl-4 pr-10 rounded-2xl mb-3 shadow-[0_0_30px_rgba(253,83,33,0.3)] relative group">
              <p className="text-sm font-bold text-ink whitespace-nowrap">{robotMessage}</p>
              
              {/* Close Button */}
              <button 
                onClick={() => setRobotMessage(null)}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-ink-light hover:text-ember transition-colors rounded-full hover:bg-bone"
                title="Dismiss"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Chat Bubble Arrow */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-surface border-b-2 border-r-2 border-ember rotate-45"></div>
            </div>
            <div className="text-6xl drop-shadow-[0_0_20px_rgba(253,83,33,0.5)]">
              🤖
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Particle Container */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
        {Array.from({ length: 40 }).map((_, i) => (
          <div 
            key={i}
            ref={el => { if (particlesRef.current[i]) particlesRef.current[i].el = el; }}
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{ opacity: 0, backgroundColor: '#fd5321' }}
          />
        ))}
      </div>

      {/* Center Core Logo */}
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        style={{ scale: coreScale, boxShadow: coreShadow }}
        onMouseDown={startAcceleration}
        onMouseUp={stopAcceleration}
        onMouseLeave={stopAcceleration}
        onTouchStart={startAcceleration}
        onTouchEnd={stopAcceleration}
        className="relative z-30 w-20 h-20 rounded-full bg-surface border-2 border-ember flex items-center justify-center cursor-pointer select-none transition-colors duration-300"
      >
        <span className="font-black text-3xl tracking-tighter pointer-events-none">
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
          style={{ 
            width: orbit.radius * 2, 
            height: orbit.radius * 2, 
            borderColor: orbitBorderColor,
            boxShadow: orbitShadow 
          }}
          className="absolute rounded-full border pointer-events-none"
        >
          {/* Rotating Container */}
          <motion.div 
            className="absolute inset-0"
            style={{ rotate: rotations[oIdx] }}
          >
            {orbit.items.map((item, i) => {
              // Mathematical layout: evenly distribute items along the circle
              const angle = (i * 360) / orbit.items.length;
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
                  <motion.div 
                    style={{ rotate: counterRotations[oIdx] }}
                    className="w-full h-full rounded-full bg-surface border border-border flex items-center justify-center group transition-colors duration-300 cursor-pointer shadow-sm hover:shadow-md hover:border-ember"
                  >
                    <Icon 
                      className="w-6 h-6 text-ink-light transition-colors duration-300 group-hover:!text-[var(--hover-color)]" 
                      style={{ '--hover-color': item.color }} 
                    />
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      ))}

      {/* Decorative stars/particles in the background */}
      <div className="absolute top-[10%] left-[20%] w-1 h-1 bg-ink-light rounded-full opacity-30 animate-pulse" />
      <div className="absolute bottom-[20%] right-[15%] w-1.5 h-1.5 rounded-full bg-ember opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-[30%] right-[10%] w-1 h-1 bg-ink-light rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
      
    </div>
  );
};

export default SkillOrbit;

