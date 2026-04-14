import React from 'react';
import './footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer__container container">
      <div className="footer__top">
        <div className="footer__divider-line"></div>
      </div>
      <div className="footer__content">
        <span className="footer__logo">&lt;Lacki Lohar/&gt;</span>
        <ul className="footer__links">
          <li><a href="#projects" className="footer__link">Work</a></li>
          <li><a href="#skills" className="footer__link">Skills</a></li>
          <li><a href="#about" className="footer__link">About</a></li>
          <li><a href="#contact" className="footer__link">Contact</a></li>
        </ul>
        <div className="footer__socials">
          <a href="https://github.com/lucky-panchal" className="footer__social" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/lacki-lohar-463a23321" className="footer__social" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://www.instagram.com/luckyp4nch4l/" className="footer__social" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
      <div className="footer__bottom">
        <span className="footer__copy">© {new Date().getFullYear()} Lacki Lohar. All rights reserved.</span>
        <a href="#home" className="footer__back">Back to top ↑</a>
      </div>
    </div>
  </footer>
);

export default Footer;
