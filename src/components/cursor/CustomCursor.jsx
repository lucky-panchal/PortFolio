import { useEffect, useRef, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import './CustomCursor.css';

/* ─── MagicUI Smooth Cursor ─────────────────────────────────────────── */
const SPRING_CONFIG = { damping: 28, stiffness: 280, mass: 0.4 };

const CustomCursor = () => {
  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);

  // spring-smoothed positions for the outer ring
  const springX = useSpring(cursorX, SPRING_CONFIG);
  const springY = useSpring(cursorY, SPRING_CONFIG);

  const [variant, setVariant] = useState('default'); // 'default' | 'hover' | 'click'
  const rafRef = useRef(null);

  useEffect(() => {
    /* ── raw mouse tracking ── */
    const onMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const onDown = () => setVariant('click');
    const onUp   = () => setVariant('default');

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup',   onUp);

    /* ── hover targets ── */
    const onEnter = () => setVariant('hover');
    const onLeave = () => setVariant('default');

    const attachHover = () => {
      document.querySelectorAll(
        'a, button, .work__card, .social__card, .exp__item-header, .nav__link, .nav__cta, .vel-card'
      ).forEach(el => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };
    setTimeout(attachHover, 600);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup',   onUp);
    };
  }, [cursorX, cursorY]);

  /* ── variant styles ── */
  const outerVariants = {
    default: {
      width: 36,
      height: 36,
      backgroundColor: 'transparent',
      border: '1.5px solid rgba(10,10,10,0.45)',
      mixBlendMode: 'normal',
    },
    hover: {
      width: 64,
      height: 64,
      backgroundColor: 'rgba(34,197,94,0.12)',
      border: '1.5px solid rgba(34,197,94,0.55)',
      mixBlendMode: 'normal',
    },
    click: {
      width: 28,
      height: 28,
      backgroundColor: 'rgba(34,197,94,0.25)',
      border: '1.5px solid rgba(34,197,94,0.8)',
      mixBlendMode: 'normal',
    },
  };

  const dotVariants = {
    default: { width: 6,  height: 6,  backgroundColor: '#0a0a0a', opacity: 1   },
    hover:   { width: 8,  height: 8,  backgroundColor: '#22c55e', opacity: 1   },
    click:   { width: 12, height: 12, backgroundColor: '#22c55e', opacity: 0.8 },
  };

  return (
    <>
      {/* Outer ring — spring-smoothed, lags behind */}
      <motion.div
        className="cursor-ring-magic"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        variants={outerVariants}
        animate={variant}
        transition={{ type: 'spring', damping: 22, stiffness: 260, mass: 0.5 }}
      />

      {/* Inner dot — instant tracking */}
      <motion.div
        className="cursor-dot-magic"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        variants={dotVariants}
        animate={variant}
        transition={{ type: 'spring', damping: 30, stiffness: 400 }}
      />
    </>
  );
};

export default CustomCursor;
