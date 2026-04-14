import React, { useState, useEffect } from 'react';
import './Header.css';
const navLinks = [
  { href: '#home',       icon: 'uil-estate',    label: 'Home' },
  { href: '#projects',   icon: 'uil-scenery',   label: 'Work' },
  { href: '#skills',     icon: 'uil-file-alt',  label: 'Skills' },
  { href: '#experience', icon: 'uil-bag-alt',   label: 'Experience' },
  { href: '#about',      icon: 'uil-user',      label: 'About' },
  { href: '#contact',    icon: 'uil-message',   label: 'Contact' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    setActive(href);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <nav className="nav container">
        <a href="#home" className="nav__logo" onClick={(e) => handleClick(e, '#home')}>
          &lt;Lacki Lohar/&gt;
        </a>

        {/* desktop links */}
        <ul className="nav__list">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={`nav__link link-hover${active === href ? ' nav__link--active' : ''}`}
                onClick={(e) => handleClick(e, href)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* desktop CTA */}
        <a
          href="https://cal.com/lucky-panchal-qckdio"
          className="nav__cta"
          target="_blank"
          rel="noopener noreferrer"
        >
          Let's talk
        </a>
      </nav>

      {/* mobile bottom bar */}
      <nav className="nav-mobile">
        {navLinks.map(({ href, icon, label }) => (
          <a
            key={href}
            href={href}
            className={`nav-mobile__link${active === href ? ' nav-mobile__link--active' : ''}`}
            onClick={(e) => handleClick(e, href)}
            aria-label={label}
          >
            <i className={`uil ${icon}`}></i>
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
