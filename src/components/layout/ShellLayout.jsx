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
          <div className="shell-footer-brand">
            <h4 className="shell-footer-title">GANDEVIKAR JEWELLERS</h4>
            <p className="label-caps">ESTABLISHED 1927</p>
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
