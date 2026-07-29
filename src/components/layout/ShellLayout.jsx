/* src/components/layout/ShellLayout.jsx */
import React from 'react';
import Navbar from './Navbar';
import './ShellLayout.css';

/**
 * ShellLayout Component
 * Wraps all pages to apply global headers, footers, and grid boundaries.
 */
export const ShellLayout = ({ children }) => {
  return (
    <div className="shell-layout">
      {/* Dynamic transparent-to-blurred header */}
      <Navbar />
      
      {/* Main page content area */}
      <main className="shell-main">
        {children}
      </main>

      {/* Minimal luxury footer shell */}
      <footer className="shell-footer">
        <div className="container shell-footer-container">
          <div className="shell-footer-brand-badge">
            <div className="footer-brand-logo-container">
              <svg className="footer-brand-emblem" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Outer ring */}
                <circle cx="50" cy="50" r="46" stroke="#8B1E2D" strokeWidth="2.5" />
                {/* Inner decorative dotted ring */}
                <circle cx="50" cy="50" r="38" stroke="#8B1E2D" strokeWidth="1" strokeDasharray="3 2" />
                
                {/* Text Path for circular text inside emblem */}
                <path id="footer-emblem-text-path" d="M 50,50 m -30,0 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0" fill="none" />
                <text fill="#8B1E2D" fontSize="6.2" fontWeight="700" fontFamily="var(--font-sans)" letterSpacing="0.04em">
                  <textPath href="#footer-emblem-text-path" startOffset="0%">
                    GANDEVIKAR JEWELLERS PVT. LTD. • ESTD. 1927 •
                  </textPath>
                </text>
                
                {/* Center Monogram */}
                <text x="50" y="56" textAnchor="middle" fill="#8B1E2D" fontSize="18" fontWeight="700" fontFamily="var(--font-serif)">
                  GJ
                </text>
              </svg>
              
              <div className="footer-brand-text-col">
                <span className="footer-brand-title">Gandevikar</span>
                <span className="footer-brand-subtitle">Jewellers Pvt. Ltd.</span>
                <div className="footer-brand-meta">
                  <span className="footer-brand-loc">Chikuwadi</span>
                  <span className="footer-brand-divider">•</span>
                  <span className="footer-brand-est">Trusted Since 1927</span>
                </div>
              </div>
            </div>
          </div>
          <p className="shell-footer-copy">
            &copy; {new Date().getFullYear()} Gandevikar Jewellers. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ShellLayout;
