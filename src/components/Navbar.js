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
            <li><a onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a onClick={() => scrollToSection('about')}>About</a></li>
            <li><a onClick={() => scrollToSection('skills')}>Skills</a></li>
            <li><a onClick={() => scrollToSection('projects')}>Projects</a></li>
            <li><a onClick={() => scrollToSection('experience')}>Experience</a></li>
            <li><a onClick={() => scrollToSection('education')}>Education</a></li>
            <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;