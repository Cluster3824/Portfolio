import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Let's Connect</h2>
        <p>I'm always excited to discuss new opportunities, collaborate on innovative projects, or simply connect with fellow developers and AI enthusiasts. Whether you're interested in LLM agent development, machine learning research, or full-stack development, I'd love to hear from you!</p>
        <div className="contact-links">
          <a href="mailto:rohith3824r1@gmail.com" className="contact-link">
            <i className="fas fa-envelope"></i> rohith3824r1@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/rohith-r-795383297/" target="_blank" rel="noopener noreferrer" className="contact-link">
            <i className="fab fa-linkedin"></i> LinkedIn Profile
          </a>
          <a href="https://github.com/Cluster3824" target="_blank" rel="noopener noreferrer" className="contact-link">
            <i className="fab fa-github"></i> GitHub Portfolio
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;