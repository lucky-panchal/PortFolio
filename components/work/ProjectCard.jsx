import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { cardSizes } from './Data';
import { useTranslation } from '../../src/hooks/useTranslation.jsx';

const ProjectCard = ({ project, index, mousePosition, isLoaded }) => {
  const { t, language } = useTranslation();
  const cardRef = useRef();
  const imageRef = useRef();
  const contentRef = useRef();
  const [isHovered, setIsHovered] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [tiltValues, setTiltValues] = useState({ x: 0, y: 0 });

  const cardSize = cardSizes[project.size] || cardSizes.medium;

  
  // 3D Tilt Effect
  useEffect(() => {
    if (!cardRef.current || !isHovered) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (mousePosition.x - centerX) / (rect.width / 2);
    const deltaY = (mousePosition.y - centerY) / (rect.height / 2);
    
    setTiltValues({
      x: deltaY * -15, // Inverted for natural feel
      y: deltaX * 15
    });
  }, [mousePosition, isHovered]);

  // Magnetic hover effect
  const handleMouseEnter = () => {
    setIsHovered(true);
    
    gsap.to(cardRef.current, {
      scale: 1.05,
      z: 100,
      duration: 0.4,
      ease: "power2.out"
    });

    // Animate tech stack icons
    gsap.to(".tech-icon", {
      y: -10,
      rotation: 360,
      stagger: 0.1,
      duration: 0.6,
      ease: "back.out(1.7)"
    });

    // Show preview for completed projects
    if (project.status === 'completed' && project.demoUrl) {
      setTimeout(() => setShowPreview(true), 800);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setShowPreview(false);
    
    gsap.to(cardRef.current, {
      scale: 1,
      z: 0,
      rotationX: 0,
      rotationY: 0,
      duration: 0.4,
      ease: "power2.out"
    });

    gsap.to(".tech-icon", {
      y: 0,
      rotation: 0,
      duration: 0.4
    });
  };

  // Progress bar animation
  useEffect(() => {
    if (!isLoaded) return;
    
    gsap.fromTo(".progress-fill", 
      { width: "0%" },
      { 
        width: `${project.progress}%`,
        duration: 2,
        delay: index * 0.2,
        ease: "power2.out"
      }
    );
  }, [isLoaded, project.progress, index]);

  const handleDemoClick = () => {
    if (project.status === 'completed' && project.demoUrl) {
      window.open(project.demoUrl, '_blank');
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className={`project-card ${project.size}`}
      style={{
        '--card-gradient-start': project.gradient[0],
        '--card-gradient-end': project.gradient[1],
        '--particle-color': project.particleColor,
        gridColumn: `span ${cardSize.cols}`,
        height: cardSize.height,
        transform: `perspective(1000px) rotateX(${tiltValues.x}deg) rotateY(${tiltValues.y}deg)`
      }}
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Animated Border */}
      <div className="card-border"></div>
      
      {/* Background Particles */}
      <div className="card-particles">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="card-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Project Image with Parallax */}
      <div className="card-image-container">
        <img 
          ref={imageRef}
          src={project.image} 
          alt={project.title[language]}
          className="card-image"
        />
        <div className="image-overlay">
          <div className="overlay-gradient"></div>
        </div>
      </div>

      {/* Content Section */}
      <div ref={contentRef} className="card-content">
        {/* Status Badge */}
        <div className={`status-badge ${project.status}`}>
          <div className="status-dot"></div>
          <span>{t(project.status)}</span>
        </div>

        {/* Title with Morphing Effect */}
        <h3 className="card-title">
          {project.title[language]}
          <div className="title-underline"></div>
        </h3>

        {/* Description */}
        <p className="card-description">
          {project.description[language]}
        </p>

        {/* Tech Stack with Floating Icons */}
        <div className="tech-stack">
          {project.techStack.map((tech, i) => (
            <span key={i} className="tech-icon" style={{ animationDelay: `${i * 0.1}s` }}>
              {tech}
            </span>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="progress-container">
          <div className="progress-label">
            <span>Progress</span>
            <span>{project.progress}%</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="card-actions">
          <motion.button
            className="action-btn demo-btn"
            onClick={handleDemoClick}
            disabled={project.status !== 'completed'}
            whileHover={{ scale: 1.05, rotateY: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="bx bx-globe"></i>
            <span>{t('website')}</span>
            <div className="btn-glow"></div>
          </motion.button>

          <motion.button
            className="action-btn source-btn"
            whileHover={{ scale: 1.05, rotateY: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="bx bxl-github"></i>
            <span>{t('sourceCode')}</span>
            <div className="btn-glow"></div>
          </motion.button>
        </div>

        {/* Features List */}
        <div className="features-list">
          {project.features.map((feature, i) => (
            <div key={i} className="feature-item">
              <div className="feature-dot"></div>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Live Preview Modal */}
      {showPreview && project.status === 'completed' && project.demoUrl && (
        <motion.div
          className="live-preview"
          initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
          transition={{ duration: 0.5, ease: "back.out(1.7)" }}
        >
          <div className="preview-header">
            <span>Live Preview</span>
            <button onClick={() => setShowPreview(false)}>×</button>
          </div>
          <iframe
            src={project.demoUrl}
            title={`Preview of ${project.title[language]}`}
            className="preview-iframe"
          />
          <div className="preview-footer">
            <button onClick={handleDemoClick} className="open-full-btn">
              Open Full Site
            </button>
          </div>
        </motion.div>
      )}

      {/* Hover Glow Effect */}
      <div className="card-glow"></div>
    </motion.div>
  );
};

export default ProjectCard;