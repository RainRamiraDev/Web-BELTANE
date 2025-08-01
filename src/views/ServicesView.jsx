import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ServiceItem from '../components/ServiceItem';
import ServicePopup from '../components/ServicePopup';
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
      left: rect.right + 10,
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
        {items.map((service) => (
          <ServiceItem
            key={service.id}
            service={service}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </ul>

      {hoveredService && (
        <ServicePopup service={hoveredService} position={popupPosition} />
      )}
    </section>
  );
};

export default ServicesView;
