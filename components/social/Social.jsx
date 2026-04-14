import React from 'react';
import './social.css';

const socials = [
  {
    name: 'Instagram',
    icon: 'bx bxl-instagram',
    url: 'https://www.instagram.com/luckyp4nch4l',
    stats: '600+ Followers · Just Sharing Life',
  },
  {
    name: 'LinkedIn',
    icon: 'bx bxl-linkedin',
    url: 'https://www.linkedin.com/in/lacki-lohar-463a23321',
    stats: '3000+ Connections · Professional Network',
  },
  {
    name: 'GitHub',
    icon: 'bx bxl-github',
    url: 'https://github.com/lucky-panchal',
    stats: '25+ Repos · 150+ Commits',
  },
];

const Social = () => (
  <section className="social section" id="social">
    <div className="container">
      <div className="section-label inview">
        <span className="section-label__title">Connect</span>
        <span className="section-label__number">07</span>
      </div>
      <div className="section-line"><div className="section-line__grow"></div></div>

      <h2 className="heading-display">
        <span className="reveal-text inview"><span>Stay</span></span>
        <span className="reveal-text inview"><span className="alt">Connected.</span></span>
      </h2>

      <div className="social__grid">
        {socials.map((s, i) => (
          <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social__card inview"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div className="social__card-top">
              <i className={s.icon}></i>
              <span className="social__arrow">↗</span>
            </div>
            <h3 className="social__name">{s.name}</h3>
            <p className="social__stats">{s.stats}</p>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Social;
