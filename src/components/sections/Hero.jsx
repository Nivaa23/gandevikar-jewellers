/* src/components/sections/Hero.jsx */
import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Gem, Sparkles } from 'lucide-react';
import Button from '../ui/Button';
import { SlideIn, Reveal, GentleFloat } from '../ui/Animate';
import heroImage from '../../assets/image_3.png';
import './Hero.css';

export const Hero = () => {
  // Stagger wrapper settings for CTA buttons and trust badges
  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.6
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 15 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="hero-section" aria-label="Welcome to Gandevikar Jewellers">
      <div className="hero-grid container">

        {/* Left Side: Editorial Typography & Content */}
        <div className="hero-content">
          {/* Subheading / Est tag */}
          <SlideIn direction="up" delay={0.2} duration={1.2}>
            <span className="hero-pre-title label-caps">Heritage Haute Joaillerie</span>
          </SlideIn>

          {/* Headline - Clip-path text reveal */}
          <h1 className="hero-headline">
            <Reveal delay={0.4} duration={1.4}>
              Crafting Timeless
            </Reveal>
            <Reveal delay={0.55} duration={1.4}>
              Elegance Since 1927
            </Reveal>
          </h1>

          {/* Supporting Copy */}
          <SlideIn direction="up" delay={0.7} duration={1.2}>
            <p className="hero-copy body-large">
              For nearly a century, Gandevikar Jewellers has celebrated life's most
              cherished moments through exceptional craftsmanship, timeless design,
              and unwavering trust across generations.
            </p>
          </SlideIn>

          {/* Action Buttons & Trust Indicators (Staggered load) */}
          <motion.div
            className="hero-actions-wrapper"
            variants={containerVariants}
            initial="initial"
            animate="animate"
          >
            {/* CTA Buttons */}
            <motion.div className="hero-buttons" variants={itemVariants}>
              <Button
                variant="primary"
                onClick={() => console.log('Explore collections')}
                aria-label="Explore our jewellery collections"
              >
                Explore Collections
              </Button>
              <Button
                variant="outline"
                onClick={() => console.log('Our heritage')}
                aria-label="Learn about our brand heritage"
              >
                Our Heritage
              </Button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div className="hero-trust-badges" variants={itemVariants}>
              <div className="trust-badge" title="Established in 1927 with 98 years of history">
                <Award size={15} strokeWidth={1.5} className="trust-badge-icon" />
                <span className="trust-badge-text">98 Years of Legacy</span>
              </div>
              <div className="trust-badge" title="All gold jewelry is certified by the Bureau of Indian Standards">
                <ShieldCheck size={15} strokeWidth={1.5} className="trust-badge-icon" />
                <span className="trust-badge-text">BIS Hallmarked Gold</span>
              </div>
              <div className="trust-badge" title="Diamonds certified by the International Gemological Institute">
                <Gem size={15} strokeWidth={1.5} className="trust-badge-icon" />
                <span className="trust-badge-text">IGI Certified Diamonds</span>
              </div>
              <div className="trust-badge" title="Premium handcrafted design since 1927">
                <Sparkles size={15} strokeWidth={1.5} className="trust-badge-icon" />
                <span className="trust-badge-text">Handcrafted Since 1927</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Side: Showcase Jewellery Image */}
        <div className="hero-showcase">
          <GentleFloat amplitude={12} duration={7}>
            <motion.div
              className="hero-image-wrapper img-luxury-wrapper"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            >
              <img
                src={heroImage}
                alt="A premium diamond and gold luxury necklace representing the design craftsmanship of Gandevikar Jewellers"
                className="hero-image"
                loading="eager"
              />
              <div className="hero-image-gradient-shroud" />
            </motion.div>
          </GentleFloat>
        </div>

      </div>

      {/* Elegant Animated Scroll Indicator */}
      <div className="hero-scroll-indicator" aria-hidden="true">
        <span className="scroll-indicator-text label-caps">Scroll</span>
        <div className="scroll-indicator-line">
          <motion.div
            className="scroll-indicator-dash"
            animate={{
              y: ['-100%', '200%'],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
