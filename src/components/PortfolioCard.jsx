import React from 'react';

const PortfolioCard = ({ title, client, image, description, tech, url }) => (
  <div className="portfolio-card">
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
      {url && (
        <a href={url} target="_blank" rel="noopener noreferrer" className="project-link">
          Ver proyecto
        </a>
      )}
    </div>
  </div>
);

export default PortfolioCard;
