import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['C', 'C++', 'Python', 'Java', 'JavaScript']
    },
    {
      title: 'Web Development',
      skills: ['React.js', 'Node.js', 'HTML5', 'CSS']
    },
    {
      title: 'Cloud Computing basics',
      skills: ['AWS', 'Azure', 'GCP', 'Docker', 'Ubuntu']
    },
    {
      title: 'AI & ML',
      skills: ['PyTorch', 'TensorFlow', 'Machine Learning Algorithms']
    },
    {
      title: 'Operating Systems',
      skills: ['Linux', 'Ubuntu', 'Arch Linux', 'Shell Scripting']
    },
    {
      title: 'LLM Agent Development',
      skills: ['Hugging Face', 'Unsloth', 'Ollama', 'Gradio', 'LangChain', 'LangGraph', 'Google ADK']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="section-number">02</div>
      <div className="container">
        <h2>Skills & Technologies</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;