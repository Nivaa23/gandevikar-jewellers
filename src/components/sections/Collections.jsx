/* src/components/sections/Collections.jsx */
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Collections.css';

const collectionsData = [
  {
    id: 1,
    title: 'Bridal Collection',
    description: 'Elegant pieces for unforgettable celebrations.',
    gradient: 'linear-gradient(135deg, #EBE5D9 0%, #D8CEBE 100%)',
    sizeClass: 'card-featured',
    href: '#bridal'
  },
  {
    id: 2,
    title: 'Diamond Collection',
    description: 'Timeless brilliance crafted for generations.',
    gradient: 'linear-gradient(135deg, #E2DCD2 0%, #C4B9AA 100%)',
    sizeClass: 'card-medium',
    href: '#diamond'
  },
  {
    id: 3,
    title: 'Gold Collection',
    description: 'Classic elegance with enduring craftsmanship.',
    gradient: 'linear-gradient(135deg, #F0E8D9 0%, #DFCEB4 100%)',
    sizeClass: 'card-small',
    href: '#gold'
  },
  {
    id: 4,
    title: 'Everyday Luxury',
    description: 'Minimal pieces designed for modern living.',
    gradient: 'linear-gradient(135deg, #EAE5DD 0%, #CDC5B7 100%)',
    sizeClass: 'card-small',
    href: '#everyday'
  },
  {
    id: 5,
    title: 'Silver Collection',
    description: 'Contemporary designs rooted in tradition.',
    gradient: 'linear-gradient(135deg, #E5E5E5 0%, #CCCCCC 100%)',
    sizeClass: 'card-small',
    href: '#silver'
  }
];

export const Collections = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="collections-section section-padding-y" id="collections">
      <div className="container">
        {/* SECTION HEADER */}
        <motion.div 
          className="collections-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={headerVariants}
        >
          <span className="collections-eyebrow label-caps">OUR COLLECTIONS</span>
          <h2 className="collections-headline font-serif">Discover Jewellery Crafted For Every Story</h2>
          <p className="collections-copy">
            Every collection reflects decades of craftsmanship and timeless artistry, thoughtfully designed to celebrate life's most meaningful moments.
          </p>
        </motion.div>

        {/* COLLECTIONS ASYMMETRICAL GRID */}
        <motion.div 
          className="collections-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-5% 0px" }}
        >
          {collectionsData.map((item) => (
            <motion.a
              key={item.id}
              href={item.href}
              className={`collection-card ${item.sizeClass}`}
              variants={cardVariants}
              whileHover="hover"
              role="button"
              aria-label={`Explore our ${item.title}`}
            >
              {/* Premium Gradient Placeholder */}
              <div 
                className="collection-image-placeholder" 
                style={{ background: item.gradient }}
              >
                <motion.div 
                  className="collection-zoom-effect"
                  variants={{
                    hover: { scale: 1.04, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                  }}
                />
              </div>

              {/* Dark Image Gradient Overlay */}
              <div className="collection-card-overlay" />

              {/* Card Content */}
              <div className="collection-card-content">
                <motion.div 
                  className="collection-text-wrapper"
                  variants={{
                    hover: { y: -4, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }
                  }}
                >
                  <h3 className="collection-title font-serif">{item.title}</h3>
                  <p className="collection-description">{item.description}</p>
                </motion.div>

                {/* Elegant Arrow Indicator */}
                <div className="collection-arrow-wrapper">
                  <motion.div
                    className="collection-arrow-circle"
                    variants={{
                      hover: { 
                        x: 4,
                        backgroundColor: 'var(--color-gold)',
                        color: 'var(--color-off-white)',
                        transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
                      }
                    }}
                  >
                    <ArrowRight size={18} strokeWidth={1.5} />
                  </motion.div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Collections;
