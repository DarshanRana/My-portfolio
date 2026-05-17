import React from 'react';
import { portfolioData } from '../data/portfolio';
import { LuCheck } from 'react-icons/lu';

const About = () => {
  const { bio, skills } = portfolioData.about;
  
  return (
    <section id="about" className="section">
      <h2 className="section-title">About Me</h2>
      <div className="about-grid">
        <div className="about-text glass card">
          <p>{bio}</p>
        </div>
        <div className="skills-container card glass">
          <h3>Core Skills</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <LuCheck className="skill-icon" />
                <span className="skill-name">{skill.name}</span>
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
