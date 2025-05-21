import React from 'react';

const TestimonialCard = ({ name, role, message, image }) => (
  <div className="testimonial-card">
    <img src={image} alt={`Foto de ${name}`} className="testimonial-avatar" />
    <p className="testimonial-message">“{message}”</p>
    <p className="testimonial-name">{name}</p>
    <p className="testimonial-role">{role}</p>
  </div>
);

export default TestimonialCard;
