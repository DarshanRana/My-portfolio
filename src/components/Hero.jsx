import React from 'react';
import { portfolioData } from '../data/portfolio';
import { LuArrowRight } from 'react-icons/lu';

const Hero = () => {
  const { name, role, tagline } = portfolioData.hero;
  return (
    <section id="home" className="hero-section">
      <div className="glow-bg" style={{ top: '10%', left: '20%' }}></div>
      <div className="glow-bg" style={{ bottom: '10%', right: '20%', background: 'var(--secondary)' }}></div>
      <div className="hero-container animate-fade-in">
        <div className="hero-content">
          <span className="role-tag">{role}</span>
        <h1 className="hero-title">Hey, I'm <span className="highlight">{name}</span></h1>
        <p className="hero-tagline">{tagline}</p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">
            View Work <LuArrowRight className="btn-icon" />
          </a>
          <a href="#contact" className="btn btn-secondary">Contact Me</a>
        </div>
        </div>
        <div className="hero-image-wrapper">
          <img src={portfolioData.hero.image} alt="Profile" className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
