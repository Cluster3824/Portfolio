// Intersection Observer for scroll animations
export const initScrollAnimations = () => {
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

  // Observe all elements that should animate
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  animateElements.forEach(el => observer.observe(el));

  // Observe section headings
  const headings = document.querySelectorAll('h2');
  headings.forEach(heading => {
    heading.classList.add('animate-on-scroll');
    observer.observe(heading);
  });

  // Observe skill categories
  const skillCategories = document.querySelectorAll('.skill-category');
  skillCategories.forEach((category, index) => {
    category.classList.add('animate-on-scroll');
    category.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(category);
  });

  // Observe project cards
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach((card, index) => {
    card.classList.add('animate-on-scroll');
    card.style.transitionDelay = `${index * 0.2}s`;
    observer.observe(card);
  });

  // Observe experience items
  setTimeout(() => {
    const experienceItems = document.querySelectorAll('.experience-item');
    experienceItems.forEach((item, index) => {
      item.classList.add('animate-on-scroll');
      item.style.transitionDelay = `${index * 0.2}s`;
      observer.observe(item);
    });
  }, 100);

  // Observe education items
  setTimeout(() => {
    const educationItems = document.querySelectorAll('.education-item');
    educationItems.forEach((item, index) => {
      item.classList.add('animate-on-scroll');
      item.style.transitionDelay = `${index * 0.1}s`;
      observer.observe(item);
    });
    
    const certificationCards = document.querySelectorAll('.certification-card');
    certificationCards.forEach((card, index) => {
      card.classList.add('animate-on-scroll');
      card.style.transitionDelay = `${index * 0.1}s`;
      observer.observe(card);
    });
  }, 100);

  // Observe about sections
  setTimeout(() => {
    const aboutText = document.querySelector('.about-text');
    const aboutStats = document.querySelector('.about-stats');
    
    if (aboutText) {
      aboutText.classList.add('animate-on-scroll');
      observer.observe(aboutText);
    }
    
    if (aboutStats) {
      aboutStats.classList.add('animate-on-scroll');
      aboutStats.style.transitionDelay = '0.3s';
      observer.observe(aboutStats);
    }
  }, 100);

  // Observe contact links
  setTimeout(() => {
    const contactLinks = document.querySelectorAll('.contact-link');
    contactLinks.forEach((link, index) => {
      link.classList.add('animate-on-scroll');
      link.style.transitionDelay = `${index * 0.1}s`;
      observer.observe(link);
    });
  }, 100);
};

// Navbar scroll effect
export const initNavbarScroll = () => {
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
};

// Initialize all animations
export const initAllAnimations = () => {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initScrollAnimations();
      initNavbarScroll();
    });
  } else {
    initScrollAnimations();
    initNavbarScroll();
  }
};