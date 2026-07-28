/* src/components/sections/GoldRate.jsx */
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ShieldCheck, Check } from 'lucide-react';
import './GoldRate.css';

const rateData = [
  { kt: '24KT', price: '₹10,225', unit: 'gram' },
  { kt: '22KT', price: '₹9,375', unit: 'gram' },
  { kt: '18KT', price: '₹7,670', unit: 'gram' }
];

export const GoldRate = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const panelVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const rowVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="goldrate-section section-padding-y" id="gold-rate">
      <div className="container">
        <motion.div 
          className="goldrate-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
        >
          {/* LEFT COLUMN: EDITORIAL CONTENT */}
          <div className="goldrate-content-column">
            <motion.span className="goldrate-eyebrow label-caps" variants={itemVariants}>
              TODAY'S GOLD RATE
            </motion.span>
            <motion.h2 className="goldrate-headline font-serif" variants={itemVariants}>
              Transparent Pricing, Updated Daily
            </motion.h2>
            <motion.p className="goldrate-copy" variants={itemVariants}>
              For nearly a century, trust has been at the heart of everything we create. Our daily gold prices reflect our commitment to transparency and authenticity.
            </motion.p>

            {/* TRUST BADGES */}
            <motion.div className="goldrate-badges" variants={itemVariants}>
              <div className="goldrate-badge">
                <Clock size={16} className="goldrate-badge-icon" />
                <span className="goldrate-badge-text">Updated Daily</span>
              </div>
              <div className="goldrate-badge">
                <ShieldCheck size={16} className="goldrate-badge-icon" />
                <span className="goldrate-badge-text">BIS Standard</span>
              </div>
              <div className="goldrate-badge">
                <Check size={16} className="goldrate-badge-icon" />
                <span className="goldrate-badge-text">Transparent Pricing</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: INFORMATION PANEL */}
          <div className="goldrate-panel-column">
            <motion.div 
              className="goldrate-panel"
              variants={panelVariants}
              whileHover={{ 
                y: -4,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.04)",
                transition: { duration: 0.4, ease: "easeOut" }
              }}
            >
              <div className="goldrate-panel-rows">
                {rateData.map((item, index) => (
                  <React.Fragment key={item.kt}>
                    <motion.div 
                      className="goldrate-row"
                      variants={rowVariants}
                    >
                      <span className="goldrate-type font-serif">{item.kt}</span>
                      <div className="goldrate-price-wrapper">
                        <span className="goldrate-price font-serif">{item.price}</span>
                        <span className="goldrate-unit">/ {item.unit}</span>
                      </div>
                    </motion.div>
                    {index < rateData.length - 1 && (
                      <div className="goldrate-divider" />
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* FOOTER OF PANEL */}
              <div className="goldrate-panel-footer">
                <span className="goldrate-footer-label">Updated Today</span>
                <span className="goldrate-footer-time">11:30 AM</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GoldRate;
