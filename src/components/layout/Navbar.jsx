/* src/components/layout/Navbar.jsx */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, User, Heart, Menu, X } from 'lucide-react';
import { useScroll } from '../../hooks/useScroll';
import './Navbar.css';

export const Navbar = () => {
  const { isScrolled } = useScroll(20);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Collections', href: '#collections' },
    { label: 'High Jewellery', href: '#high-jewellery' },
    { label: 'Bespoke', href: '#bespoke' },
    { label: 'Heritage', href: '#heritage' },
    { label: 'Our Boutiques', href: '#boutiques' }
  ];

  return (
    <>
      <header className={`navbar-header ${isScrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}>
        <div className="navbar-container container">
          {/* Mobile Menu Toggle Button */}
          <button 
            className="navbar-toggle-btn" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>

          {/* Logo / Brand Name */}
          <a href="/" className="navbar-brand-link" aria-label="Gandevikar Jewellers Home">
            <div className="navbar-brand-logo-container">
              <svg className="navbar-brand-emblem" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Outer ring */}
                <circle cx="50" cy="50" r="46" stroke="#8B1E2D" strokeWidth="2.5" />
                {/* Inner decorative dotted ring */}
                <circle cx="50" cy="50" r="38" stroke="#8B1E2D" strokeWidth="1" strokeDasharray="3 2" />
                
                {/* Text Path for circular text inside emblem */}
                <path id="emblem-text-path" d="M 50,50 m -30,0 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0" fill="none" />
                <text fill="#8B1E2D" fontSize="6.2" fontWeight="700" fontFamily="var(--font-sans)" letterSpacing="0.04em">
                  <textPath href="#emblem-text-path" startOffset="0%">
                    GANDEVIKAR JEWELLERS PVT. LTD. • ESTD. 1927 •
                  </textPath>
                </text>
                
                {/* Center Monogram */}
                <text x="50" y="56" textAnchor="middle" fill="#8B1E2D" fontSize="18" fontWeight="700" fontFamily="var(--font-serif)">
                  GJ
                </text>
              </svg>
              
              <div className="navbar-brand-text-col">
                <span className="navbar-brand-title">Gandevikar</span>
                <span className="navbar-brand-subtitle">Jewellers Pvt. Ltd.</span>
                <div className="navbar-brand-meta">
                  <span className="navbar-brand-loc">Chikuwadi</span>
                  <span className="navbar-brand-divider">•</span>
                  <span className="navbar-brand-est">Trusted Since 1927</span>
                </div>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="navbar-desktop-nav" aria-label="Main Navigation">
            <ul className="navbar-nav-links">
              {menuItems.map((item, idx) => (
                <li key={idx} className="navbar-nav-item">
                  <a href={item.href} className="navbar-nav-link">
                    {item.label}
                    <span className="navbar-nav-underline" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Secondary Action Icons (Search, Profile, Wishlist) */}
          <div className="navbar-actions">
            <button className="navbar-action-btn" aria-label="Search Catalog">
              <Search size={18} strokeWidth={1.5} />
            </button>
            <button className="navbar-action-btn desktop-only" aria-label="Customer Profile">
              <User size={18} strokeWidth={1.5} />
            </button>
            <button className="navbar-action-btn" aria-label="View Wishlist">
              <Heart size={18} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="navbar-mobile-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav className="navbar-mobile-nav" aria-label="Mobile Navigation">
              <ul className="navbar-mobile-links">
                {menuItems.map((item, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.08, duration: 0.5 }}
                  >
                    <a 
                      href={item.href} 
                      className="navbar-mobile-link"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
                <motion.li 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: menuItems.length * 0.08, duration: 0.5 }}
                  className="navbar-mobile-actions-divider"
                >
                  <a href="#profile" className="navbar-mobile-link" onClick={() => setIsMobileMenuOpen(false)}>
                    My Account
                  </a>
                </motion.li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
