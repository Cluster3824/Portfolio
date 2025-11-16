import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'AI Research Mentor',
      company: 'Tech University',
      content: 'Rohith demonstrates exceptional understanding of machine learning concepts and shows great potential in LLM development. His projects reflect both technical depth and practical application.',
      rating: 5
    },
    {
      name: 'Alex Chen',
      role: 'Senior Developer',
      company: 'Open Source Community',
      content: 'Working with Rohith on open-source projects has been impressive. His code quality is excellent and he brings innovative solutions to complex problems.',
      rating: 5
    },
    {
      name: 'Prof. Michael Kumar',
      role: 'Computer Science Faculty',
      company: 'Engineering College',
      content: 'Rohith is among the top students in AI & Data Science. His dedication to learning and ability to implement cutting-edge technologies is remarkable.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2>What People Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-content">
                <div className="stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
                <p>"{testimonial.content}"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                  <span>{testimonial.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;