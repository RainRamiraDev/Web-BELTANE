import React from 'react';
import { NavLink } from 'react-router-dom';
import './css/Navbar.css';

const Navbar = () => {
  return (
   <nav class="navbar">
  <ul class="navbar-menu nav-left">
    <li><a href="/">Inicio</a></li>
    <li><a href="/servicios">Servicios</a></li>
  </ul>

  <div class="navbar-logo">
    <a href="/">
      <img src="/src/assets/logonombreblanco.png" alt="Logo" class="logo-image" />
    </a>
  </div>

  <ul class="navbar-menu nav-right">
    <li><a href="/portafolio">Portafolio</a></li>
    <li><a href="/contacto">Contacto</a></li>
  </ul>
</nav>



  );
};

export default Navbar;
