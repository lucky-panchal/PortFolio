import React from 'react';
import './about.css';
import AboutImg from '../../src/assets/about-pic.jpg';
import CV from '../../src/assets/CV.pdf';

const stats = [
  { value: '1+', label: 'Years Experience' },
  { value: '4+', label: 'Projects Completed' },
  { value: '2+', label: 'Internships' },
];

const About = () => (
  <section className="about section" id="about">
    <div className="container">
      <div className="section-label inview">
        <span className="section-label__title">About</span>
        <span className="section-label__number">05</span>
      </div>
      <div className="section-line"><div className="section-line__grow"></div></div>

      <h2 className="heading-display">
        <span className="reveal-text inview"><span>Full Stack</span></span>
        <span className="reveal-text inview"><span className="alt">Developer.</span></span>
      </h2>

      <div className="about__grid">
        <div className="about__img-wrap inview">
          <img src={AboutImg} alt="Lacki Lohar" className="about__img parallax-img" />
        </div>

        <div className="about__content">
          <div className="about__stats inview">
            {stats.map((s) => (
              <div key={s.label} className="about__stat">
                <span className="about__stat-value">{s.value}</span>
                <span className="about__stat-label">{s.label}</span>
              </div>
            ))}
          </div>

          <p className="about__desc inview">
            Web developer with extensive knowledge and experience in web technologies and UI/UX design, delivering quality work. I specialize in crafting modern, responsive web applications using the MERN stack.
          </p>

          <div className="about__traits inview">
            <div className="about__trait">
              <i className="bx bx-bar-chart-alt"></i>
              <div>
                <h4>Leadership</h4>
                <span>Strategic Impact</span>
              </div>
            </div>
            <div className="about__trait">
              <i className="bx bx-conversation"></i>
              <div>
                <h4>Collaboration</h4>
                <span>Open Ideas</span>
              </div>
            </div>
            <div className="about__trait">
              <i className="bx bx-support"></i>
              <div>
                <h4>Support</h4>
                <span>Always Available</span>
              </div>
            </div>
          </div>

          <a href={CV} download className="btn btn--primary inview">
            Download CV ↓
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default About;
