import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../../src/hooks/useTranslation.jsx';
import './skills-universe.css';

const SkillsUniverse = () => {
  const { t } = useTranslation();
  const containerRef = useRef();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skillsData = [
    // Frontend Skills - Top row
    { name: 'HTML', level: 85, category: 'frontend', icon: 'bxl-html5', color: '#E34F26', position: { x: -300, y: -150, z: 0 } },
    { name: 'CSS', level: 90, category: 'frontend', icon: 'bxl-css3', color: '#1572B6', position: { x: -150, y: -150, z: 50 } },
    { name: 'JavaScript', level: 80, category: 'frontend', icon: 'bxl-javascript', color: '#F7DF1E', position: { x: 0, y: -150, z: -30 } },
    { name: 'React', level: 85, category: 'frontend', icon: 'bxl-react', color: '#61DAFB', position: { x: 150, y: -150, z: 40 } },
    { name: 'TypeScript', level: 70, category: 'frontend', icon: 'bxl-typescript', color: '#3178C6', position: { x: 300, y: -150, z: 20 } },
    
    // Backend Skills - Middle row
    { name: 'Node.js', level: 80, category: 'backend', icon: 'bxl-nodejs', color: '#339933', position: { x: -225, y: 0, z: 60 } },
    { name: 'MongoDB', level: 75, category: 'backend', icon: 'bxl-mongodb', color: '#47A248', position: { x: -75, y: 0, z: -40 } },
    { name: 'Python', level: 85, category: 'backend', icon: 'bxl-python', color: '#3776AB', position: { x: 75, y: 0, z: 30 } },
    
    // Tools & Programming - Bottom row
    { name: 'Git', level: 90, category: 'tools', icon: 'bxl-git', color: '#F05032', position: { x: 225, y: 0, z: -50 } },
    { name: 'Figma', level: 75, category: 'tools', icon: 'bxl-figma', color: '#F24E1E', position: { x: -150, y: 150, z: 10 } },
    { name: 'C++', level: 80, category: 'programming', icon: 'bxl-c-plus-plus', color: '#00599C', position: { x: 0, y: 150, z: -20 } },
    { name: 'Java', level: 70, category: 'programming', icon: 'bxl-java', color: '#ED8B00', position: { x: 150, y: 150, z: 50 } }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
          y: ((e.clientY - rect.top) / rect.height - 0.5) * 2
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const getCategoryColor = (category) => {
    const colors = {
      frontend: '#FF6B6B',
      backend: '#4ECDC4',
      tools: '#45B7D1',
      programming: '#96CEB4'
    };
    return colors[category] || '#888';
  };

  return (
    <section className="skills-universe section" id="skills">
      <h2 className="section__title">{t('skillsTitle')}</h2>
      <span className="section__subtitle">{t('skillsSubtitle')}</span>

      <div 
        ref={containerRef}
        className="universe-container"
        style={{
          transform: `perspective(1000px) rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * 5}deg)`
        }}
      >
        {/* Realistic Star Field */}
        <div className="star-field">
          {/* Small distant stars */}
          {[...Array(200)].map((_, i) => (
            <div
              key={`small-${i}`}
              className="star small-star"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                '--twinkle-duration': `${Math.random() * 3 + 2}s`
              }}
            />
          ))}
          
          {/* Medium stars */}
          {[...Array(100)].map((_, i) => (
            <div
              key={`medium-${i}`}
              className="star medium-star"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                '--twinkle-duration': `${Math.random() * 4 + 3}s`
              }}
            />
          ))}
          
          {/* Large bright stars */}
          {[...Array(30)].map((_, i) => (
            <div
              key={`large-${i}`}
              className="star large-star"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                '--twinkle-duration': `${Math.random() * 5 + 4}s`
              }}
            />
          ))}
          
          {/* Nebula clouds */}
          {[...Array(5)].map((_, i) => (
            <div
              key={`nebula-${i}`}
              className="nebula"
              style={{
                left: `${Math.random() * 80 + 10}%`,
                top: `${Math.random() * 80 + 10}%`,
                '--nebula-color': `hsl(${Math.random() * 60 + 200}, 70%, 30%)`,
                animationDelay: `${Math.random() * 20}s`
              }}
            />
          ))}
        </div>

        {/* Skill Orbs */}
        <div className="skills-3d-space">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              className={`skill-orb ${selectedSkill === skill.name ? 'selected' : ''}`}
              style={{
                '--skill-color': skill.color,
                '--category-color': getCategoryColor(skill.category),
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) translate3d(${skill.position.x}px, ${skill.position.y}px, ${skill.position.z}px)`
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                delay: index * 0.1,
                duration: 0.8,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.2,
                z: 100,
                transition: { duration: 0.3 }
              }}
              onClick={() => setSelectedSkill(selectedSkill === skill.name ? null : skill.name)}
            >
              {/* Orb Core */}
              <div className="orb-core">
                <i className={`bx ${skill.icon} orb-icon`}></i>
                <div className="orb-glow"></div>
              </div>

              {/* Progress Ring */}
              <div className="progress-ring">
                <svg className="progress-circle" viewBox="0 0 100 100">
                  <circle
                    className="progress-bg"
                    cx="50"
                    cy="50"
                    r="45"
                  />
                  <circle
                    className="progress-fill"
                    cx="50"
                    cy="50"
                    r="45"
                    style={{
                      strokeDasharray: `${skill.level * 2.83} 283`,
                      animationDelay: `${index * 0.1}s`
                    }}
                  />
                </svg>
              </div>

              {/* Skill Info */}
              <div className="skill-info">
                <h3 className="skill-name">{skill.name}</h3>
                <span className="skill-level">{skill.level}%</span>
                <div className="skill-category">{skill.category}</div>
              </div>

              {/* Floating Particles */}
              <div className="orb-particles">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="orb-particle"
                    style={{
                      '--angle': `${i * 45}deg`,
                      '--delay': `${i * 0.2}s`
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Category Legend */}
        <div className="category-legend">
          {['frontend', 'backend', 'tools', 'programming'].map(category => (
            <div key={category} className="legend-item">
              <div 
                className="legend-color"
                style={{ backgroundColor: getCategoryColor(category) }}
              />
              <span>{category}</span>
            </div>
          ))}
        </div>

        {/* Instructions */}
        <div className="universe-instructions">
          <p>🖱️ Move mouse to rotate • 👆 Click orbs to explore</p>
        </div>
      </div>

      {/* Detailed Skill Modal */}
      {selectedSkill && (
        <motion.div
          className="skill-modal"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          <div className="modal-content">
            <button 
              className="modal-close"
              onClick={() => setSelectedSkill(null)}
            >
              ×
            </button>
            {skillsData.find(s => s.name === selectedSkill) && (
              <>
                <h3>{selectedSkill}</h3>
                <div className="modal-progress">
                  <div 
                    className="modal-progress-bar"
                    style={{ 
                      width: `${skillsData.find(s => s.name === selectedSkill).level}%`,
                      backgroundColor: skillsData.find(s => s.name === selectedSkill).color
                    }}
                  />
                </div>
                <p>Proficiency: {skillsData.find(s => s.name === selectedSkill).level}%</p>
              </>
            )}
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default SkillsUniverse;