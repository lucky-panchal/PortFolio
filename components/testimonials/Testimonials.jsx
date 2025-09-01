import React, { useState, useEffect } from 'react';
import './testimonial.css';
import { Data } from './Data';
import Scroll3D from '../../src/components/scroll3d/Scroll3D';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const text = Data[currentIndex].description;
    setDisplayedText('');
    setIsTyping(true);
    
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.slice(0, i + 1));
        i++;
      } else {
        setIsTyping(false);
        clearInterval(typeInterval);
        
        // Auto-advance after typing completes
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % Data.length);
        }, 2000);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, [currentIndex]);

  const nextTestimonial = () => {
    setIsTyping(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Data.length);
  };

  const prevTestimonial = () => {
    setIsTyping(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Data.length) % Data.length);
  };

  return (
    <section className="testimonial container section" id="testimonials">
      <h2 className="section__title">People Often Say</h2>
      <span className="section__subtitle">Testimonials</span>

      <Scroll3D variant="rotationTransition" className="testimonial__container">
        <button className="carousel__button carousel__button--prev" onClick={prevTestimonial}>
          &lt;
        </button>
        
        <div className="testimonial__content-wrapper">
          <div className="testimonial__card">
            <div className="testimonial__flex">
              <div className="testimonial__image-container">
                <img 
                  src={Data[currentIndex].image} 
                  alt="" 
                  className="testimonial__img" 
                />
              </div>

              <div className="testimonial__text-content">
                <h3 className="testimonial__name">
                  {Data[currentIndex].title}
                </h3>
                <p className="testimonial__description">
                  {displayedText}
                  {isTyping && <span className="cursor">|</span>}
                </p>
              </div>
            </div>
          </div>
        </div>

        <button className="carousel__button carousel__button--next" onClick={nextTestimonial}>
          &gt;
        </button>
      </Scroll3D>
    </section>
  );
};

export default Testimonials;