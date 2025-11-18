import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Snake Game',
      description: 'Classic Snake game in C++ (SFML) with smooth gameplay, collision detection, and score tracking',
      tech: ['C++', 'SFML', 'Game Development'],
      github: 'https://github.com/Cluster3824/Snake_Game',
      demo: null,
      image: '/assets/images/1745073445648.jpg'
    },
    {
      title: 'HSN Code LLM Agent',
      description: 'AI-powered HSN Code Validation & Suggestion system using advanced LLM technologies for accurate tax code classification',
      tech: ['Google ADK', 'Ollama', 'LiteLLM', 'Pandas', 'Python'],
      github: 'https://github.com/Cluster3824/HSN_Agent',
      demo: null,
      image: '/assets/images/1748533269378.jpg'
    },
    {
      title: 'PDF & CSV Reader',
      description: 'Intelligent file reader with data analysis capabilities, automated insights generation, and visualization features',
      tech: ['Python', 'Pandas', 'Data Analysis', 'Visualization'],
      github: 'https://github.com/Cluster3824/LLM_agent',
      demo: null,
      image: 'https://via.placeholder.com/400x200/34a853/ffffff?text=PDF+CSV+Reader'
    },
    {
      title: 'Hybrid Research Agent',
      description: 'Advanced chatbot with real-time information retrieval from multiple sources, powered by LLM reasoning and API integration',
      tech: ['LangChain', 'Python', 'APIs', 'LLM', 'Web Scraping'],
      github: 'https://github.com/Cluster3824/Hybrid_agent',
      demo: null,
      image: '/assets/images/1756573238992.jpg'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="section-number">03</div>
      <div className="container">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <i className="fab fa-github"></i> View Code
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link demo">
                      <i className="fas fa-external-link-alt"></i> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;