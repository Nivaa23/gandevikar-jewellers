/* src/components/sections/NewArrivals.jsx */
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import './NewArrivals.css';

const newArrivalsData = [
  {
    id: 1,
    name: 'SHAGUN',
    category: 'Necklace',
    description: 'Delicate gold craftsmanship for bridal splendor.',
    gradient: 'linear-gradient(135deg, #F5EFEB 0%, #E3D5CD 100%)',
    href: '#shagun'
  },
  {
    id: 2,
    name: 'AARYA',
    category: 'Earrings',
    description: 'Contemporary drop earrings set with brilliant diamonds.',
    gradient: 'linear-gradient(135deg, #EEF1F6 0%, #D2DBE8 100%)',
    href: '#aarya'
  },
  {
    id: 3,
    name: 'ISHIRA',
    category: 'Ring',
    description: 'A statement solitaire ring of unmatched clarity.',
    gradient: 'linear-gradient(135deg, #F6F4EE 0%, #E8E2D2 100%)',
    href: '#ishira'
  },
  {
    id: 4,
    name: 'BANDHAN',
    category: 'Bangles',
    description: 'Traditional gold bangles adorned with intricate filigree.',
    gradient: 'linear-gradient(135deg, #FAF4EB 0%, #E8DCC4 100%)',
    href: '#bandhan'
  },
  {
    id: 5,
    name: 'ANMOL',
    category: 'Pendant',
    description: 'Minimal diamond pendant celebrating everyday grace.',
    gradient: 'linear-gradient(135deg, #F0EFEB 0%, #DCDADA 100%)',
    href: '#anmol'
  },
  {
    id: 6,
    name: 'ARUNIKA',
    category: 'Choker',
    description: 'A radiant gold choker inspired by the morning sun.',
    gradient: 'linear-gradient(135deg, #FDF7EC 0%, #ECCFA6 100%)',
    href: '#arunika'
  }
];

export const NewArrivals = () => {
  const scrollContainerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    const maxScroll = scrollWidth - clientWidth;
    
    // Update progress bar
    if (maxScroll > 0) {
      setScrollProgress(scrollLeft / maxScroll);
    } else {
      setScrollProgress(0);
    }

    // Update navigation button states
    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft < maxScroll - 5);
  };

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const { clientWidth } = container;
    // Scroll by 1 card width (approx clientWidth / cardsVisible)
    const scrollAmount = direction === 'left' ? -clientWidth * 0.75 : clientWidth * 0.75;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
      // Run once initially to set correct states
      handleScroll();
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

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
    <section className="newarrivals-section section-padding-y" id="new-arrivals">
      <div className="container">
        {/* SECTION HEADER */}
        <motion.div 
          className="newarrivals-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={headerVariants}
        >
          <span className="newarrivals-eyebrow label-caps">NEW ARRIVALS</span>
          <h2 className="newarrivals-headline font-serif">Discover Our Latest Creations</h2>
          <p className="newarrivals-copy">
            Explore the newest additions to our timeless collections, thoughtfully crafted to celebrate modern elegance while honoring nearly a century of craftsmanship.
          </p>
        </motion.div>

        {/* CAROUSEL WRAPPER WITH NAVIGATION ARROWS */}
        <div className="newarrivals-carousel-container">
          {/* Navigation Arrows */}
          <button 
            className={`carousel-nav-btn btn-left ${!canScrollLeft ? 'disabled' : ''}`}
            onClick={() => scroll('left')}
            aria-label="Previous items"
            disabled={!canScrollLeft}
          >
            <ArrowLeft size={20} />
          </button>
          
          <button 
            className={`carousel-nav-btn btn-right ${!canScrollRight ? 'disabled' : ''}`}
            onClick={() => scroll('right')}
            aria-label="Next items"
            disabled={!canScrollRight}
          >
            <ArrowRight size={20} />
          </button>

          {/* Left/Right Edge Fade Masks */}
          <div className="carousel-mask mask-left" />
          <div className="carousel-mask mask-right" />

          {/* Scrollable Track */}
          <motion.div 
            className="newarrivals-carousel-track"
            ref={scrollContainerRef}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-5% 0px" }}
          >
            {newArrivalsData.map((card) => (
              <motion.a 
                key={card.id} 
                href={card.href}
                className="newarrivals-card"
                variants={cardVariants}
                whileHover="hover"
                role="button"
                aria-label={`View details of ${card.name} ${card.category}`}
              >
                {/* 70% Height Image Placeholder */}
                <div className="newarrivals-card-image-wrapper">
                  <div 
                    className="newarrivals-card-placeholder" 
                    style={{ background: card.gradient }}
                  >
                    <motion.div 
                      className="newarrivals-zoom-effect"
                      variants={{
                        hover: { scale: 1.04, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                      }}
                    />
                  </div>
                </div>

                {/* Card Content details */}
                <div className="newarrivals-card-content">
                  <div className="newarrivals-card-header">
                    <span className="newarrivals-card-category label-caps">{card.category}</span>
                    <h3 className="newarrivals-card-name font-serif">{card.name}</h3>
                  </div>
                  <p className="newarrivals-card-description">{card.description}</p>
                  <span className="newarrivals-card-cta">
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
            ))}
          </motion.div>
        </div>

        {/* Minimal Progress Indicator */}
        <div className="newarrivals-progress-bar-container" aria-hidden="true">
          <div 
            className="newarrivals-progress-bar" 
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>

        {/* SECTION FOOTER CTA */}
        <motion.div 
          className="newarrivals-footer"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-5% 0px" }}
          variants={buttonVariants}
        >
          <a href="#all-new-arrivals" style={{ textDecoration: 'none', display: 'inline-block' }}>
            <Button variant="outline">
              View All New Arrivals &rarr;
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default NewArrivals;
