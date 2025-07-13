import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './testimonial.css';
import { Data } from './Data';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Data.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Data.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Data.length) % Data.length);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0
    })
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="testimonial container section" id="testimonials">
      <motion.h2 
        className="section__title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
       People Often Say
      </motion.h2>
      
      <motion.span 
        className="section__subtitle"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Testimonials
      </motion.span>

      <div className="testimonial__container">
        <button className="carousel__button carousel__button--prev" onClick={prevTestimonial}>
          &lt;
        </button>
        
        <AnimatePresence mode="wait" custom={direction}>
          <div className="testimonial__content-wrapper">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="testimonial__card"
            >
              <div className="testimonial__flex">
                <motion.div 
                  className="testimonial__image-container"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <img 
                    src={Data[currentIndex].image} 
                    alt="" 
                    className="testimonial__img" 
                  />
                </motion.div>

                <motion.div 
                  className="testimonial__text-content"
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <h3 className="testimonial__name">{Data[currentIndex].title}</h3>
                  <p className="testimonial__description">{Data[currentIndex].description}</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </AnimatePresence>

        <button className="carousel__button carousel__button--next" onClick={nextTestimonial}>
          &gt;
        </button>
      </div>
    </section>
  );
};

export default Testimonials;