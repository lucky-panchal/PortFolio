import './App.css';
import './palermo-optimizations.css';
import './no-wireframe.css';
import { useEffect } from 'react';
import { useSmoothScroll } from './hooks/useSmoothScroll.jsx';

import Header from '../components/header/Header';
import Home from '../components/home/Home';
import Work from '../components/work/Work';
import Skills from '../components/skills/Skills';
import Experience from '../components/experience/Experience';
import Qualification from '../components/qualification/Qualification';
import About from '../components/about/About';
import Testimonials from '../components/testimonials/Testimonials';
import Social from '../components/social/Social';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import ScrollUp from '../components/scrollup/ScrollUp';
import CustomCursor from './components/cursor/CustomCursor';

function App() {
  useEffect(() => {
    document.documentElement.removeAttribute('data-theme');
    document.documentElement.style.colorScheme = 'light';
  }, []);

  // scroll-driven inview + section line animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('inview')) {
              entry.target.classList.add('visible');
            }
            if (entry.target.classList.contains('reveal-text')) {
              entry.target.classList.add('visible');
            }
            if (entry.target.classList.contains('section-line')) {
              const grow = entry.target.querySelector('.section-line__grow');
              if (grow) grow.classList.add('animated');
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );
    document.querySelectorAll('.inview, .section-line, .reveal-text').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // image parallax on scroll
  useEffect(() => {
    const onScroll = () => {
      document.querySelectorAll('.parallax-img').forEach((img) => {
        const rect = img.getBoundingClientRect();
        const center = rect.top + rect.height / 2 - window.innerHeight / 2;
        img.style.transform = `translateY(${center * 0.08}px) scale(1.05)`;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // cursor scale on hover
  useEffect(() => {
    const ring = document.querySelector('.cursor-ring');
    if (!ring) return;
    const onEnter = () => ring.style.transform += ' scale(2.5)';
    const onLeave = () => ring.style.transform = ring.style.transform.replace(' scale(2.5)', '');
    const targets = document.querySelectorAll('a, button, .work__card, .social__card, .exp__item-header');
    targets.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });
    return () => targets.forEach(el => {
      el.removeEventListener('mouseenter', onEnter);
      el.removeEventListener('mouseleave', onLeave);
    });
  }, []);

  useSmoothScroll();

  return (
    <>
      {/* page load cover */}
      <div className="page-cover" id="page-cover"></div>
      <CustomCursor />
      <Header />
      <main className="main">
        <Home />
        <Work />
        <Skills />
        <Experience />
        <Qualification />
        <About />
        <Testimonials />
        <Social />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
