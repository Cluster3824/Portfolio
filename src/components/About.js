import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-grid">
            <div className="about-text">
              <p>Third-year B.Tech student in Artificial Intelligence and Data Science with strong technical expertise in machine learning, software engineering, and AI research. Experienced in developing production-ready applications and contributing to open-source projects.</p>
              
              <p>Specialized in Large Language Model development, having built multiple AI agents and automation tools. Proficient in full-stack development with modern frameworks and experienced in system administration across Linux environments.</p>
              
              <p>Currently focused on advancing machine learning implementations, neural network architectures, and scalable AI solutions. Interested in opportunities to apply AI technologies to solve real-world challenges in enterprise environments.</p>
              
              <div className="about-links">
                <a href="https://www.linkedin.com/in/rohith-r-795383297/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </a>
                <a href="https://github.com/Cluster3824" target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="fab fa-github"></i> GitHub
                </a>
              </div>
            </div>
            
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">Years Coding</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">4+</span>
                <span className="stat-label">Major Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">6+</span>
                <span className="stat-label">Technologies</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">1+</span>
                <span className="stat-label">Year Linux</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;