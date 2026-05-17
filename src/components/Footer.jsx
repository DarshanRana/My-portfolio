import React from 'react';
import { LuGithub, LuLinkedin, LuMail } from 'react-icons/lu';
import { portfolioData } from '../data/portfolio';

const Footer = () => {
  const { name } = portfolioData.hero;
  const { github, linkedin, email } = portfolioData.socials;
  const cleanedName = name.trim();
  const firstName = cleanedName.split(' ')[0]; // "Drshan"

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <span className="logo">{firstName}<span className="logo-accent">.Dev</span></span>
          <p className="footer-text">Building the future of the web.</p>
        </div>
        <div className="social-links">
          <a href={github} className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><LuGithub /></a>
          <a href={linkedin} className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LuLinkedin /></a>
          <a href={email} className="social-icon" aria-label="Email"><LuMail /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} {cleanedName}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
