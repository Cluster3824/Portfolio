import React from 'react';

const Education = () => {
  const education = [
    {
      degree: 'B.Tech in Artificial Intelligence and Data Science',
      institution: 'Sri Krishna College Of Engineering and Technology',
      location: 'Coimbatore',
      period: '2023 - 2027',
      status: 'Third Year Student',
      highlights: ['Specialization in AI & Data Science', 'Strong foundation in programming', 'Focus on Machine Learning and Web Development']
    }
  ];

  const certifications = [
    {
      name: 'Machine Learning Fundamentals',
      issuer: 'Self-Study',
      year: '2025',
      skills: ['PyTorch', 'TensorFlow', 'ML Algorithms']
    },
    {
      name: 'LLM Development',
      issuer: 'Hands-on Projects',
      year: '2024',
      skills: ['Hugging Face', 'LangChain', 'Ollama']
    },
    {
      name: 'Linux System Administration',
      issuer: 'Operating System',
      year: '2024',
      skills: ['Ubuntu', 'Arch Linux', 'Shell Scripting']
    },
    {
      name: 'Full Stack Development',
      issuer: 'Project-based Learning',
      year: '2025',
      skills: ['React.js', 'Node.js', 'RESTful APIs']
    },
    {
      name: 'Cloud Computing Basics',
      issuer: 'Certified Course',
      year: '2024',
      skills: ['Ubuntu', 'AWS', 'Azure', 'Docker', 'GCP']
    },
    {
      name: 'Game Development Basics',
      issuer: 'Certified Course',
      year: '2024',
      skills: ['C++', 'SFML', 'Unreal Engine', 'Unity']
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <h2>Education & Certifications</h2>
        
        <div className="education-content">
          <div className="education-section">
            <h3>Education</h3>
            {education.map((edu, index) => (
              <div key={index} className="education-item">
                <h4>{edu.degree}</h4>
                <div className="education-meta">
                  <span className="institution">{edu.institution}</span>
                  <span className="location">{edu.location}</span>
                  <span className="period">{edu.period}</span>
                </div>
                <p className="status">{edu.status}</p>
                <ul className="highlights">
                  {edu.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="certifications-section">
            <h3>Skills & Certifications</h3>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="certification-card">
                  <h4>{cert.name}</h4>
                  <div className="cert-meta">
                    <span className="issuer">{cert.issuer}</span>
                    <span className="year">{cert.year}</span>
                  </div>
                  <div className="cert-skills">
                    {cert.skills.map((skill, i) => (
                      <span key={i} className="cert-skill">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;