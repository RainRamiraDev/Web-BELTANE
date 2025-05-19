import React from 'react';
import './css/hero.css';

const Hero = () => {
  return (
    <section className="hero" aria-label="Sección principal de presentación">
      <div className="hero-content animate-fadeInUp animate-delay-1">
        <h1>
          Soluciones digitales<br /> hechas a tu medida
        </h1>
        <p>
          En <strong>BELTANE</strong> diseñamos sitios web, tiendas online y experiencias digitales con diseño y estrategia.
        </p>
        <div className="hero-buttons">
          <a href="/servicios" className="btn btn-primary" role="button">Ver servicios</a>
          <a href="/contacto" className="btn btn-secondary" role="button">Agenda una llamada</a>
        </div>
      </div>

    </section>
  );
};

export default Hero;
