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
    }, 6500);

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
      rotateY: direction > 0 ? -90 : 90,
      rotateX: 45,
      opacity: 0,
      scale: 0.3,
      z: -200
    }),
    center: {
      rotateY: 0,
      rotateX: 0,
      opacity: 1,
      scale: 1,
      z: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.1
      }
    },
    exit: (direction) => ({
      rotateY: direction > 0 ? 90 : -90,
      rotateX: -45,
      opacity: 0,
      scale: 0.3,
      z: -200,
      transition: {
        duration: 0.6,
        ease: "easeIn"
      }
    })
  };

  const childVariants = {
    enter: {
      y: 50,
      opacity: 0,
      rotateX: 90
    },
    center: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "backOut"
      }
    },
    exit: {
      y: -50,
      opacity: 0,
      rotateX: -90
    }
  };

  return (
    <section className="testimonial container section" id="testimonials">
      <h2 className="section__title">People Often Say</h2>
      <span className="section__subtitle">Testimonials</span>

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
              transition={{ 
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              style={{
                transformStyle: "preserve-3d",
                perspective: 1000
              }}
              className="testimonial__card"
            >
              <div className="testimonial__flex">
                <motion.div 
                  className="testimonial__image-container"
                  variants={childVariants}
                  whileHover={{
                    scale: 1.1,
                    rotateY: 15,
                    transition: { duration: 0.3 }
                  }}
                >
                  <img 
                    src={Data[currentIndex].image} 
                    alt="" 
                    className="testimonial__img" 
                  />
                </motion.div>

                <motion.div 
                  className="testimonial__text-content"
                  variants={childVariants}
                >
                  <motion.h3 
                    className="testimonial__name"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.6, ease: "backOut" }}
                  >
                    {Data[currentIndex].title}
                  </motion.h3>
                  <motion.p 
                    className="testimonial__description"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  >
                    {Data[currentIndex].description.split(' ').map((word, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          delay: 0.7 + index * 0.03,
                          duration: 0.4
                        }}
                        style={{ display: 'inline-block', marginRight: '4px' }}
                      >
                        {word}
                      </motion.span>
                    ))}
                  </motion.p>
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