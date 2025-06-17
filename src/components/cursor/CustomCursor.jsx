import { useEffect, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const updateMousePosition = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const updateCursorPosition = () => {
      if (!cursorRef.current) return;

      // Smooth movement using lerp (linear interpolation)
      const lerp = (start, end, factor) => start + (end - start) * factor;

      const currentX = parseFloat(cursorRef.current.style.transform.split('(')[1]) || 0;
      const currentY = parseFloat(cursorRef.current.style.transform.split(',')[1]) || 0;
      
      const targetX = mouseRef.current.x - 3; // Half of cursor-dot width
      const targetY = mouseRef.current.y - 3;

      const newX = lerp(currentX, targetX, 0.4);
      const newY = lerp(currentY, targetY, 0.4);

      cursorRef.current.style.transform = `translate3d(${newX}px, ${newY}px, 0)`;

      animationFrameRef.current = requestAnimationFrame(updateCursorPosition);
    };

    window.addEventListener('mousemove', updateMousePosition);
    animationFrameRef.current = requestAnimationFrame(updateCursorPosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return <div ref={cursorRef} className="cursor-dot" />;
};

export default CustomCursor;