import React, { useEffect, useState } from 'react';
import './sectiontransition.css';

const SectionTransition = () => {
  const [glowIntensity, setGlowIntensity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.querySelector('#home');
      const projectsSection = document.querySelector('#projects');
      
      if (homeSection && projectsSection) {
        const homeBottom = homeSection.offsetTop + homeSection.offsetHeight;
        const projectsTop = projectsSection.offsetTop;
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        
        // Calculate transition zone
        const transitionStart = homeBottom - windowHeight * 0.8;
        const transitionEnd = projectsTop + windowHeight * 0.2;
        
        if (scrollY >= transitionStart && scrollY <= transitionEnd) {
          // Calculate glow intensity based on scroll position
          const progress = (scrollY - transitionStart) / (transitionEnd - transitionStart);
          const intensity = Math.sin(progress * Math.PI) * 60;
          setGlowIntensity(intensity);
        } else {
          setGlowIntensity(0);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const homeSection = document.querySelector('#home');
    const projectsSection = document.querySelector('#projects');
    
    if (homeSection && projectsSection && glowIntensity > 0) {
      homeSection.style.setProperty('--glow-intensity', glowIntensity);
      projectsSection.style.setProperty('--glow-intensity', glowIntensity);
    } else if (homeSection && projectsSection) {
      homeSection.style.setProperty('--glow-intensity', 0);
      projectsSection.style.setProperty('--glow-intensity', 0);
    }
  }, [glowIntensity]);

  return null;
};

export default SectionTransition;