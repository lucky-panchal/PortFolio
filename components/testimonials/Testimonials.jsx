import React, { useState, useEffect, useRef } from 'react';
import './testimonial.css';
import { Data } from './Data';
import Scroll3D from '../../src/components/scroll3d/Scroll3D';
import { useTranslation } from '../../src/hooks/useTranslation';


const Testimonials = () => {
  const { t, language } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const typeIntervalRef = useRef(null);
  const autoAdvanceRef = useRef(null);
  const isChangingRef = useRef(false);

  useEffect(() => {
    // Clear any existing intervals
    if (typeIntervalRef.current) clearInterval(typeIntervalRef.current);
    if (autoAdvanceRef.current) clearTimeout(autoAdvanceRef.current);

    const text = Data[currentIndex].description[language];
    setDisplayedText('');
    setIsTyping(true);
    
    let i = 0;
    typeIntervalRef.current = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.slice(0, i + 1));
        i++;
      } else {
        setIsTyping(false);
        clearInterval(typeIntervalRef.current);
        
        // Auto-advance after typing completes
        autoAdvanceRef.current = setTimeout(() => {
          if (!isChangingRef.current) {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % Data.length);
          }
        }, 3000);
      }
    }, 50);

    return () => {
      if (typeIntervalRef.current) clearInterval(typeIntervalRef.current);
      if (autoAdvanceRef.current) clearTimeout(autoAdvanceRef.current);
    };
  }, [currentIndex, language]);

  const nextTestimonial = () => {
    if (isChangingRef.current) return;
    
    isChangingRef.current = true;
    if (typeIntervalRef.current) clearInterval(typeIntervalRef.current);
    if (autoAdvanceRef.current) clearTimeout(autoAdvanceRef.current);
    
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Data.length);
    
    setTimeout(() => {
      isChangingRef.current = false;
    }, 100);
  };

  const prevTestimonial = () => {
    if (isChangingRef.current) return;
    
    isChangingRef.current = true;
    if (typeIntervalRef.current) clearInterval(typeIntervalRef.current);
    if (autoAdvanceRef.current) clearTimeout(autoAdvanceRef.current);
    
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Data.length) % Data.length);
    
    setTimeout(() => {
      isChangingRef.current = false;
    }, 100);
  };

  return (
    <section className="testimonial container section" id="testimonials">
      <h2 className="section__title">{t('testimonialsTitle')}</h2>
      <span className="section__subtitle">{t('testimonialsSubtitle')}</span>

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
                  alt={Data[currentIndex].title}
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