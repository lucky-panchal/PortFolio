import React from 'react';
import { motion } from 'framer-motion';

export const KineticText = ({ children, className = '' }) => {
  const text = typeof children === 'string' ? children : '';

  return (
    <span className={`kinetic-text-wrap ${className}`} style={{ display: 'inline-block' }}>
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          style={{
            display: 'inline-block',
            originX: 0.5,
            originY: 0.5,
            fontWeight: 400,
            cursor: 'default',
          }}
          whileHover={{
            fontWeight: 800,
            scale: 1.25,
            color: '#22c55e', // accent green
            transition: { duration: 0.1 }
          }}
          transition={{ type: 'spring', stiffness: 350, damping: 12 }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
};

export default KineticText;
