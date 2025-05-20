import React from 'react';
import { NavLink } from 'react-router-dom';
import './css/navbar.css'; // Asegúrate de tener este archivo

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <NavLink to="/" className="logo-text">
        <img src="/src/assets/logonombreblanco.png" alt="Logo" className="logo-image" />
        </NavLink>
      </div>
      <ul className="navbar-menu">
        <li><NavLink to="/" end>Inicio</NavLink></li>
        <li><NavLink to="/servicios">Servicios</NavLink></li>
        <li><NavLink to="/portafolio">Portafolio</NavLink></li>
        <li><NavLink to="/contacto">Contacto</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;