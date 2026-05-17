import React from 'react';
import { portfolioData } from '../data/portfolio';
import { LuExternalLink, LuGithub } from 'react-icons/lu';

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Selected Work</h2>
      <div className="projects-grid">
        {portfolioData.projects.map((project) => (
          <div key={project.id} className="project-card glass">
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="tech-tag">{t}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.liveLink} className="link-icon"><LuExternalLink /> Live</a>
                <a href={project.githubLink} className="link-icon"><LuGithub /> Code</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
