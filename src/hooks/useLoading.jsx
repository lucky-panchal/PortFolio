import { useState, useEffect } from 'react';

export const useLoading = (minLoadingTime = 2000) => {
  const [isLoading, setIsLoading] = useState(true);
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setContentLoaded(true);
    }, minLoadingTime);

    // Simulate content loading
    const handleLoad = () => {
      if (contentLoaded) {
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
    };
  }, [contentLoaded, minLoadingTime]);

  useEffect(() => {
    if (contentLoaded) {
      const fadeTimer = setTimeout(() => {
        setIsLoading(false);
      }, 500);
      return () => clearTimeout(fadeTimer);
    }
  }, [contentLoaded]);

  return isLoading;
};