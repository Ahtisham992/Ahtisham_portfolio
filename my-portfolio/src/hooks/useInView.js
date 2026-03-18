// ========================================
// FILE: src/hooks/useInView.js
// ========================================
import { useEffect, useState, useRef } from 'react';

export const useInView = (options = {}) => {
  const [isInView, setIsInView] = useState(false);
  const [hasBeenInView, setHasBeenInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      const isCurrentlyInView = entry.isIntersecting;
      setIsInView(isCurrentlyInView);
      
      // Once it's been in view, keep it as true
      if (isCurrentlyInView && !hasBeenInView) {
        setHasBeenInView(true);
      }
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px', // Trigger slightly before element is fully visible
      ...options,
    });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasBeenInView, options]);

  // Return hasBeenInView so animations stay visible after scrolling past
  return [ref, hasBeenInView];
};