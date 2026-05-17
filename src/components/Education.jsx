import React from 'react';
import { portfolioData } from '../data/portfolio';

const Education = () => {
  return (
    <section id="education" className="section">
      <h2 className="section-title">Education</h2>
      <div className="timeline">
        {portfolioData.education.map((edu) => (
          <div key={edu.id} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content glass card">
              <span className="duration">{edu.duration}</span>
              <h3 className="role">{edu.degree}</h3>
              <h4 className="company">{edu.institution}</h4>
              <p className="desc">{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
