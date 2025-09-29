import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ParticleSystem = ({ mousePosition }) => {
  const particlesRef = useRef([]);
  const containerRef = useRef();

  useEffect(() => {
    const particles = particlesRef.current;
    
    
    
    // Create floating animation for each particle
    particles.forEach((particle, index) => {
      if (!particle) return;
      
      gsap.set(particle, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        scale: Math.random() * 0.5 + 0.5,
        opacity: Math.random() * 0.6 + 0.2
      });

      // Floating animation
      gsap.to(particle, {
        y: `+=${Math.random() * 200 - 100}`,
        x: `+=${Math.random() * 100 - 50}`,
        rotation: Math.random() * 360,
        duration: Math.random() * 10 + 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: Math.random() * 2
      });
    });
  }, []);

  // Mouse interaction effect
  useEffect(() => {
    const particles = particlesRef.current;
    
    particles.forEach((particle) => {
      if (!particle) return;
      
      const rect = particle.getBoundingClientRect();
      const particleX = rect.left + rect.width / 2;
      const particleY = rect.top + rect.height / 2;
      
      const distance = Math.sqrt(
        Math.pow(mousePosition.x - particleX, 2) + 
        Math.pow(mousePosition.y - particleY, 2)
      );
      
      if (distance < 150) {
        const force = (150 - distance) / 150;
        const angle = Math.atan2(
          particleY - mousePosition.y, 
          particleX - mousePosition.x
        );
        
        gsap.to(particle, {
          x: `+=${Math.cos(angle) * force * 20}`,
          y: `+=${Math.sin(angle) * force * 20}`,
          scale: 1 + force * 0.5,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    });
  }, [mousePosition]);

  return (
    <div ref={containerRef} className="particle-system">
      {[...Array(30)].map((_, index) => (
        <div
          key={index}
          ref={el => particlesRef.current[index] = el}
          className="system-particle"
          style={{
            '--hue': Math.random() * 360,
            '--size': Math.random() * 8 + 4
          }}
        />
      ))}
      
      {/* Code Particles */}
      {['<>', '{}', '[]', '/>', '&&', '||', '=>', '++'].map((symbol, index) => (
        <div
          key={`code-${index}`}
          ref={el => particlesRef.current[30 + index] = el}
          className="code-particle-float"
          style={{
            '--delay': Math.random() * 5,
            '--duration': Math.random() * 10 + 8
          }}
        >
          {symbol}
        </div>
      ))}
    </div>
  );
};

export default ParticleSystem;