import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  useEffect(() => {
    // Initialize animations after component mount
    const timer = setTimeout(() => {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      }, observerOptions);

      // Observe elements
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
      });

      // Navbar scroll effect
      const navbar = document.querySelector('.navbar');
      const handleScroll = () => {
        if (window.scrollY > 100) {
          navbar?.classList.add('scrolled');
        } else {
          navbar?.classList.remove('scrolled');
        }
      };
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
        observer.disconnect();
      };
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
      <ScrollToTop />
      
      <div className="quick-stats">
        <div className="quick-stat">
          <span className="quick-stat-number">3+</span>
          <span className="quick-stat-label">Years</span>
        </div>
        <div className="quick-stat">
          <span className="quick-stat-number">4+</span>
          <span className="quick-stat-label">Projects</span>
        </div>
        <div className="quick-stat">
          <span className="quick-stat-number">6+</span>
          <span className="quick-stat-label">Skills</span>
        </div>
      </div>
    </div>
  );
}

export default App;