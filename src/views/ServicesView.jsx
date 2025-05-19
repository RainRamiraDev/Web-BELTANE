import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadServices } from '../slices/servicesSlices';
import '../components/css/ServiceView.css';

const ServicesView = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.services);

  const [hoveredService, setHoveredService] = useState(null);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
  const listRef = useRef(null);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(loadServices());
    }
  }, [status, dispatch]);

  const handleMouseEnter = (e, service) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHoveredService(service);
    setPopupPosition({
      top: rect.top + window.scrollY,
      left: rect.right + 10
    });
  };

  const handleMouseLeave = () => {
    setHoveredService(null);
  };

  if (status === 'loading') return <p>Cargando servicios...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <section className="services-section" ref={listRef}>
      <h2 className="heading-lg text-center">Servicios BELTANE</h2>
      <ul className="services-list">
        {items.map(({ id, title, description, images }) => (
          <li
            className="service-item"
            key={id}
            onMouseEnter={(e) => handleMouseEnter(e, { title, description, images })}
            onMouseLeave={handleMouseLeave}
          >
            <div className="service-icon">✨</div>
            <h3 className="heading-md">{title}</h3>
            <p className="paragraph">{description}</p>
          </li>
        ))}
      </ul>

      {hoveredService && (
        <div
          className="popup-hover"
          style={{ top: popupPosition.top, left: popupPosition.left }}
        >
          <h4>{hoveredService.title}</h4>
          {hoveredService.images?.length > 0 ? (
            <img
              src={hoveredService.images[0]}
              alt={`Preview de ${hoveredService.title}`}
              className="popup-image"
            />
          ) : (
            <p>Sin imagen</p>
          )}
        </div>
      )}
    </section>
  );
};

export default ServicesView;
