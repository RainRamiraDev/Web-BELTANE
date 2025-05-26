// components/OfferBlock.jsx
import React from 'react';
import './css/OfferBlock.css'

const OfferBlock = () => (
  <section className="offer-block">
    <div className="offer-content">
      <h1>Lanzá tu web con 20% OFF</h1>
      <p>Durante este mes, te regalamos un 20% de descuento en tu primer proyecto con BELTANE.</p>
      <button href="/presupuesto" className="btn-primary">Quiero mi web</button>
    </div>
  </section>
);

export default OfferBlock;