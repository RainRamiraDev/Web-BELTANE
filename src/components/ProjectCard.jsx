const ProjectCard = ({ title, client, image, description, tech }) => (
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
    </div>
  </div>
);

export default ProjectCard;
