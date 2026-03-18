// ========================================
// FILE: src/components/ScrollProgress.jsx
// ========================================
import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  
  // Add spring animation for smoother movement
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 to-accent-500 z-50 origin-left shadow-lg"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;