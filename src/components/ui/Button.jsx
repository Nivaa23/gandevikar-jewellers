/* src/components/ui/Button.jsx */
import React from 'react';
import { motion } from 'framer-motion';
import './Button.css';

/**
 * Reusable Premium Button Component
 * 
 * @param {string} variant - 'primary' | 'secondary' | 'outline' | 'ghost' | 'link'
 * @param {boolean} isLoading - Shows loading state
 * @param {boolean} disabled - Standard HTML disabled state
 * @param {React.ReactNode} children - Button content
 * @param {string} className - Additional CSS classes
 * @param {object} props - Other standard button props (e.g. onClick, aria-* attributes)
 */
export const Button = React.forwardRef(({
  variant = 'primary',
  isLoading = false,
  disabled = false,
  children,
  className = '',
  ...props
}, ref) => {
  const isButtonDisabled = disabled || isLoading;

  // Premium editorial micro-animations using Framer Motion
  const animationVariants = {
    hover: {
      scale: 1.015,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
    },
    tap: {
      scale: 0.985,
      transition: { duration: 0.1, ease: 'easeInOut' }
    }
  };

  return (
    <motion.button
      ref={ref}
      className={`btn btn-${variant} ${isLoading ? 'btn-loading' : ''} ${className}`}
      disabled={isButtonDisabled}
      whileHover={!isButtonDisabled ? "hover" : undefined}
      whileTap={!isButtonDisabled ? "tap" : undefined}
      variants={animationVariants}
      {...props}
    >
      {/* Visual background highlight effect for premium outline/ghost variants */}
      <span className="btn-bg-overlay" />
      
      <span className="btn-content">
        {isLoading && (
          <span className="btn-spinner" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle className="spinner-track" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
              <circle className="spinner-head" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeDasharray="30 150" />
            </svg>
          </span>
        )}
        <span className="btn-text">{children}</span>
      </span>

      {/* Underline for the text link variant */}
      {variant === 'link' && (
        <motion.span 
          className="btn-link-underline" 
          layoutId="underline"
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />
      )}
    </motion.button>
  );
});

Button.displayName = 'Button';
export default Button;
