import React from 'react';

const ServiceItem = ({ service, onMouseEnter, onMouseLeave }) => {
  const { title, description, images } = service;

  return (
    <li
      className="service-item"
      onMouseEnter={(e) => onMouseEnter(e, { title, description, images })}
      onMouseLeave={onMouseLeave}
    >
      <div className="service-icon">✨</div>
      <h3 className="heading-md">{title}</h3>
      <p className="paragraph">{description}</p>
    </li>
  );
};

export default ServiceItem;
