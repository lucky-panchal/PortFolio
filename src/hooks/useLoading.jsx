import { useState, useEffect } from 'react';

export const useLoading = (minLoadingTime = 2000) => {
  const [isLoading, setIsLoading] = useState(true);
  const [contentLoaded, setContentLoaded] = useState(false);
  const [savedScrollPosition, setSavedScrollPosition] = useState(0);

  useEffect(() => {
    // Save current scroll position and reset to top
    setSavedScrollPosition(window.scrollY);
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      setContentLoaded(true);
    }, minLoadingTime);

    const handleLoad = () => {
      if (contentLoaded) {
        document.body.style.overflow = 'auto';
        // Restore scroll position after content loads
        setTimeout(() => {
          window.scrollTo(0, savedScrollPosition);
        }, 100);
        setIsLoading(false);
      }
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', handleLoad);
      document.body.style.overflow = 'auto';
    };
  }, [contentLoaded, minLoadingTime, savedScrollPosition]);

  useEffect(() => {
    if (contentLoaded) {
      const fadeTimer = setTimeout(() => {
        document.body.style.overflow = 'auto';
        setTimeout(() => {
          window.scrollTo(0, savedScrollPosition);
        }, 100);
        setIsLoading(false);
      }, 500);
      return () => clearTimeout(fadeTimer);
    }
  }, [contentLoaded, savedScrollPosition]);

  return isLoading;
};