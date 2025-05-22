/**
 * Este archivo define las rutas principales de la aplicación utilizando React Router.
 *
 * - Se importan los componentes `Routes` y `Route` desde 'react-router-dom' para definir la navegación entre páginas.
 * - Se importan los componentes de vista que representan las distintas páginas: Home y ProductDetail.
 *
 * - El componente `AppRoutes` encapsula la configuración de rutas usando JSX.
 *   - <Routes> actúa como contenedor de todas las rutas de la aplicación.
 *   - <Route path="/" element={<Home />} /> indica que cuando la URL sea exactamente "/", se renderizará el componente Home.
 *   - <Route path="/product/:id" element={<ProductDetail />} /> define una ruta dinámica. 
 *     El `:id` es un parámetro de la URL que puede ser capturado dentro del componente ProductDetail usando `useParams()`.
 *     Esto permite mostrar los detalles de un producto específico basado en su ID.
 *
 * Esta estructura permite manejar una navegación basada en rutas declarativas dentro de una SPA (Single Page Application),
 * sin necesidad de recargar la página al cambiar de vista.
 */

import { Routes, Route } from 'react-router-dom';
import Home from '../views/Home';
import ServicesView from '../views/ServicesView';
import PortfolioView from '../views/PortfolioView';
import ContactView from '../views/ContactView';
import CustomWebView from  '../views/CustomWebView';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/servicios" element={<ServicesView />} />
    <Route path="/portafolio" element={<PortfolioView />} />
    <Route path="/contacto" element={<ContactView />} />
     <Route path="/presupuesto" element={<CustomWebView />} />
  </Routes>
);

export default AppRoutes;


