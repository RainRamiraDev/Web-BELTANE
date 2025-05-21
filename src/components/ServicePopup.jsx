import React from 'react';

const ServicePopup = ({ service, position }) => {
  const { title, images } = service;

  return (
    <div className="popup-hover" style={{ top: position.top, left: position.left }}>
      <h4>{title}</h4>
      {images?.length > 0 ? (
        <img
          src={images[0]}
          alt={`Preview de ${title}`}
          className="popup-image"
        />
      ) : (
        <p>Sin imagen</p>
      )}
    </div>
  );
};

export default ServicePopup;
