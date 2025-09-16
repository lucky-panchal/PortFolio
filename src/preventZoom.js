// Prevent zoom and horizontal scroll
document.addEventListener('DOMContentLoaded', function() {
  // Prevent zoom with keyboard shortcuts
  document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && (e.key === '+' || e.key === '-' || e.key === '0')) {
      e.preventDefault();
    }
  });

  // Prevent zoom with mouse wheel
  document.addEventListener('wheel', function(e) {
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
    }
  }, { passive: false });

  // COMPLETE horizontal scroll block - this catches ALL horizontal scroll including touchpad
  document.addEventListener('wheel', function(e) {
    if (e.deltaX !== 0) {
      e.preventDefault();
      e.stopImmediatePropagation();
      return false;
    }
  }, { passive: false, capture: true });

  // Block touchpad gestures
  document.addEventListener('gesturestart', function(e) {
    e.preventDefault();
  }, { passive: false });

  document.addEventListener('gesturechange', function(e) {
    e.preventDefault();
  }, { passive: false });

  document.addEventListener('gestureend', function(e) {
    e.preventDefault();
  }, { passive: false });

  // Prevent pinch zoom
  document.addEventListener('touchstart', function(e) {
    if (e.touches.length > 1) {
      e.preventDefault();
    }
  }, { passive: false });

  document.addEventListener('touchmove', function(e) {
    if (e.touches.length > 1) {
      e.preventDefault();
    }
  }, { passive: false });

  // Force scroll position
  const forcePosition = () => {
    if (window.scrollX !== 0) {
      window.scrollTo(0, window.scrollY);
    }
  };
  
  setInterval(forcePosition, 1);
  window.addEventListener('scroll', forcePosition, { passive: false });

  // Override scroll behavior
  Object.defineProperty(window, 'scrollX', {
    get: () => 0,
    set: () => {},
    configurable: false
  });

  // Prevent context menu
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });
});