import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData, projectsNav } from './Data';
import EnhancedCard from './EnhancedCard';
import { useTranslation } from '../../src/hooks/useTranslation.jsx';
import './enhanced-works.css';

const EnhancedWorks = () => {
  const { language } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const containerRef = useRef();
  const filtersRef = useRef();
  const gridRef = useRef();

  
  
  // Filter projects
  useEffect(() => {
    if (activeFilter === 'all' || activeFilter === 'सभी') {
      setFilteredProjects(projectsData);
    } else {
      const categoryMap = {
        'app': 'app', 'ऐप': 'app',
        'web': 'web', 'वेब': 'web'
      };
      const mappedCategory = categoryMap[activeFilter] || activeFilter;
      setFilteredProjects(projectsData.filter(project => project.category === mappedCategory));
    }
  }, [activeFilter]);

  // Simple animation without GSAP conflicts
  useEffect(() => {
    // Simple CSS-based animations
    const cards = gridRef.current?.children;
    if (cards) {
      Array.from(cards).forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
      });
    }
  }, [filteredProjects]);

  const handleFilterClick = (filterName) => {
    setActiveFilter(filterName);
  };

  return (
    <div ref={containerRef} className="enhanced-works">
      {/* Enhanced Filters */}
      <div ref={filtersRef} className="enhanced-filters">
        {projectsNav.map((item, index) => (
          <motion.button
            key={index}
            className={`enhanced-filter ${activeFilter === item.name[language] ? 'active' : ''}`}
            onClick={() => handleFilterClick(item.name[language])}
            whileHover={{ 
              scale: 1.1,
              rotateY: 10,
              boxShadow: `0 15px 35px ${item.color}40`
            }}
            whileTap={{ scale: 0.9 }}
            style={{ '--filter-color': item.color }}
          >
            <span className="filter-icon">{item.icon}</span>
            <span className="filter-text">{item.name[language]}</span>
            <div className="filter-ripple"></div>
          </motion.button>
        ))}
      </div>

      {/* Dynamic Masonry Grid */}
      <div ref={gridRef} className="enhanced-grid">
        <AnimatePresence mode="wait">
          {filteredProjects.map((project, index) => (
            <EnhancedCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default EnhancedWorks;