// components/ServiceCard.jsx
import React from 'react';
import './css/serviceCard.css'

const ServiceCard = ({ service }) => {
  const { icon, title, description } = service;

  return (
    <div className="service-card">
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
