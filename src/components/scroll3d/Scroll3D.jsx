import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const Scroll3D = ({ children, className, variant = 'parallaxDepth' }) => {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const isMobileWidth = window.innerWidth <= 768;
      setIsMobile(isMobileDevice || isMobileWidth);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    window.addEventListener('orientationchange', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('orientationchange', checkMobile);
    };
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // All transforms defined upfront to maintain hook order
  const parallaxY = useTransform(scrollYProgress, [0, 1], [200, -200]);
  const parallaxZ = useTransform(scrollYProgress, [0, 0.5, 1], [-300, 0, -300]);
  const parallaxOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [45, 0, -45]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotateScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1, 0.7]);
  
  const scaleTransform = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1.1, 1.1, 0.5]);
  const scaleOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scaleY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  
  const slideX = useTransform(scrollYProgress, [0, 0.5, 1], [-100, 0, 100]);
  const slideRotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-90, 0, 90]);
  const slideZ = useTransform(scrollYProgress, [0, 0.5, 1], [-200, 0, -200]);
  
  const contentRotateY = useTransform(scrollYProgress, [0, 1], [0, -360]);
  const contentRotateX = useTransform(scrollYProgress, [0, 0.5, 1], [-45, 0, 45]);
  const cubeContentRotateY = useTransform(scrollYProgress, [0, 0.5, 1], [90, 0, -90]);
  
  const mobileY = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const mobileOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

  // Mobile version with visible animations
  if (isMobile) {
    return (
      <motion.div
        ref={ref}
        className={className}
        style={{
          y: useTransform(scrollYProgress, [0, 1], [50, -50]),
          scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]),
          opacity: useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.7, 1, 1, 0.7]),
          position: 'relative'
        }}
      >
        {children}
      </motion.div>
    );
  }

  // Desktop version with full 3D animations
  const variants = {
    parallaxDepth: {
      y: parallaxY,
      z: parallaxZ,
      opacity: parallaxOpacity
    },
    rotationTransition: {
      rotateX: rotateX,
      rotateY: rotateY,
      scale: rotateScale
    },
    scaleFade: {
      scale: scaleTransform,
      opacity: scaleOpacity,
      y: scaleY
    },
    slideCube: {
      x: slideX,
      rotateY: slideRotateY,
      z: slideZ
    }
  };

  const currentVariant = variants[variant] || variants.parallaxDepth;
  
  const getContentRotation = () => {
    if (variant === 'rotationTransition') {
      return {
        rotateY: contentRotateY,
        rotateX: contentRotateX
      };
    }
    if (variant === 'slideCube') {
      return {
        rotateY: cubeContentRotateY
      };
    }
    return {};
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1200px',
        position: 'relative',
        ...currentVariant
      }}
    >
      <motion.div
        style={{
          ...getContentRotation(),
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