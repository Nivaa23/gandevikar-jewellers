/* src/components/ui/Animate.jsx */
import React from 'react';
import { motion } from 'framer-motion';

// Premium luxury transition curve: slow, smooth, exponential decelerating (easeOutExpo)
const LUXURY_EASE = [0.16, 1, 0.3, 1];

/**
 * FadeIn Animation Wrapper
 */
export const FadeIn = ({
  children,
  delay = 0,
  duration = 1.2,
  className = '',
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration,
        delay,
        ease: LUXURY_EASE
      }}
      className={className}
      {...props}
    >
      {/* Visual content wrapper */}
      {children}
    </motion.div>
  );
};

/**
 * SlideIn Animation Wrapper (supports directions: 'up' | 'down' | 'left' | 'right')
 */
export const SlideIn = ({
  children,
  direction = 'up',
  distance = 40,
  delay = 0,
  duration = 1.2,
  className = '',
  ...props
}) => {
  const getOffset = () => {
    switch (direction) {
      case 'up': return { y: distance };
      case 'down': return { y: -distance };
      case 'left': return { x: distance };
      case 'right': return { x: -distance };
      default: return { y: distance };
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...getOffset() }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        duration,
        delay,
        ease: LUXURY_EASE
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

/**
 * Editorial Reveal Animation (Slides text/content up through a clipping boundary)
 */
export const Reveal = ({
  children,
  delay = 0,
  duration = 1.4,
  className = '',
  ...props
}) => {
  return (
    <div style={{ overflow: 'hidden', position: 'relative' }} className={className}>
      <motion.div
        initial={{ y: '102%' }}
        animate={{ y: 0 }}
        transition={{
          duration,
          delay,
          ease: LUXURY_EASE
        }}
        {...props}
      >
        {children}
      </motion.div>
    </div>
  );
};

/**
 * Floating / Gentle breathing animation for jewellery showcase images
 */
export const GentleFloat = ({
  children,
  amplitude = 12,
  duration = 6,
  className = '',
  ...props
}) => {
  return (
    <motion.div
      animate={{
        y: [0, -amplitude, 0]
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut'
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};
