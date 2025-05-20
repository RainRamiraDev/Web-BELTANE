import React from 'react';
import '../components/css/portfolioView.css';

const projects = [
  {
    id: 1,
    title: 'Tienda Virtual Vegana',
    client: 'GreenLife',
    image: '/portfolio/greenlife-mockup.png',
    description: 'Diseño y desarrollo de tienda online con carrito, stock y pasarela de pago.',
    tech: ['React', 'Firebase', 'Figma'],
    url: 'https://greenlife-shop.com',
  },
  {
    id: 2,
    title: 'Landing Page Minimalista',
    client: 'Nomad Travel',
    image: '/portfolio/nomad-mockup.png',
    description: 'Landing responsiva optimizada para captar leads de viajes.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://nomadlanding.netlify.app',
  },
  {
    id: 3,
    title: 'Identidad Visual Completa',
    client: 'Kaia Studio',
    image: '/portfolio/kaia-branding.png',
    description: 'Branding, paleta de colores, logo y diseño UX/UI.',
    tech: ['Figma', 'Illustrator'],
    url: '',
  },
];

const testimonials = [
  {
    name: 'Lucía Fernández',
    role: 'Fundadora de GreenLife',
    message:
      'El equipo de BELTANE entendió exactamente lo que necesitaba. Ahora mi tienda online no solo se ve increíble, ¡sino que vende!',
    image: '/testimonials/lucia.png',
  },
  {
    name: 'Tomás Gómez',
    role: 'CEO en Nomad Travel',
    message:
      'Profesionales, creativos y atentos. La landing que crearon triplicó nuestras conversiones.',
    image: '/testimonials/tomas.png',
  },
  {
    name: 'Camila Soto',
    role: 'Directora de Kaia Studio',
    message:
      'Gracias a su trabajo de branding, ahora nuestra identidad visual transmite exactamente lo que somos.',
    image: '/testimonials/camila.png',
  },
];

const PortfolioView = () => {
  return (
    <section className="portfolio-section section container">
      <h1 className="heading-lg text-center">Portafolio</h1>
      <p className="paragraph text-center">
        Explora nuestros proyectos realizados para emprendedores y empresas.
      </p>

      <div className="portfolio-grid">
        {projects.map(({ id, title, client, image, description, tech,}) => (
          <div className="portfolio-card" key={id}>
            <div className="card-image">
              <img src={image} alt={`Mockup de ${title}`} loading="lazy" />
            </div>
            <div className="card-content">
              <h3>{title}</h3>
              <p className="client-name">Cliente: {client}</p>
              <p className="description">{description}</p>
              <ul className="tech-stack">
                {tech.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
        
            </div>
          </div>
        ))}
      </div>


      {/* Testimonios */}
      <div className="testimonial-section">
        <h1 className="heading-lg text-center">Testimonios</h1>
        <div className="testimonial-grid">
          {testimonials.map(({ name, role, message, image }, index) => (
            <div className="testimonial-card" key={index}>
              <img src={image} alt={`Foto de ${name}`} className="testimonial-avatar" />
              <p className="testimonial-message">“{message}”</p>
              <p className="testimonial-name">{name}</p>
              <p className="testimonial-role">{role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioView;
