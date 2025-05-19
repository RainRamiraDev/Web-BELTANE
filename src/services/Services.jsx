// components/Services.jsx
import React from 'react';
import '../components/css/services.css';

const services = [
  {
    title: 'Diseño Web Personalizado',
    description: 'Sitios únicos y optimizados para tu marca, desde landing pages hasta webs corporativas.',
    icon: '🌐',
  },
  {
    title: 'Tiendas Online',
    description: 'E-commerce profesional para vender sin límites, con pasarelas de pago y catálogo dinámico.',
    icon: '🛒',
  },
  {
    title: 'Identidad Visual',
    description: 'Creamos branding coherente y poderoso: logo, paleta de colores, tipografía y más.',
    icon: '🎨',
  },
  {
    title: 'Automatización & Integraciones',
    description: 'Conectamos tus herramientas (CRM, email, WhatsApp) para que todo fluya solo.',
    icon: '⚙️',
  },
];

const Services = () => (
  <section className="services">
    <h2>Nuestros servicios</h2>
    <div className="service-grid">
      {services.map((srv, index) => (
        <div className="service-card" key={index}>
          <div className="service-icon">{srv.icon}</div>
          <h3>{srv.title}</h3>
          <p>{srv.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
