import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X } from 'lucide-react';

const KonamiCode = () => {
  const [isActivated, setIsActivated] = useState(false);
  const [sequence, setSequence] = useState([]);
  
  // Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A
  const konamiCode = [
    'ArrowUp', 'ArrowUp',
    'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight',
    'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      const newSequence = [...sequence, e.code].slice(-konamiCode.length);
      setSequence(newSequence);

      if (JSON.stringify(newSequence) === JSON.stringify(konamiCode)) {
        setIsActivated(true);
        setSequence([]);
        
        // Auto-close after 5 seconds
        setTimeout(() => setIsActivated(false), 5000);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [sequence]);

  return (
    <AnimatePresence>
      {isActivated && (
        <>
          {/* Confetti Effect */}
          <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: -20,
                  rotate: 0,
                  scale: Math.random() * 0.5 + 0.5
                }}
                animate={{
                  y: window.innerHeight + 20,
                  rotate: 360,
                  opacity: [1, 1, 0]
                }}
                transition={{
                  duration: Math.random() * 2 + 2,
                  ease: 'linear',
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
                className="absolute"
                style={{
                  width: '10px',
                  height: '10px',
                  backgroundColor: [
                    '#a855f7', '#d946ef', '#ec4899', '#f59e0b', '#10b981'
                  ][Math.floor(Math.random() * 5)]
                }}
              />
            ))}
          </div>

          {/* Achievement Modal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
            onClick={() => setIsActivated(false)}
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ type: 'spring', duration: 0.6 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-purple-600 to-pink-600 p-1 rounded-2xl max-w-md w-full"
            >
              <div className="bg-gray-900 rounded-xl p-8 relative">
                <button
                  onClick={() => setIsActivated(false)}
                  className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>

                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                  className="text-center mb-4"
                >
                  <Sparkles className="w-20 h-20 mx-auto text-yellow-400" />
                </motion.div>

                <h2 className="text-3xl font-bold text-white text-center mb-2">
                  🎮 Achievement Unlocked! 🎮
                </h2>
                
                <div className="bg-yellow-500/20 border-2 border-yellow-500 rounded-lg p-4 mb-4">
                  <p className="text-yellow-400 font-bold text-center text-lg">
                    "Secret Coder"
                  </p>
                  <p className="text-yellow-300 text-center text-sm mt-1">
                    You found the Konami Code!
                  </p>
                </div>

                <div className="text-center space-y-2">
                  <p className="text-gray-300">
                    Congratulations! You've discovered the classic gaming easter egg.
                  </p>
                  <p className="text-purple-400 font-semibold text-sm">
                    ↑ ↑ ↓ ↓ ← → ← → B A
                  </p>
                  <p className="text-gray-400 text-xs mt-4">
                    This proves you're a true developer at heart! 💜
                  </p>
                </div>

                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="mt-6 text-center"
                >
                  <a
                    href="https://github.com/Ahtisham992"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-bold hover:shadow-lg transition-all"
                  >
                    Check Out My GitHub 🚀
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default KonamiCode;