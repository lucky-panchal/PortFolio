import React from 'react';
import './skills.css';

const skillGroups = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', level: 'Intermediate', icon: 'bx bxl-html5' },
      { name: 'CSS', level: 'Advanced', icon: 'bx bxl-css3' },
      { name: 'JavaScript', level: 'Intermediate', icon: 'bx bxl-javascript' },
      { name: 'React', level: 'Intermediate', icon: 'bx bxl-react' },
      { name: 'TypeScript', level: 'Basic', icon: 'bx bxl-typescript' },
      { name: 'Tailwind CSS', level: 'Basic', icon: 'bx bxl-tailwind-css' },
    ]
  },
  {
    title: 'Backend & Tools',
    skills: [
      { name: 'Node.js', level: 'Advanced', icon: 'bx bxl-nodejs' },
      { name: 'MongoDB', level: 'Intermediate', icon: 'bx bxs-data' },
      { name: 'Git', level: 'Advanced', icon: 'bx bxl-git' },
      { name: 'Bootstrap', level: 'Basic', icon: 'bx bxl-bootstrap' },
      { name: 'Python', level: 'Basic', icon: 'bx bxl-python' },
      { name: 'Figma', level: 'Basic', icon: 'bx bxl-figma' },
    ]
  }
];

const Skills = () => (
  <section className="skills section" id="skills">
    <div className="container">
      <div className="section-label inview">
        <span className="section-label__title">Skills</span>
        <span className="section-label__number">02</span>
      </div>
      <div className="section-line"><div className="section-line__grow"></div></div>

      <h2 className="heading-display">
        <span className="reveal-text inview"><span>Capabilities &</span></span>
        <span className="reveal-text inview"><span className="alt">Tech Stack.</span></span>
      </h2>

      <div className="skills__grid">
        {skillGroups.map((group) => (
          <div key={group.title} className="skills__group-card inview">
            <h3 className="skills__group-title">{group.title}</h3>
            <div className="skills__list">
              {group.skills.map((skill) => (
                <div key={skill.name} className="skills__item">
                  <i className={skill.icon}></i>
                  <div className="skills__item-info">
                    <span className="skills__item-name">{skill.name}</span>
                    <span className="skills__item-level">{skill.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
