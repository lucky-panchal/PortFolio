import React, { useEffect, useState } from 'react';
import './sectiontransition.css';

const SectionTransition = () => {
  const [linePosition, setLinePosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      const homeSection = document.querySelector('#home');
      if (homeSection) {
        const homeBottom = homeSection.offsetTop + homeSection.offsetHeight;
        setLinePosition(homeBottom);
      }
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);
    return () => window.removeEventListener('resize', updatePosition);
  }, []);

  return (
    <div 
      className="fire-glow-line permanent"
      style={{ top: `${linePosition}px` }}
    />
  );
};

export default SectionTransition;