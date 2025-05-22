import React from 'react';
import './css/hero.css';

const Hero = () => {
  return (
    <section className="hero" aria-label="Sección principal de presentación">
      <div className="hero-content animate-fadeInUp animate-delay-1">
        <h1 className="animate-title">
          Soluciones digitales<br /> hechas a tu medida
        </h1>
        <p>
          En <strong>BELTANE</strong> diseñamos sitios web, tiendas online y experiencias digitales con diseño y estrategia.
        </p>
        <div className="hero-buttons">
          <a href="/presupuesto" className="btn btn-primary animate-button" role="button">
            Comenzar asesoramiento
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
