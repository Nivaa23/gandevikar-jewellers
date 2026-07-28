/* src/hooks/useScroll.js */
import { useState, useEffect } from 'react';

/**
 * Custom React hook to track window scroll position.
 * Returns { scrollY, isScrolled } where isScrolled is true if window is scrolled past threshold.
 * 
 * @param {number} threshold - Scroll offset threshold in pixels
 */
export const useScroll = (threshold = 50) => {
  const [scrollData, setScrollData] = useState({
    scrollY: 0,
    isScrolled: false
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollData({
        scrollY: currentScrollY,
        isScrolled: currentScrollY > threshold
      });
    };

    // Attach listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return scrollData;
};

export default useScroll;
