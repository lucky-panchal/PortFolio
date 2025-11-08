import { useEffect } from 'react';

export const useLazyLoad = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target;
            
            // Lazy load images
            if (target.tagName === 'IMG' && target.dataset.src) {
              target.src = target.dataset.src;
              target.classList.add('loaded');
              observer.unobserve(target);
            }
            
            // Lazy load videos
            if (target.tagName === 'VIDEO' && target.dataset.src) {
              target.src = target.dataset.src;
              target.load();
              observer.unobserve(target);
            }
          }
        });
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.1,
      }
    );

    // Observe all lazy elements
    document.querySelectorAll('[data-src]').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
};