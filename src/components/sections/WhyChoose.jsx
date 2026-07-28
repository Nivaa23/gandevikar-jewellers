/* src/components/sections/WhyChoose.jsx */
import React from 'react';
import { motion } from 'framer-motion';
import { History, ShieldCheck, Sparkles, Heart } from 'lucide-react';
import { Button } from '../ui/Button';
import './WhyChoose.css';

const pillarsData = [
  {
    id: 1,
    icon: History,
    title: 'Since 1924',
    description: 'Nearly a century of timeless craftsmanship, trusted by generations of families.',
    iconLabel: 'Heritage Landmark Icon'
  },
  {
    id: 2,
    icon: ShieldCheck,
    title: 'Certified Purity',
    description: 'Every creation reflects our commitment to certified gold, authentic diamonds and uncompromising quality.',
    iconLabel: 'Certified Diamond Shield Icon'
  },
  {
    id: 3,
    icon: Sparkles,
    title: 'Master Craftsmanship',
    description: 'Every piece is thoughtfully designed and meticulously crafted by experienced artisans.',
    iconLabel: 'Sparkling Artisan Gem Icon'
  },
  {
    id: 4,
    icon: Heart,
    title: 'Relationships That Last',
    description: 'From weddings to cherished milestones, generations have chosen Gandevikar to celebrate life\'s most meaningful occasions.',
    iconLabel: 'Lasting Generational Trust Icon'
  }
];

const TrustPillar = ({ pillar, variants }) => {
  const IconComponent = pillar.icon;
  
  return (
    <motion.div 
      className="trust-pillar"
      variants={variants}
      whileHover="hover"
    >
      <div className="trust-pillar-icon-wrapper">
        <motion.div
          variants={{
            hover: { scale: 1.08, color: 'var(--color-gold-hover)', transition: { duration: 0.3 } }
          }}
        >
          <IconComponent size={32} strokeWidth={1.2} aria-label={pillar.iconLabel} className="trust-pillar-icon" />
        </motion.div>
      </div>
      <h3 className="trust-pillar-title font-serif">{pillar.title}</h3>
      <div className="trust-pillar-divider" />
      <p className="trust-pillar-description">{pillar.description}</p>
    </motion.div>
  );
};

export const WhyChoose = () => {
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

  const pillarVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.0, delay: 0.1, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="whychoose-section section-padding-y" id="why-choose">
      {/* Subtle radial champagne glow */}
      <div className="whychoose-glow-overlay" aria-hidden="true" />
      
      <div className="container whychoose-container">
        {/* SECTION HEADER */}
        <motion.div 
          className="whychoose-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={headerVariants}
        >
          <span className="whychoose-eyebrow label-caps">WHY CHOOSE GANDEVIKAR</span>
          <h2 className="whychoose-headline font-serif">Crafted With Trust. Cherished For Generations.</h2>
          <p className="whychoose-copy">
            For nearly a century, Gandevikar Jewellers has celebrated life's most treasured moments through exceptional craftsmanship, uncompromising quality and relationships built on trust.
          </p>
        </motion.div>

        {/* PILLARS GRID */}
        <motion.div 
          className="whychoose-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-5% 0px" }}
        >
          {pillarsData.map((pillar) => (
            <TrustPillar key={pillar.id} pillar={pillar} variants={pillarVariants} />
          ))}
        </motion.div>

        {/* BOTTOM STATEMENT & CTA */}
        <motion.div 
          className="whychoose-footer"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-5% 0px" }}
          variants={footerVariants}
        >
          <blockquote className="whychoose-quote font-serif">
            "Every piece we create is more than jewellery—it is a celebration of love, legacy and life's unforgettable moments."
          </blockquote>
          <cite className="whychoose-author">— Gandevikar Jewellers</cite>
          
          <div className="whychoose-cta">
            <a href="#our-story" style={{ textDecoration: 'none', display: 'inline-block' }}>
              <Button variant="outline">
                Discover Our Story &rarr;
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoose;
