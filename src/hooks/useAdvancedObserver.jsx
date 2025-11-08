import { useEffect } from 'react';
import { gsap } from 'gsap';

export const useAdvancedObserver = () => {
  useEffect(() => {
    // Enhanced Intersection Observer with multiple thresholds
    const observerOptions = {
      root: null,
      rootMargin: '-10% 0px -10% 0px',
      threshold: [0, 0.25, 0.5, 0.75, 1]
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const section = entry.target;
        const progress = entry.intersectionRatio;
        
        if (entry.isIntersecting) {
          // Add active class for CSS animations
          section.classList.add('in-view');
          
          // Dynamic animations based on scroll progress
          if (progress > 0.5) {
            section.classList.add('fully-visible');
            
            // Trigger advanced animations
            triggerAdvancedAnimations(section);
          }
        } else {
          section.classList.remove('in-view', 'fully-visible');
        }
      });
    }, observerOptions);

    // Performance Observer for monitoring
    const performanceObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Preload next section content
          preloadNextSection(entry.target);
          
          // Optimize animations based on device performance
          optimizeForDevice(entry.target);
        }
      });
    }, { rootMargin: '200px' });

    // Observe all sections
    document.querySelectorAll('section').forEach((section) => {
      sectionObserver.observe(section);
      performanceObserver.observe(section);
    });

    // Advanced animation triggers
    function triggerAdvancedAnimations(section) {
      const sectionClass = section.className;
      
      if (sectionClass.includes('hero')) {
        animateHeroElements();
      } else if (sectionClass.includes('about')) {
        animateAboutElements();
      } else if (sectionClass.includes('skills')) {
        animateSkillsElements();
      } else if (sectionClass.includes('projects')) {
        animateProjectElements();
      }
    }

    function animateHeroElements() {
      gsap.to('.home__img', {
        rotation: 360,
        scale: 1.1,
        duration: 2,
        ease: 'elastic.out(1, 0.3)',
        yoyo: true,
        repeat: 1
      });
    }

    function animateAboutElements() {
      gsap.from('.about__img', {
        rotationY: 180,
        scale: 0.5,
        duration: 1.5,
        ease: 'back.out(1.7)'
      });
    }

    function animateSkillsElements() {
      gsap.from('.skills__data', {
        rotationX: 90,
        transformOrigin: 'bottom',
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
      });
    }

    function animateProjectElements() {
      gsap.from('.project', {
        rotationY: 45,
        z: -200,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power4.out'
      });
    }

    function preloadNextSection(currentSection) {
      const nextSection = currentSection.nextElementSibling;
      if (nextSection) {
        // Preload images in next section
        const images = nextSection.querySelectorAll('img[data-src]');
        images.forEach(img => {
          if (img.dataset.src) {
            img.src = img.dataset.src;
          }
        });
      }
    }

    function optimizeForDevice(section) {
      // Reduce animations on low-end devices
      const isLowEnd = navigator.hardwareConcurrency < 4 || 
                       navigator.deviceMemory < 4;
      
      if (isLowEnd) {
        section.style.willChange = 'auto';
        gsap.set(section, { force3D: false });
      }
    }

    return () => {
      sectionObserver.disconnect();
      performanceObserver.disconnect();
    };
  }, []);
};