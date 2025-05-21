// components/Services.jsx
import React, { useEffect, useRef } from 'react';
import { services } from '../Data/serviceData';
import '../components/css/services.css';

const Services = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => {
      cardsRef.current.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section className="services">
      <h2>Nuestros servicios</h2>
      <div className="service-grid">
        {services.map((srv, index) => (
          <div
            key={index}
            className="service-card reveal"
            ref={el => (cardsRef.current[index] = el)}
            style={{ '--delay': `${index * 0.1}s` }}
          >
            <div className="service-icon">{srv.icon}</div>
            <h3>{srv.title}</h3>
            <p>{srv.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
