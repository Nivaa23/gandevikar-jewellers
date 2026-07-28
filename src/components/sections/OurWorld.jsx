/* src/components/sections/OurWorld.jsx */
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import './OurWorld.css';

const galleryItems = [
  {
    id: 1,
    title: 'Wedding Moments',
    altText: 'A bride wearing majestic bridal gold jewellery celebrating her wedding day.',
    gradient: 'linear-gradient(135deg, #2D271E 0%, #15120E 100%)',
    href: 'https://instagram.com',
    textLight: true,
    isFeatured: true
  },
  {
    id: 2,
    title: 'Behind The Craft',
    altText: 'A master artisan setting brilliant diamonds with meticulous care.',
    gradient: 'linear-gradient(135deg, #F5EFEB 0%, #D2C4B7 100%)',
    href: 'https://instagram.com',
    textLight: false,
    isFeatured: false
  },
  {
    id: 3,
    title: 'A Legacy Of Elegance',
    altText: 'Studio photography of a bespoke gold and diamond necklace.',
    gradient: 'linear-gradient(135deg, #E6E2DC 0%, #B89C82 100%)',
    href: 'https://instagram.com',
    textLight: false,
    isFeatured: false
  },
  {
    id: 4,
    title: 'Celebrating Forever',
    altText: 'A customer smiling, wearing an exquisite solitaire diamond engagement ring.',
    gradient: 'linear-gradient(135deg, #1E2E2A 0%, #0F1715 100%)',
    href: 'https://instagram.com',
    textLight: true,
    isFeatured: false
  },
  {
    id: 5,
    title: 'Inside Our Showroom',
    altText: 'The luxury heritage showroom interior of Gandevikar Jewellers.',
    gradient: 'linear-gradient(135deg, #D4C2AD 0%, #9F856A 100%)',
    href: 'https://instagram.com',
    textLight: false,
    isFeatured: false
  }
];

const GalleryItem = ({ item, variants }) => {
  return (
    <motion.a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`gallery-item ${item.isFeatured ? 'item-featured' : 'item-supporting'} ${item.textLight ? 'text-light' : 'text-dark'}`}
      variants={variants}
      whileHover="hover"
      role="button"
      aria-label={`View campaign photo: ${item.title}`}
    >
      {/* Background Image Placeholder */}
      <div className="gallery-image-wrapper">
        <div 
          className="gallery-image-placeholder"
          style={{ background: item.gradient }}
        >
          <motion.div
            className="gallery-zoom-effect"
            variants={{
              hover: { scale: 1.04, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
          />
        </div>
        <div className="gallery-gradient-overlay" />
      </div>

      {/* Hover Content */}
      <div className="gallery-content">
        <span className="gallery-label">
          {item.title} &rarr;
        </span>
      </div>
    </motion.a>
  );
};

export const OurWorld = () => {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }
    }
  };

  // Split items for asymmetrical composition layout
  const featuredItem = galleryItems.find(item => item.isFeatured);
  const supportingItems = galleryItems.filter(item => !item.isFeatured);

  return (
    <section className="ourworld-section section-padding-y" id="our-world">
      <div className="container">
        {/* SECTION HEADER */}
        <motion.div 
          className="ourworld-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={headerVariants}
        >
          <span className="ourworld-eyebrow label-caps">OUR WORLD</span>
          <h2 className="ourworld-headline font-serif">Moments That Shine Beyond Jewellery</h2>
          <p className="ourworld-copy">
            Every creation tells a story. Discover timeless celebrations, exquisite craftsmanship and unforgettable moments from the world of Gandevikar.
          </p>
        </motion.div>

        {/* ASYMMETRICAL MAGAZINE GALLERY */}
        <motion.div 
          className="ourworld-gallery-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-5% 0px" }}
        >
          {/* Left Column: Featured item */}
          <div className="gallery-featured-wrapper">
            <GalleryItem item={featuredItem} variants={itemVariants} />
          </div>

          {/* Right Column: 2x2 supporting items */}
          <div className="gallery-supporting-grid">
            {supportingItems.map((item) => (
              <GalleryItem key={item.id} item={item} variants={itemVariants} />
            ))}
          </div>
        </motion.div>

        {/* BOTTOM CTA */}
        <motion.div 
          className="ourworld-footer"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-5% 0px" }}
          variants={footerVariants}
        >
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'inline-block' }}>
            <Button variant="outline">
              Follow Our Journey on Instagram &rarr;
            </Button>
          </a>
          <p className="ourworld-footer-note">
            Stay inspired with our latest collections, celebrations and behind-the-scenes craftsmanship.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OurWorld;
