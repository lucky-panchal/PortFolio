import { useEffect } from 'react';

export const useAdvancedObserver = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            if (entry.intersectionRatio > 0.5) {
              entry.target.classList.add('fully-visible');
            }
          } else {
            entry.target.classList.remove('in-view', 'fully-visible');
          }
        });
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1], rootMargin: '-10% 0px -10% 0px' }
    );

    document.querySelectorAll('section').forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);
};
