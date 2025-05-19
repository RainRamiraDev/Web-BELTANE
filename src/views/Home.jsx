/**
 * Componente funcional Home que representa la página principal donde se muestran productos.
 * 
 * - Importa React, hooks useState y useEffect para manejar estado y efectos secundarios.
 * - Importa la función getAllProducts que realiza la llamada a la API para obtener productos.
 * - Importa componentes visuales como ProductCard, Hero, MainText y Carrousel para componer la UI.
 * 
 * - Dentro del componente:
 *   - Se declara el estado `products` como un arreglo vacío inicialmente.
 *   - useEffect con arreglo de dependencias vacío para que se ejecute solo una vez al montar el componente.
 *   - En useEffect se llama a getAllProducts(), que devuelve una promesa. Al resolverse,
 *     se actualiza el estado `products` con los datos recibidos (`res.data`).
 * 
 * - En el render:
 *   - Se muestra una estructura principal (<main>) que incluye componentes Hero, MainText y Carrousel.
 *   - Luego se renderiza una sección con clase "product-list".
 *   - Dentro de esa sección se mapea el arreglo `products` para renderizar un ProductCard por cada producto,
 *     pasando el producto como prop y usando `p.id` como key única.
 * 
 * Este patrón permite cargar dinámicamente los productos desde la API y mostrarlos en la página principal
 * de forma eficiente y declarativa, separando responsabilidades en componentes específicos.
 */

// import React, { useState, useEffect } from 'react'
// import { getAllProducts } from '../services/producsService'
import React from 'react';
import Hero from '../components/Hero';
import Services from '../services/Services';
import OfferBlock from '../components/OfferBlock';

const Home = () => {
  return (
    <main className="home-main">
      <Hero />
      <Services />
      <OfferBlock />
    </main>
  );
};

export default Home;
