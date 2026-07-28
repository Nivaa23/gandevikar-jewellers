/* src/components/ui/Card.jsx */
import React from 'react';
import { motion } from 'framer-motion';
import './Card.css';

/**
 * Reusable Premium Card Component
 * 
 * @param {string} variant - 'luxury-product' | 'feature' | 'editorial' | 'glass' | 'image' | 'info'
 * @param {string} title - Main header/title
 * @param {string} subtitle - Small text or category above title
 * @param {string} image - Image source url
 * @param {string} price - Price text (specifically for luxury-product)
 * @param {string} badge - Floating tag or text (e.g. '1927 Heritage Collection')
 * @param {string} linkText - Call to action text (optional)
 * @param {React.ReactNode} children - Nested custom child content
 * @param {string} className - Additional CSS classes
 * @param {object} props - Other standard card props (e.g. onClick)
 */
export const Card = ({
  variant = 'luxury-product',
  title = '',
  subtitle = '',
  image = '',
  price = '',
  badge = '',
  linkText = '',
  children,
  className = '',
  ...props
}) => {
  
  // Luxury hover motion presets
  const cardMotion = {
    initial: { y: 0 },
    hover: { 
      y: -6,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const imageMotion = {
    initial: { scale: 1.0 },
    hover: { 
      scale: 1.04,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const renderCardContent = () => {
    switch (variant) {
      case 'luxury-product':
        return (
          <>
            {image && (
              <div className="card-image-container img-luxury-wrapper">
                {badge && <span className="card-badge label-caps">{badge}</span>}
                <motion.img 
                  src={image} 
                  alt={title} 
                  variants={imageMotion}
                  className="card-image"
                />
              </div>
            )}
            <div className="card-body">
              {subtitle && <span className="card-subtitle label-caps">{subtitle}</span>}
              <h3 className="card-title">{title}</h3>
              {price && <span className="card-price font-serif">{price}</span>}
              {children}
            </div>
          </>
        );

      case 'feature':
        return (
          <div className="card-body">
            {badge && <span className="card-badge label-caps">{badge}</span>}
            {subtitle && <span className="card-subtitle label-caps">{subtitle}</span>}
            <h3 className="card-title">{title}</h3>
            {children}
          </div>
        );

      case 'editorial':
        return (
          <div className="card-body card-editorial-body">
            {subtitle && <span className="card-subtitle label-caps">{subtitle}</span>}
            <h3 className="card-title font-serif">{title}</h3>
            {children}
            {linkText && <span className="card-link label-caps">{linkText}</span>}
          </div>
        );

      case 'glass':
        return (
          <div className="card-body card-glass-body">
            {subtitle && <span className="card-subtitle label-caps">{subtitle}</span>}
            <h3 className="card-title">{title}</h3>
            {children}
          </div>
        );

      case 'image':
        return (
          <div className="card-image-overlay-wrapper img-luxury-wrapper">
            {image && (
              <motion.img 
                src={image} 
                alt={title} 
                variants={imageMotion}
                className="card-image-full"
              />
            )}
            <div className="card-image-overlay-content">
              {subtitle && <span className="card-subtitle label-caps text-gold-accent">{subtitle}</span>}
              <h3 className="card-title text-light">{title}</h3>
              {children}
              {linkText && <span className="card-link label-caps text-gold-accent">{linkText}</span>}
            </div>
          </div>
        );

      case 'info':
        return (
          <div className="card-body card-info-body">
            <div className="card-info-header">
              {subtitle && <span className="card-subtitle label-caps">{subtitle}</span>}
              <h3 className="card-title">{title}</h3>
            </div>
            <div className="card-info-content">
              {children}
            </div>
          </div>
        );

      default:
        return children;
    }
  };

  return (
    <motion.div
      className={`card card-${variant} ${className}`}
      initial="initial"
      whileHover="hover"
      variants={cardMotion}
      {...props}
    >
      {renderCardContent()}
    </motion.div>
  );
};

export default Card;
