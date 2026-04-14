import React, { useEffect } from 'react';
import './scrollup.css';

const ScrollUp = () => {
  useEffect(() => {
    const onScroll = () => {
      const btn = document.querySelector('.scrollup');
      if (!btn) return;
      if (window.scrollY >= 560) btn.classList.add('show-scroll');
      else btn.classList.remove('show-scroll');
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a href="#home" className="scrollup" aria-label="Back to top">
      <i className="uil uil-arrow-up"></i>
    </a>
  );
};

export default ScrollUp;
