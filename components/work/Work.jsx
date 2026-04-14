import React, { useState } from 'react';
import './work.css';
import { projectsData, projectsNav } from './Data';

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = activeFilter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <section className="work section" id="projects">
      <div className="container">
        <div className="section-label inview">
          <span className="section-label__title">Work</span>
          <span className="section-label__number">01</span>
        </div>
        <div className="section-line"><div className="section-line__grow"></div></div>

        <h2 className="heading-display">
          <span className="reveal-text inview"><span>Selected</span></span>
          <span className="reveal-text inview"><span className="alt">Projects.</span></span>
        </h2>

        <div className="work__filters inview">
          {projectsNav.map((item) => (
            <button
              key={item.name.en}
              className={`work__filter${activeFilter === item.name.en ? ' work__filter--active' : ''}`}
              onClick={() => setActiveFilter(item.name.en)}
            >
              {item.name.en}
            </button>
          ))}
        </div>

        <div className="work__grid">
          {filtered.map((project, i) => (
            <article key={project.id} className="work__card inview" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="work__card-img">
                <img src={project.image} alt={project.title.en} loading="lazy" />
                <div className="work__card-overlay">
                  <div className="work__card-links">
                    {project.demoUrl && (
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="work__card-link">
                        Live Demo ↗
                      </a>
                    )}
                    {project.sourceUrl && (
                      <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="work__card-link">
                        Source ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="work__card-body">
                <div className="work__card-meta">
                  <span className="pill">{project.category}</span>
                  <span className={`pill work__status work__status--${project.status}`}>{project.status.replace('_', ' ')}</span>
                </div>
                <h3 className="work__card-title">{project.title.en}</h3>
                <p className="work__card-desc">{project.description.en}</p>
                <div className="work__card-stack">
                  {project.techStack.map(t => <span key={t} className="pill">{t}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
