import React from 'react';
import './home.css';
import ProfilePic from '../../src/assets/profile-pic.png';

const Home = () => {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="home section" id="home">
      <div className="home__container container">

        <div className="home__top inview">
          <span className="home__label">Full Stack Developer — Based in India</span>
          <div className="home__socials">
            <a href="https://github.com/lucky-panchal" target="_blank" rel="noopener noreferrer" className="home__social-link link-hover">GitHub</a>
            <a href="https://linkedin.com/in/lacki-lohar-463a23321" target="_blank" rel="noopener noreferrer" className="home__social-link link-hover">LinkedIn</a>
            <a href="https://www.instagram.com/luckyp4nch4l/" target="_blank" rel="noopener noreferrer" className="home__social-link link-hover">Instagram</a>
          </div>
        </div>

        <div className="section-line"><div className="section-line__grow"></div></div>

        <div className="home__hero">
          <div className="home__hero-text inview">
            <h1 className="home__title">
            <span className="reveal-text inview"><span>Lacki Lohar</span></span>
            <span className="reveal-text inview"><span className="home__title-alt">Software Developer</span></span>
          </h1>
            <p className="home__description">
              I'm a creative developer based in Ahmedabad, passionate and dedicated to building modern web experiences.
            </p>
            <div className="home__actions">
              <button className="btn btn--primary" onClick={() => scrollTo('#projects')}>View Work</button>
              <a href="https://cal.com/lucky-panchal-qckdio" className="btn btn--outline" target="_blank" rel="noopener noreferrer">Let's Talk</a>
            </div>
          </div>

          <div className="home__hero-image inview">
            <div className="home__img-wrap">
              <img src={ProfilePic} alt="Lacki Lohar" className="home__img parallax-img" />
            </div>
          </div>
        </div>

        <div className="home__scroll inview">
          <span className="home__scroll-text">Scroll</span>
          <div className="home__scroll-line"></div>
        </div>

      </div>
    </section>
  );
};

export default Home;
