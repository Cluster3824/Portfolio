import React from 'react';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-container">
          <div className="nav-logo">Rohith R</div>
          <ul className="nav-menu">
            <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
            <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Skills</a></li>
            <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a></li>
            <li><a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}>Experience</a></li>
            <li><a href="#education" onClick={(e) => { e.preventDefault(); scrollToSection('education'); }}>Education</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
            <li><a href="/assets/documents/Resume.pdf" download="Rohith_R_Resume.pdf" className="resume-download">Resume</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;