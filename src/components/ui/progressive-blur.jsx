import React from 'react';

export const ProgressiveBlur = ({
  direction = 'bottom',
  className = '',
  maxBlur = 20,
  height = '120px',
  zIndex = 10,
}) => {
  // Stacking multiple backdrop-filter divs with progressive blurs and gradient masks
  // creates a true, buttery-smooth variable blur effect.
  const layersCount = 8;
  const layers = Array.from({ length: layersCount }, (_, i) => {
    // Blur radius goes from small to maxBlur
    const blur = ((i + 1) / layersCount) * maxBlur;
    
    // Mask calculations to fade the layers in sequence
    const start = (i / layersCount) * 100;
    const end = ((i + 1) / layersCount) * 100;
    
    const gradientDirection = 
      direction === 'bottom' ? 'to bottom' :
      direction === 'top' ? 'to top' :
      direction === 'left' ? 'to left' : 'to right';
      
    // The mask fades in the blurred layer so that as you move along the direction,
    // subsequent (stronger) blur layers become visible.
    const mask = `linear-gradient(${gradientDirection}, rgba(0,0,0,0) ${start}%, rgba(0,0,0,1) ${end}%)`;
    
    return { blur, mask };
  });

  const positionStyles = {
    position: 'fixed',
    left: 0,
    right: 0,
    [direction]: 0,
    height,
    pointerEvents: 'none',
    zIndex,
  };

  return (
    <div className={`progressive-blur ${className}`} style={positionStyles}>
      {layers.map((layer, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            inset: 0,
            backdropFilter: `blur(${layer.blur}px)`,
            WebkitBackdropFilter: `blur(${layer.blur}px)`,
            maskImage: layer.mask,
            WebkitMaskImage: layer.mask,
          }}
        />
      ))}
    </div>
  );
};

export default ProgressiveBlur;
