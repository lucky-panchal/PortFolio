import React, { useState, useEffect, useRef } from 'react';
import './testimonial.css';
import { Data } from './Data';

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const go = (idx) => {
    clearTimeout(timerRef.current);
    setCurrent((idx + Data.length) % Data.length);
  };

  useEffect(() => {
    timerRef.current = setTimeout(() => go(current + 1), 5000);
    return () => clearTimeout(timerRef.current);
  }, [current]);

  const item = Data[current];

  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <div className="section-label inview">
          <span className="section-label__title">Testimonials</span>
          <span className="section-label__number">06</span>
        </div>
        <div className="section-line"><div className="section-line__grow"></div></div>

        <h2 className="heading-display">
          <span className="reveal-text inview"><span>People Often</span></span>
          <span className="reveal-text inview"><span className="alt">Say.</span></span>
        </h2>

        <div className="testi__wrap inview">
          <div className="testi__card">
            <p className="testi__quote">"{typeof item.description === 'object' ? item.description.en : item.description}"</p>
            <div className="testi__author">
              <img src={item.image} alt={typeof item.title === 'object' ? item.title.en : item.title} className="testi__avatar" />
              <span className="testi__name">{typeof item.title === 'object' ? item.title.en : item.title}</span>
            </div>
          </div>

          <div className="testi__controls">
            <button className="testi__btn" onClick={() => go(current - 1)} aria-label="Previous">←</button>
            <div className="testi__dots">
              {Data.map((_, i) => (
                <button key={i} className={`testi__dot${i === current ? ' testi__dot--active' : ''}`} onClick={() => go(i)} aria-label={`Go to ${i + 1}`} />
              ))}
            </div>
            <button className="testi__btn" onClick={() => go(current + 1)} aria-label="Next">→</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
