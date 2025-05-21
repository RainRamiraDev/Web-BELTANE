import React from 'react';
import '../components/css/portfolioView.css';
import { projects, testimonials } from '../Data/portfolioData';
import PortfolioCard from '../components/PortfolioCard';
import TestimonialCard from '../components/TestimonialCard';

const PortfolioView = () => {
  return (
    <section className="portfolio-section section container">
      <h1 className="heading-lg text-center">Portafolio</h1>
      <p className="paragraph text-center">
        Explora nuestros proyectos realizados para emprendedores y empresas.
      </p>

      <div className="portfolio-grid">
        {projects.map((project) => (
          <PortfolioCard key={project.id} {...project} />
        ))}
      </div>

      <div className="testimonial-section">
        <h1 className="heading-lg text-center">Testimonios</h1>
        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioView;
