import React, { useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useVelocity,
  useTransform,
  useSpring,
  useAnimationFrame,
} from 'framer-motion';

/* ── helpers ── */
function wrap(min, max, v) {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
}

/**
 * A single infinite-marquee row whose scroll speed is boosted
 * proportionally to the page-scroll velocity.
 */
function VelocityMarquee({ children, baseVelocity = 5 }) {
  const baseX = useRef(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const [xPercent, setXPercent] = useState(0);
  const directionFactor = useRef(baseVelocity > 0 ? 1 : -1);

  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.current = wrap(-50, 0, baseX.current + moveBy);
    setXPercent(baseX.current);
  });

  return (
    <div className="vel-marquee__track">
      <motion.div
        className="vel-marquee__inner"
        style={{ x: `${xPercent}%` }}
      >
        {/* Duplicate ×4 so the seamless loop always fills the screen */}
        {[...Array(4)].map((_, i) => (
          <span key={i} className="vel-marquee__segment">
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ── Full testimonial card ── */
function TestimonialCard({ text, author, image }) {
  return (
    <div className="vel-card">
      <div className="vel-card__quote-mark">"</div>
      <p className="vel-card__text">{text}"</p>
      <div className="vel-card__author">
        <img src={image} alt={author} className="vel-card__avatar" />
        <div>
          <div className="vel-card__name">{author}</div>
        </div>
      </div>
    </div>
  );
}

/* ── Main exported component ── */
export default function ScrollVelocityTestimonials({ data }) {
  const cards = data.map((d) => (
    <TestimonialCard
      key={d.id}
      text={typeof d.description === 'object' ? d.description.en : d.description}
      author={typeof d.title === 'object' ? d.title.en : d.title}
      image={d.image}
    />
  ));

  const cardsReversed = [...data].reverse().map((d) => (
    <TestimonialCard
      key={d.id + '-r'}
      text={typeof d.description === 'object' ? d.description.en : d.description}
      author={typeof d.title === 'object' ? d.title.en : d.title}
      image={d.image}
    />
  ));

  return (
    <div className="vel-container">
      <VelocityMarquee baseVelocity={3}>{cards}</VelocityMarquee>
      <VelocityMarquee baseVelocity={-3}>{cardsReversed}</VelocityMarquee>
    </div>
  );
}
