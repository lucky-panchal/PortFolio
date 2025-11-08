import { useEffect } from 'react';
import { gsap } from 'gsap';

export const useVisibilityAnimations = () => {
  useEffect(() => {
    // Visibility-based micro-animations
    const microObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const element = entry.target;
        
        if (entry.isIntersecting) {
          // Trigger micro-animations based on element type
          if (element.classList.contains('skills__data')) {
            animateSkillItem(element);
          } else if (element.classList.contains('enhanced-card')) {
            animateProjectCard(element);
          } else if (element.classList.contains('testimonial__card')) {
            animateTestimonialCard(element);
          }
        }
      });
    }, {
      threshold: 0.3,
      rootMargin: '0px 0px -50px 0px'
    });

    // Hover enhancement observer
    const hoverObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          enhanceHoverEffects(entry.target);
        }
      });
    }, { threshold: 0.8 });

    function animateSkillItem(element) {
      gsap.fromTo(element, 
        {
          rotationX: -90,
          transformOrigin: 'top',
          opacity: 0
        },
        {
          rotationX: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'back.out(1.7)',
          delay: Math.random() * 0.3
        }
      );
    }

    function animateProjectCard(element) {
      gsap.fromTo(element,
        {
          rotationY: 45,
          scale: 0.8,
          opacity: 0,
          z: -100
        },
        {
          rotationY: 0,
          scale: 1,
          opacity: 1,
          z: 0,
          duration: 1.2,
          ease: 'power3.out'
        }
      );
    }

    function animateTestimonialCard(element) {
      gsap.fromTo(element,
        {
          rotation: 180,
          scale: 0,
          opacity: 0
        },
        {
          rotation: 0,
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: 'elastic.out(1, 0.5)'
        }
      );
    }

    function enhanceHoverEffects(element) {
      element.addEventListener('mouseenter', () => {
        gsap.to(element, {
          scale: 1.05,
          rotationY: 5,
          z: 50,
          duration: 0.3,
          ease: 'power2.out'
        });
      });

      element.addEventListener('mouseleave', () => {
        gsap.to(element, {
          scale: 1,
          rotationY: 0,
          z: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    }

    // Observe elements
    document.querySelectorAll('.skills__data, .enhanced-card, .testimonial__card').forEach(el => {
      microObserver.observe(el);
      hoverObserver.observe(el);
    });

    return () => {
      microObserver.disconnect();
      hoverObserver.disconnect();
    };
  }, []);
};