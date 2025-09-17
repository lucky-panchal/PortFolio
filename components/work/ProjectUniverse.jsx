import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useInView } from 'react-intersection-observer';
import { projectsData, projectsNav } from './Data';
import ProjectCard from './ProjectCard';
import ParticleSystem from './ParticleSystem';
import { useTranslation } from '../../src/hooks/useTranslation.jsx';
import './projectuniverse.css';

gsap.registerPlugin(ScrollTrigger);

const ProjectUniverse = () => {
  const { t, language } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  
  const containerRef = useRef();
  const titleRef = useRef();
  const filtersRef = useRef();
  const gridRef = useRef();
  const { ref: inViewRef, inView } = useInView({ threshold: 0.1 });

  // Mouse tracking for magnetic effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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

  // GSAP Animations
  useEffect(() => {
    if (!inView) return;

    const tl = gsap.timeline();
    
    // Title animation with morphing effect
    tl.fromTo(titleRef.current, 
      { 
        y: 100, 
        opacity: 0, 
        scale: 0.8,
        rotationX: -90 
      },
      { 
        y: 0, 
        opacity: 1, 
        scale: 1,
        rotationX: 0,
        duration: 1.2, 
        ease: "back.out(1.7)" 
      }
    );

    // Filter buttons with stagger
    tl.fromTo(filtersRef.current.children,
      { 
        y: 50, 
        opacity: 0, 
        scale: 0.5,
        rotation: 180 
      },
      { 
        y: 0, 
        opacity: 1, 
        scale: 1,
        rotation: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "elastic.out(1, 0.5)"
      }, "-=0.5"
    );

    // Grid entrance with morphing
    tl.fromTo(gridRef.current,
      { 
        scale: 0.3, 
        opacity: 0,
        rotationY: -180 
      },
      { 
        scale: 1, 
        opacity: 1,
        rotationY: 0,
        duration: 1.5,
        ease: "power3.out"
      }, "-=0.3"
    );

    setIsLoaded(true);

    // Scroll-triggered animations
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 80%",
      end: "bottom 20%",
      onUpdate: (self) => {
        const progress = self.progress;
        
        // Parallax background layers
        gsap.to(".universe-bg-layer-1", {
          y: progress * -100,
          rotation: progress * 10,
          duration: 0.3
        });
        
        gsap.to(".universe-bg-layer-2", {
          y: progress * -200,
          rotation: progress * -15,
          duration: 0.3
        });

        // Floating particles
        gsap.to(".floating-particle", {
          y: Math.sin(progress * Math.PI * 4) * 20,
          rotation: progress * 360,
          duration: 0.3
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [inView]);

  const handleFilterClick = (filterName) => {
    setActiveFilter(filterName);
    
    // Animate filter change
    gsap.to(gridRef.current.children, {
      scale: 0.8,
      opacity: 0.3,
      duration: 0.3,
      stagger: 0.05,
      onComplete: () => {
        gsap.to(gridRef.current.children, {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: "back.out(1.7)"
        });
      }
    });
  };

  return (
    <section className="project-universe" ref={containerRef}>
      <div ref={inViewRef}>
        {/* Animated Background Layers */}
        <div className="universe-background">
          <div className="universe-bg-layer-1"></div>
          <div className="universe-bg-layer-2"></div>
          <ParticleSystem mousePosition={mousePosition} />
        </div>

        {/* Title with 3D effect */}
        <motion.div 
          ref={titleRef}
          className="universe-title"
          style={{
            transform: `perspective(1000px) rotateX(${mousePosition.y * 0.01}deg) rotateY(${mousePosition.x * 0.01}deg)`
          }}
        >
          <h2 className="section__title universe-main-title">
            {t('projectsTitle')} 
            <span className="title-emoji">🚀</span>
          </h2>
          <span className="section__subtitle universe-subtitle">
            {t('projectsSubtitle')}
          </span>
        </motion.div>

        {/* Enhanced Filter System */}
        <div ref={filtersRef} className="universe-filters">
          {projectsNav.map((item, index) => (
            <motion.button
              key={index}
              className={`universe-filter ${activeFilter === item.name[language] ? 'active' : ''}`}
              onClick={() => handleFilterClick(item.name[language])}
              whileHover={{ 
                scale: 1.1, 
                rotateY: 10,
                boxShadow: `0 10px 30px ${item.color}40`
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                '--filter-color': item.color,
                background: activeFilter === item.name[language] 
                  ? `linear-gradient(135deg, ${item.color}, ${item.color}80)`
                  : 'rgba(255, 255, 255, 0.1)'
              }}
            >
              <span className="filter-icon">{item.icon}</span>
              <span className="filter-text">{item.name[language]}</span>
              <div className="filter-glow"></div>
            </motion.button>
          ))}
        </div>

        {/* Dynamic Masonry Grid */}
        <div ref={gridRef} className="universe-grid">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                mousePosition={mousePosition}
                isLoaded={isLoaded}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Floating Elements */}
        <div className="floating-elements">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="floating-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                '--particle-color': `hsl(${Math.random() * 360}, 70%, 60%)`
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectUniverse;