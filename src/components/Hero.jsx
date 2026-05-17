import React from 'react';
import { portfolioData } from '../data/portfolio';
import { LuArrowRight } from 'react-icons/lu';

const Hero = () => {
  const { name, role, tagline } = portfolioData.hero;
  
  // Clean up trailing space in name if present
  const cleanedName = name.trim();

  return (
    <section id="home" className="hero-section">
      <div className="glow-bg" style={{ top: '10%', left: '20%' }}></div>
      <div className="glow-bg" style={{ bottom: '10%', right: '20%', background: 'var(--secondary)' }}></div>
      <div className="hero-container animate-fade-in">
        <div className="hero-content">
          <span className="role-tag">{role}</span>
          <h1 className="hero-title">
            Hey, I'm <br />
            <span className="highlight">{cleanedName}</span>
          </h1>
          <p className="hero-tagline">{tagline}</p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              View Work <LuArrowRight className="btn-icon" />
            </a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <div className="avatar-glow"></div>
          
          {/* Subtle tech decorative elements in the background */}
          <div className="tech-matrix tech-left">
            <div>101001</div>
            <div>011010</div>
            <div>110011</div>
            <div>const drsh = []</div>
          </div>
          <div className="tech-matrix tech-right">
            <div>import {'{ AI }'}</div>
            <div>sys.exec()</div>
            <div>// dev mode</div>
            <div>01000101</div>
          </div>
          
          <div className="hero-image-container">
            <img src={portfolioData.hero.image} alt={cleanedName} className="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
