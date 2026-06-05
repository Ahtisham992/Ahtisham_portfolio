import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Lock scroll while preloading
    document.body.style.overflow = 'hidden';
    
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        document.body.style.overflow = 'unset';
        onComplete && onComplete();
      }, 500); // Wait for exit animation
    }, 2800); // Total display time

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-bone flex flex-col items-center justify-center"
        >
          <div className="flex flex-col items-center scale-[1.5] md:scale-[2]">
            <svg 
              width="120" 
              height="120" 
              viewBox="0 0 100 100" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="4" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              {/* Letter M */}
              <motion.path
                d="M 20 80 L 20 20 L 40 50 L 60 20 L 60 80"
                stroke="#fd5321" // Ember
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
              {/* Letter A */}
              <motion.path
                d="M 60 80 L 80 20 L 100 80"
                stroke="#001011" // Ink
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
              />
              <motion.path
                d="M 67 60 L 93 60"
                stroke="#001011" // Ink
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 1 }}
              />
              
              {/* Underline */}
              <motion.path
                d="M 15 90 L 105 90"
                stroke="#c1c4c2" // Border
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 1.2 }}
              />
            </svg>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="mt-6 font-mono text-[10px] uppercase tracking-[0.3em] text-ink-light flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 bg-ember animate-ping rounded-full inline-block" />
              Initializing System
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
