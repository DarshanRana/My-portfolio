import React from 'react';
import { LuGithub, LuLinkedin, LuMail } from 'react-icons/lu';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <span className="logo">Alex<span className="logo-accent">.Dev</span></span>
          <p className="footer-text">Building the future of the web.</p>
        </div>
        <div className="social-links">
          <a href="#" className="social-icon" aria-label="GitHub"><LuGithub /></a>
          <a href="#" className="social-icon" aria-label="LinkedIn"><LuLinkedin /></a>
          <a href="#" className="social-icon" aria-label="Email"><LuMail /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Alex Dev. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
