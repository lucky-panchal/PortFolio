import { useEffect } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  useEffect(() => {
    const dot = document.querySelector('.cursor-dot');
    const ring = document.querySelector('.cursor-ring');
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let isHovering = false;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX - 3}px`;
      dot.style.top = `${mouseY - 3}px`;
    };

    const onEnter = () => {
      isHovering = true;
      ring.classList.add('cursor-ring--hover');
      dot.classList.add('cursor-dot--hover');
    };

    const onLeave = () => {
      isHovering = false;
      ring.classList.remove('cursor-ring--hover');
      dot.classList.remove('cursor-dot--hover');
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.1;
      ringY += (mouseY - ringY) * 0.1;
      ring.style.left = `${ringX - 16}px`;
      ring.style.top = `${ringY - 16}px`;
      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove);
    animate();

    // attach hover to all interactive elements after mount
    const attach = () => {
      document.querySelectorAll('a, button, .work__card, .social__card, .exp__item-header, .testi__btn, .nav__link, .nav__cta').forEach(el => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };
    // slight delay to ensure DOM is ready
    setTimeout(attach, 500);

    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <>
      <div className="cursor-dot"></div>
      <div className="cursor-ring"></div>
    </>
  );
};

export default CustomCursor;
