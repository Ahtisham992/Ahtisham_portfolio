import React from 'react';

const AuroraBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-bone pointer-events-none">
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-ink rounded-full blur-[150px] opacity-[0.07] animate-aurora mix-blend-multiply" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-ink-light rounded-full blur-[180px] opacity-[0.05] animate-aurora mix-blend-multiply" style={{ animationDelay: '5s', animationDuration: '25s' }} />
    </div>
  );
};

export default AuroraBackground;
