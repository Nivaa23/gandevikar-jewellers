/* src/components/sections/Occasions.jsx */
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import './Occasions.css';

const occasionsData = {
  featured: {
    id: 1,
    title: 'Wedding',
    description: 'Celebrate your forever with timeless bridal jewellery.',
    gradient: 'linear-gradient(135deg, #2D271E 0%, #15120E 100%)',
    href: '#wedding',
    textLight: true
  },
  others: [
    {
      id: 2,
      title: 'Engagement',
      description: 'Elegant pieces crafted for unforgettable beginnings.',
      gradient: 'linear-gradient(135deg, #EADBC8 0%, #DAC0A3 100%)',
      href: '#engagement',
      textLight: false
    },
    {
      id: 3,
      title: 'Festive',
      description: 'Celebrate every tradition with timeless craftsmanship.',
      gradient: 'linear-gradient(135deg, #1E2E2A 0%, #0F1715 100%)',
      href: '#festive',
      textLight: true
    },
    {
      id: 4,
      title: 'Everyday Elegance',
      description: 'Minimal luxury designed for every moment.',
      gradient: 'linear-gradient(135deg, #E6E2DC 0%, #C4BCAF 100%)',
      href: '#everyday',
      textLight: false
    },
    {
      id: 5,
      title: 'Gifting',
      description: 'Thoughtful jewellery for the people who matter most.',
      gradient: 'linear-gradient(135deg, #D4C2AD 0%, #B89C82 100%)',
      href: '#gifting',
      textLight: false
    }
  ]
};

const OccasionTile = ({ tile, isFeatured, variants }) => {
  return (
    <motion.a
      href={tile.href}
      className={`occasion-tile ${isFeatured ? 'tile-featured' : 'tile-medium'} ${tile.textLight ? 'text-light-overlay' : 'text-dark-overlay'}`}
      variants={variants}
      whileHover="hover"
      role="button"
      aria-label={`Shop collections for ${tile.title}`}
    >
      {/* Editorial Image Placeholder */}
      <div className="occasion-image-wrapper">
        <div 
          className="occasion-image-placeholder" 
          style={{ background: tile.gradient }}
        >
          <motion.div 
            className="occasion-zoom-effect"
            variants={{
              hover: { scale: 1.04, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
          />
        </div>
        {/* Soft Shading Shroud Overlay */}
        <div className="occasion-gradient-overlay" />
      </div>

      {/* Content Overlay */}
      <div className="occasion-content">
        <div>
          <h3 className="occasion-title font-serif">{tile.title}</h3>
          <p className="occasion-description">{tile.description}</p>
        </div>
        <span className="occasion-cta">
          Explore 
          <motion.span 
            className="cta-arrow"
            variants={{
              hover: { x: 4, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }
            }}
          >
            &nbsp;&rarr;
          </motion.span>
        </span>
      </div>
    </motion.a>
  );
};

export const Occasions = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
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

  const tileVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="occasions-section section-padding-y" id="occasions">
      <div className="container">
        {/* SECTION HEADER */}
        <motion.div 
          className="occasions-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={headerVariants}
        >
          <span className="occasions-eyebrow label-caps">SHOP BY OCCASION</span>
          <h2 className="occasions-headline font-serif">Jewellery For Every Meaningful Celebration</h2>
          <p className="occasions-copy">
            Every milestone deserves something timeless. Explore collections thoughtfully curated for life's most cherished occasions.
          </p>
        </motion.div>

        {/* ASYMMETRIC GRID */}
        <motion.div 
          className="occasions-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-5% 0px" }}
        >
          {/* LEFT COLUMN: Large Featured Tile */}
          <div className="tile-featured-wrapper">
            <OccasionTile tile={occasionsData.featured} isFeatured={true} variants={tileVariants} />
          </div>

          {/* RIGHT COLUMN: Grid of 4 Medium Tiles */}
          <div className="tile-grid-wrapper">
            {occasionsData.others.map((tile) => (
              <OccasionTile key={tile.id} tile={tile} isFeatured={false} variants={tileVariants} />
            ))}
          </div>
        </motion.div>

        {/* SECTION CTA */}
        <motion.div 
          className="occasions-footer"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-5% 0px" }}
          variants={buttonVariants}
        >
          <Button variant="outline" href="#all-occasions">
            Explore All Occasions &rarr;
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Occasions;
