/* src/components/sections/Heritage.jsx */
import React from 'react';
import { motion } from 'framer-motion';
import { History, Users, Gem } from 'lucide-react';
import { Button } from '../ui/Button';
import heritageImg from '../../assets/heritage_craftsmanship.png';
import './Heritage.css';

export const Heritage = () => {
  // Motion settings for editorial reveal
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const imageRevealVariants = {
    hidden: { opacity: 0, clipPath: 'inset(10% 0 10% 0)' },
    visible: { 
      opacity: 1, 
      clipPath: 'inset(0% 0 0% 0)',
      transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { delay: 0.6, duration: 1.0, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="heritage-section section-padding-y" id="heritage">
      <div className="container">
        <motion.div 
          className="heritage-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
        >
          {/* LEFT COLUMN: EDITORIAL IMAGE FRAME */}
          <div className="heritage-image-column">
            <motion.div 
              className="heritage-image-frame"
              variants={imageRevealVariants}
            >
              <img 
                src={heritageImg} 
                alt="Master jewellery artisan crafting gold ring" 
                className="heritage-image"
              />
              <div className="heritage-image-overlay" />
              
              {/* Floating Badge */}
              <motion.div 
                className="heritage-floating-badge"
                variants={badgeVariants}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <span className="badge-subtitle">SINCE</span>
                <span className="badge-year font-serif">1927</span>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: TEXT CONTENT */}
          <div className="heritage-content-column">
            <motion.span className="heritage-eyebrow label-caps" variants={itemVariants}>
              OUR HERITAGE
            </motion.span>
            
            <motion.h2 className="heritage-headline font-serif" variants={itemVariants}>
              Nearly a Century of Trust, Craftsmanship & Timeless Elegance
            </motion.h2>
            
            <motion.p className="heritage-body" variants={itemVariants}>
              Since 1927, Gandevikar Jewellers has been a symbol of trust and fine craftsmanship in Vadodara. Across three generations, every piece has been thoughtfully created to celebrate traditions, milestones and life's most cherished moments while preserving the artistry that defines our legacy.
            </motion.p>
            
            <motion.div className="heritage-cta-wrapper" variants={itemVariants}>
              <Button variant="outline" href="#our-story">
                Read Our Story &rarr;
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* STATISTICS HIGHLIGHTS */}
        <motion.div 
          className="heritage-highlights-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-5% 0px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {/* Card 1 */}
          <motion.div 
            className="highlight-card" 
            variants={itemVariants}
            whileHover={{ y: -6, boxShadow: "var(--shadow-md)" }}
          >
            <div className="highlight-card-header">
              <div className="highlight-icon-wrapper">
                <History size={20} strokeWidth={1.5} className="highlight-icon" />
              </div>
              <h3 className="highlight-number font-serif">98+</h3>
            </div>
            <p className="highlight-text label-caps">Years of Legacy</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            className="highlight-card" 
            variants={itemVariants}
            whileHover={{ y: -6, boxShadow: "var(--shadow-md)" }}
          >
            <div className="highlight-card-header">
              <div className="highlight-icon-wrapper">
                <Users size={20} strokeWidth={1.5} className="highlight-icon" />
              </div>
              <h3 className="highlight-number font-serif">3rd</h3>
            </div>
            <p className="highlight-text label-caps">Generation Family Business</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            className="highlight-card" 
            variants={itemVariants}
            whileHover={{ y: -6, boxShadow: "var(--shadow-md)" }}
          >
            <div className="highlight-card-header">
              <div className="highlight-icon-wrapper">
                <Gem size={20} strokeWidth={1.5} className="highlight-icon" />
              </div>
              <h3 className="highlight-number font-serif">Thousands</h3>
            </div>
            <p className="highlight-text label-caps">Happy Customers</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Heritage;
