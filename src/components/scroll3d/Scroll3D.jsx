import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const Scroll3D = ({ children, className, variant = 'fadeUp' }) => {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.1"]
  });

  // Professional animation variants
  const fadeUpY = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const fadeUpOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  
  const slideLeftX = useTransform(scrollYProgress, [0, 1], [-100, 0]);
  const slideLeftOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  
  const slideRightX = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const slideRightOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  
  const scaleUpScale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const scaleUpOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  
  const flipY = useTransform(scrollYProgress, [0, 1], [90, 0]);
  const flipOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  
  const zoomInScale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const zoomInOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  
  const slideDownY = useTransform(scrollYProgress, [0, 1], [-50, 0]);
  const slideDownOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  
  const slideUpY = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const slideUpOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  
  const zoomOutScale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);
  const zoomOutOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  
  const bounceY = useTransform(scrollYProgress, [0, 0.5, 1], [100, -20, 0]);
  const bounceOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  
  const elasticScale = useTransform(scrollYProgress, [0, 0.6, 1], [0.3, 1.1, 1]);
  const elasticOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const variants = {
    fadeUp: {
      y: fadeUpY,
      opacity: fadeUpOpacity
    },
    slideDown: {
      y: slideDownY,
      opacity: slideDownOpacity
    },
    slideLeft: {
      x: slideLeftX,
      opacity: slideLeftOpacity
    },
    slideRight: {
      x: slideRightX,
      opacity: slideRightOpacity
    },
    slideUp: {
      y: slideUpY,
      opacity: slideUpOpacity
    },
    scaleUp: {
      scale: scaleUpScale,
      opacity: scaleUpOpacity
    },
    flip: {
      rotateY: flipY,
      opacity: flipOpacity
    },
    zoomIn: {
      scale: zoomInScale,
      opacity: zoomInOpacity
    },
    zoomOut: {
      scale: zoomOutScale,
      opacity: zoomOutOpacity
    },
    bounce: {
      y: bounceY,
      opacity: bounceOpacity
    },
    elastic: {
      scale: elasticScale,
      opacity: elasticOpacity
    }
  };

  const currentVariant = variants[variant] || variants.fadeUp;

  // Mobile gets simpler, faster animations
  const mobileVariants = {
    fadeUp: { y: 20, opacity: 0 },
    slideDown: { y: -20, opacity: 0 },
    slideLeft: { x: -20, opacity: 0 },
    slideRight: { x: 20, opacity: 0 },
    slideUp: { y: 20, opacity: 0 },
    scaleUp: { scale: 0.95, opacity: 0 },
    flip: { rotateY: 10, opacity: 0 },
    zoomIn: { scale: 0.9, opacity: 0 },
    zoomOut: { scale: 1.05, opacity: 0 },
    bounce: { y: 15, opacity: 0 },
    elastic: { scale: 0.95, opacity: 0 }
  };

  const mobileAnimate = {
    y: 0,
    x: 0,
    scale: 1,
    rotateY: 0,
    opacity: 1
  };

  if (isMobile) {
    return (
      <motion.div
        ref={ref}
        className={className}
        initial={mobileVariants[variant] || mobileVariants.fadeUp}
        whileInView={mobileAnimate}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.9,
          ease: [0.16, 1, 0.3, 1],
          type: "spring",
          stiffness: 100,
          damping: 15
        }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        ...currentVariant,
        transformOrigin: 'center center'
      }}
      transition={{
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1]
      }}
    >
      {children}
    </motion.div>
  );
};

export default Scroll3D;