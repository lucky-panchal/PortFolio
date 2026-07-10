import React from 'react';
import './scrollvelocity.css';
import { Data } from './Data';
import ScrollVelocityTestimonials from './ScrollVelocity';

const Testimonials = () => {
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
      </div>

      {/* Full-width scroll-velocity marquee — lives outside the container so it bleeds edge-to-edge */}
      <ScrollVelocityTestimonials data={Data} />
    </section>
  );
};

export default Testimonials;
