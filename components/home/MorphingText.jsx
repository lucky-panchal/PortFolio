import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const MorphingText = ({ texts, className = '' }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className={`morphing-text-container ${className}`} style={{ position: 'relative', display: 'inline-block' }}>
      <div className="morphing-text-wrapper">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 12, filter: 'blur(5px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -12, filter: 'blur(5px)' }}
            transition={{
              duration: 0.75,
              ease: [0.34, 1.56, 0.64, 1], // snappy spring easing
            }}
            style={{
              display: 'inline-block',
            }}
          >
            {texts[index]}
          </motion.span>
        </AnimatePresence>
      </div>

      <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
        <defs>
          <filter id="gooey-morph-desktop">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 35 -15"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
          <filter id="gooey-morph-mobile">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.8" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -10"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default MorphingText;
