import React from 'react';
import './qualification.css';

const timeline = [
  {
    title: 'Higher Secondary',
    subtitle: 'RBSE — Udaipur, Rajasthan',
    period: '2022 — 2024',
    side: 'left',
  },
  {
    title: 'Bachelor of Technology (CSE)',
    subtitle: 'Rai University — Ahmedabad, Gujarat',
    period: '2024 — Present',
    side: 'right',
  },
];

const Qualification = () => (
  <section className="qualification section" id="qualification">
    <div className="container">
      <div className="section-label inview">
        <span className="section-label__title">Qualification</span>
        <span className="section-label__number">04</span>
      </div>
      <div className="section-line"><div className="section-line__grow"></div></div>

      <h2 className="heading-display">
        <span className="reveal-text inview"><span>Education</span></span>
        <span className="reveal-text inview"><span className="alt">Journey.</span></span>
      </h2>

      <div className="qual__timeline">
        {timeline.map((item, i) => (
          <div key={i} className={`qual__item qual__item--${item.side} inview`} style={{ transitionDelay: `${i * 0.15}s` }}>
            <div className="qual__dot"></div>
            <div className="qual__card">
              <h3 className="qual__title">{item.title}</h3>
              <span className="qual__subtitle">{item.subtitle}</span>
              <span className="qual__period">
                <i className="uil uil-calendar-alt"></i> {item.period}
              </span>
            </div>
          </div>
        ))}
        <div className="qual__line"></div>
      </div>
    </div>
  </section>
);

export default Qualification;
