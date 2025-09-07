// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from 'react'
import "./home.css";
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';
import ProfilePic from '../../src/assets/profile-pic.png';
import { useTranslation } from '../../src/hooks/useTranslation.jsx';


const Home = () => {
  const { t } = useTranslation();
  const parallaxRef = useRef(null);
  const canvasRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const techSkills = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'HTML', 'CSS', 'JS', 'React', 'Node', 'Python', 'Java', 'C++', 'Git', 'GitHub', '{ }', '< >', '=>', '&&', '||', '++', '--', 'async', 'const', 'let', 'function'];
    const particles = [];

    const createMatrix = () => {
      const isMobile = window.innerWidth <= 768;
      const particleCount = isMobile ? 120 : 150;
      const speed = isMobile ? 1.5 : 2;
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * speed,
          vy: (Math.random() - 0.5) * (speed * 2),
          text: techSkills[Math.floor(Math.random() * techSkills.length)],
          opacity: Math.random() * 0.8 + 0.2
        });
      }
    };

    const drawMatrix = () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      ctx.fillStyle = isDark ? 'rgba(13, 17, 23, 0.3)' : 'rgba(255, 255, 255, 0.3)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      const isMobile = window.innerWidth <= 768;
      ctx.font = `${isMobile ? '12px' : '15px'} boxicons, Courier New`;
      
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Add slight drift for natural movement
        particle.x += Math.sin(particle.y * 0.01) * 0.3;
        
        if (particle.x < -50 || particle.x > canvas.width + 50) {
          particle.x = Math.random() * canvas.width;
          particle.y = -20;
          particle.text = techSkills[Math.floor(Math.random() * techSkills.length)];
        }
        
        if (particle.y > canvas.height + 20) {
          particle.x = Math.random() * canvas.width;
          particle.y = -20;
          particle.text = techSkills[Math.floor(Math.random() * techSkills.length)];
        }
        
        if (particle.y < -20) {
          particle.x = Math.random() * canvas.width;
          particle.y = canvas.height + 20;
          particle.text = techSkills[Math.floor(Math.random() * techSkills.length)];
        }
        
        // Draw particles with better transparency for background flow
        const particleColor = isDark ? `rgba(0, 255, 65, ${particle.opacity * 0.6})` : `rgba(55, 65, 81, ${particle.opacity * 0.5})`;
        ctx.fillStyle = particleColor;
        ctx.fillText(particle.text, particle.x, particle.y);
      });
      
      animationId = requestAnimationFrame(drawMatrix);
    };

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    resizeCanvas();
    createMatrix();
    drawMatrix();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', resizeCanvas);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="home section" id="home">
        <canvas 
          ref={canvasRef}
          className="particle-canvas"
        />
        <div className="parallax-container">
            <div className="parallax-layer layer-1" style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) translateZ(-1px) scale(2)`
            }}></div>
            <div className="parallax-layer layer-2" style={{
              transform: `translate(${mousePosition.x * 1.5}px, ${mousePosition.y * 1.5}px) translateZ(-2px) scale(3)`
            }}></div>
            <div className="parallax-layer layer-3" style={{
              transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px) translateZ(-3px) scale(4)`
            }}></div>
            <div className="parallax-layer layer-4"></div>
        </div>
        <div className="home__container container grid" ref={parallaxRef}>
            <div className="home__content grid">
                <Social />

                <div className="home__img-wrapper">
                  <img src={ProfilePic} alt="Profile" className="home__img" />
                  <div className="home__img-overlay">
                    <div className="overlay-content">
                      <div className="overlay-icon">
                        <i className="uil uil-code-branch"></i>
                      </div>
                      <div className="overlay-text">{t('mobileCodeText')}</div>
                    </div>
                  </div>
                  <div className="code-particles">
                    <span className="code-particle">&lt;/&gt;</span>
                    <span className="code-particle">{}</span>
                    <span className="code-particle">( )</span>
                    <span className="code-particle">[ ]</span>
                  </div>
                </div>

                <Data />
            </div>

            <ScrollDown />
        </div>
    </section>
  )
}

export default Home
