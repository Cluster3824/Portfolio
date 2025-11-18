import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'LLM Agent Developer',
      company: 'Personal Projects',
      period: '2024 - Present',
      description: 'Developed multiple LLM agents including HSN Code validation system and Hybrid Research Agent using Google ADK, Ollama, and LangChain.',
      achievements: ['Built AI-powered HSN Code validation system', 'Created hybrid research chatbot with real-time data fetching', 'Implemented LLM workflows using LangGraph']
    },
    {
      title: 'Web Developer',
      company: 'College Projects',
      period: '2024 - Present',
      description: 'Developed responsive web applications using modern frameworks and technologies for various clients.',
      achievements: ['Built 2+ responsive websites using React.js', 'Implemented RESTful APIs with Node.js', 'Optimized web performance and SEO']
    },
    {
      title: 'Linux System Administrator',
      company: 'Self-Learning',
      period: '2024 - Present',
      description: 'Gained hands-on experience with Linux systems, shell scripting, and package management across Ubuntu and Arch Linux distributions.',
      achievements: ['1+ year experience with Ubuntu and Arch Linux', 'Proficient in shell scripting and automation', 'System administration and package management']
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2>Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-content">
                <h3>{exp.title}</h3>
                <div className="experience-meta">
                  <span className="company">{exp.company}</span>
                  <span className="period">{exp.period}</span>
                </div>
                <p>{exp.description}</p>
                <ul className="achievements">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;