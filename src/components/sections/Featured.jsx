/* src/components/sections/Featured.jsx */
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import './Featured.css';

const featuredData = [
  {
    id: 1,
    name: 'Royal Diamond Necklace',
    collection: 'Diamond Collection',
    gradient: 'linear-gradient(135deg, #EBE5D9 0%, #D8CEBE 100%)',
    href: '#royal-diamond'
  },
  {
    id: 2,
    name: 'Classic Gold Bangle',
    collection: 'Gold Collection',
    gradient: 'linear-gradient(135deg, #F0E8D9 0%, #DFCEB4 100%)',
    href: '#classic-gold'
  },
  {
    id: 3,
    name: 'Bridal Heritage Set',
    collection: 'Bridal Collection',
    gradient: 'linear-gradient(135deg, #EAE5DD 0%, #CDC5B7 100%)',
    href: '#bridal-heritage'
  },
  {
    id: 4,
    name: 'Emerald Statement Ring',
    collection: 'High Jewellery',
    gradient: 'linear-gradient(135deg, #E2DCD2 0%, #C4B9AA 100%)',
    href: '#emerald-ring'
  },
  {
    id: 5,
    name: 'Minimal Diamond Pendant',
    collection: 'Everyday Luxury',
    gradient: 'linear-gradient(135deg, #F2ECE1 0%, #D1C5B5 100%)',
    href: '#minimal-pendant'
  },
  {
    id: 6,
    name: 'Silver Temple Necklace',
    collection: 'Silver Collection',
    gradient: 'linear-gradient(135deg, #E5E5E5 0%, #CCCCCC 100%)',
    href: '#silver-temple'
  }
];

const FeaturedProductCard = ({ item, variants }) => {
  return (
    <motion.a
      href={item.href}
      className="featured-card"
      variants={variants}
      whileHover="hover"
      role="button"
      aria-label={`Discover the ${item.name} from our ${item.collection}`}
    >
      {/* Editorial Image Placeholder */}
      <div className="featured-image-wrapper">
        <div 
          className="featured-image-placeholder" 
          style={{ background: item.gradient }}
        >
          <motion.div 
            className="featured-zoom-effect"
            variants={{
              hover: { scale: 1.04, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
          />
        </div>
      </div>

      {/* Card Metadata */}
      <div className="featured-card-body">
        <span className="featured-card-collection label-caps">{item.collection}</span>
        <h3 className="featured-card-name font-serif">{item.name}</h3>
        <span className="featured-card-cta">
          Discover Piece 
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

export const Featured = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
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

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="featured-section section-padding-y" id="featured">
      <div className="container">
        {/* SECTION HEADER */}
        <motion.div 
          className="featured-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={headerVariants}
        >
          <span className="featured-eyebrow label-caps">FEATURED JEWELLERY</span>
          <h2 className="featured-headline font-serif">Timeless Pieces, Thoughtfully Curated</h2>
          <p className="featured-copy">
            Every design is crafted with exceptional attention to detail, celebrating elegance, heritage and the moments that matter most.
          </p>
        </motion.div>

        {/* CURATED GRID */}
        <motion.div 
          className="featured-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-5% 0px" }}
        >
          {featuredData.map((item) => (
            <FeaturedProductCard key={item.id} item={item} variants={cardVariants} />
          ))}
        </motion.div>

        {/* SECTION END CTA */}
        <motion.div 
          className="featured-footer"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-5% 0px" }}
          variants={buttonVariants}
        >
          <Button variant="outline" href="#collections">
            Explore All Collections &rarr;
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Featured;
