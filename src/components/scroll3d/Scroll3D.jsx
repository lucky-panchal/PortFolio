import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const Scroll3D = ({ children, className, variant = 'parallaxDepth' }) => {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const variants = {
    parallaxDepth: {
      y: useTransform(scrollYProgress, [0, 1], [200, -200]),
      z: useTransform(scrollYProgress, [0, 0.5, 1], [-300, 0, -300]),
      opacity: useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
    },
    rotationTransition: {
      rotateX: useTransform(scrollYProgress, [0, 0.5, 1], [45, 0, -45]),
      rotateY: useTransform(scrollYProgress, [0, 1], [0, 360]),
      scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1, 0.7])
    },
    scaleFade: {
      scale: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1.1, 1.1, 0.5]),
      opacity: useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]),
      y: useTransform(scrollYProgress, [0, 1], [100, -100])
    },
    slideCube: {
      x: useTransform(scrollYProgress, [0, 0.5, 1], [-100, 0, 100]),
      rotateY: useTransform(scrollYProgress, [0, 0.5, 1], [-90, 0, 90]),
      z: useTransform(scrollYProgress, [0, 0.5, 1], [-200, 0, -200])
    }
  };

  const currentVariant = variants[variant];

  // Counter-rotate content to keep it readable during flips
  const contentRotateY = variant === 'rotationTransition' 
    ? useTransform(scrollYProgress, [0, 1], [0, -360])
    : variant === 'slideCube'
    ? useTransform(scrollYProgress, [0, 0.5, 1], [90, 0, -90])
    : useTransform(scrollYProgress, [0, 1], [0, 0]);

  const contentRotateX = variant === 'rotationTransition'
    ? useTransform(scrollYProgress, [0, 0.5, 1], [-45, 0, 45])
    : useTransform(scrollYProgress, [0, 1], [0, 0]);

  // Disable 3D on mobile
  if (isMobile) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1200px',
        ...currentVariant
      }}
    >
      <motion.div
        style={{
          rotateY: contentRotateY,
          rotateX: contentRotateX,
          transformStyle: 'preserve-3d',
          width: '100%',
          height: '100%'
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Scroll3D;