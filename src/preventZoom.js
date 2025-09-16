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

  // Prevent pinch zoom on touch devices
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

  // Force horizontal scroll to always be 0
  setInterval(() => {
    if (window.scrollX !== 0) {
      window.scrollTo(0, window.scrollY);
    }
  }, 10);

  // Block ALL horizontal scroll attempts
  document.addEventListener('wheel', function(e) {
    if (e.deltaX !== 0) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  }, { passive: false });

  // Block horizontal touch scroll
  document.addEventListener('touchmove', function(e) {
    if (e.touches.length === 1) {
      const touch = e.touches[0];
      if (Math.abs(touch.clientX - (touch.target.offsetLeft || 0)) > 10) {
        e.preventDefault();
      }
    }
  }, { passive: false });

  // Prevent context menu
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });
});