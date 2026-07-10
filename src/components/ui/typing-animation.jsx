import React, { useEffect, useState, useRef } from 'react';

export const TypingAnimation = ({ text, className = '', speed = 50, delay = 0 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [start, setStart] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setStart(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  useEffect(() => {
    if (!start) return;

    let currentIndex = 0;
    setDisplayedText('');

    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, start]);

  return (
    <span ref={elementRef} className={`typing-animation ${className}`}>
      {displayedText}
      {start && displayedText.length < text.length && <span className="typing-cursor">|</span>}
    </span>
  );
};

export default TypingAnimation;
