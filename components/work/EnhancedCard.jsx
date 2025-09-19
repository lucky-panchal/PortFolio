import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../../src/hooks/useTranslation.jsx';

const EnhancedCard = ({ project, index }) => {
  const { t, language } = useTranslation();
  const cardRef = useRef();
  const imageRef = useRef();
  const [isHovered, setIsHovered] = useState(false);

  const [tiltValues, setTiltValues] = useState({ x: 0, y: 0 });

  // Define card sizes based on index and project type
  const getCardSize = () => {
    if (project.size === 'hero' || index === 0) {
      return 'large'; // First card is always large
    }
    if (project.size === 'featured' || index % 4 === 3) {
      return 'wide'; // Every 4th card is wide
    }
    if (index % 3 === 1) {
      return 'tall'; // Every 3rd card starting from 1 is tall
    }
    return 'normal';
  };

  const cardSize = getCardSize();

  // 3D Tilt Effect
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (e.clientX - centerX) / (rect.width / 2);
    const deltaY = (e.clientY - centerY) / (rect.height / 2);
    
    setTiltValues({
      x: deltaY * -10,
      y: deltaX * 10
    });
  };

  // Simple hover effects
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTiltValues({ x: 0, y: 0 });
  };

  const handleDemoClick = () => {
    if (project.status === 'completed' && project.demoUrl) {
      window.open(project.demoUrl, '_blank');
    }
  };

  const handleSourceClick = () => {
    if (project.sourceUrl) {
      window.open(project.sourceUrl, '_blank');
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className={`enhanced-card ${cardSize}`}
      style={{
        '--card-gradient-start': project.gradient[0],
        '--card-gradient-end': project.gradient[1],
        transform: `perspective(1000px) rotateX(${tiltValues.x}deg) rotateY(${tiltValues.y}deg)`
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ 
        scale: 1.02, 
        y: -5,
        transition: { duration: 0.3 }
      }}
    >
      {/* Animated Border */}
      <div className="card-animated-border"></div>
      
      {/* Floating Particles */}
      <div className="card-floating-particles">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="floating-dot"
            style={{
              left: `${20 + (i * 15)}%`,
              animationDelay: `${i * 0.5}s`,
              backgroundColor: project.particleColor
            }}
          />
        ))}
      </div>

      {/* Compact Image Container */}
      <div className="enhanced-image-container">
        <img 
          ref={imageRef}
          src={project.image} 
          alt={project.title[language]}
          className="enhanced-image"
        />
        
        {/* Status Badge */}
        <div className={`enhanced-status ${project.status}`}>
          <div className="status-pulse"></div>
          <span>{t(project.status)}</span>
        </div>
        


        {/* Quick Info Overlay */}
        <div className="image-quick-overlay">
          <div className="quick-info">
            <span className="project-category">{project.category.toUpperCase()}</span>
          </div>
        </div>
      </div>

      {/* Enhanced Content Block */}
      <div className="enhanced-content">
        {/* Title */}
        <h3 className="enhanced-title">
          {project.title[language]}
          <div className="title-glow"></div>
        </h3>

        {/* Tech Stack */}
        <div className="enhanced-tech-stack">
          {project.techStack.slice(0, 3).map((tech, i) => (
            <span 
              key={i} 
              className="tech-badge"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="tech-more">+{project.techStack.length - 3}</span>
          )}
        </div>

        {/* Progress Bar */}
        <div className="enhanced-progress">
          <div className="progress-label">
            <span>Progress</span>
            <span>{project.progress}%</span>
          </div>
          <div className="progress-track">
            <div 
              className="progress-fill"
              style={{ 
                width: `${project.progress}%`,
                background: `linear-gradient(90deg, ${project.gradient[0]}, ${project.gradient[1]})`
              }}
            ></div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="enhanced-actions">
          <motion.button
            className="enhanced-btn demo-btn"
            onClick={handleDemoClick}
            disabled={project.status !== 'completed'}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="bx bx-globe"></i>
            <span>{t('website')}</span>
          </motion.button>

          <motion.button
            className="enhanced-btn source-btn"
            onClick={handleSourceClick}
            disabled={!project.sourceUrl}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="bx bxl-github"></i>
            <span>{t('sourceCode')}</span>
          </motion.button>
        </div>
      </div>



      {/* Glow Effect */}
      <div className="card-glow-effect"></div>
    </motion.div>
  );
};

export default EnhancedCard;