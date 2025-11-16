import React from 'react';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  React.useEffect(() => {
    const updateScrollProgress = () => {
      const scrollProgress = document.querySelector('.scroll-progress');
      if (scrollProgress) {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollProgress.style.width = scrollPercent + '%';
      }
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <>
      <div className="scroll-progress"></div>
      <section id="home" className="hero">
      <div className="hero-content">
        <h1>Hi, I'm <span className="highlight">Rohith R</span></h1>
        <p className="hero-subtitle">Machine Learning Engineer | AI Developer | Software Engineer</p>
        <p className="hero-description">B.Tech student in AI & Data Science with expertise in LLM development, machine learning, and full-stack engineering. Passionate about building scalable AI solutions.</p>
        <div className="hero-buttons">
          <button onClick={scrollToContact} className="btn primary">Get In Touch</button>
          <a href="https://github.com/Cluster3824" className="btn secondary" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> GitHub
          </a>
        </div>
      </div>
    </section>
    </>
  );
};

export default Hero;