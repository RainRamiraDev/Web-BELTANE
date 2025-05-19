/**
 * El componente App es la raíz de la aplicación y define la estructura general visible en todas las páginas.
 * 
 * En este código, el orden de los componentes es:
 *  - <Header />: Se muestra siempre en la parte superior, como la barra de navegación o encabezado.
 *  - <AppRoutes />: Controla qué vista (página) se renderiza según la URL actual (por ejemplo, Home o ProductDetail).
 *  - <Hero />, <MainText />, <ProductGrid />, <Footer />: Estos componentes están fuera de AppRoutes,
 *    por lo que se muestran siempre, independientemente de la ruta.
 * 
 * Esto implica que incluso cuando navegues a otra ruta distinta a la principal,
 * seguirás viendo el Hero, MainText y ProductGrid, lo cual puede no ser deseado.
 * 
 * Para manejar mejor las vistas, lo ideal es:
 *  - Mantener en App solo los componentes globales que deben aparecer siempre, como Header y Footer.
 *  - Mover Hero, MainText y ProductGrid dentro del componente Home, que es la vista para la ruta principal.
 * 
 * Así, cuando estés en la ruta "/" se mostrarán esos componentes, y en otras rutas no.
 * 
 * Ejemplo de estructura recomendada:
 * 
 * function App() {
 *   return (
 *     <>
 *       <Header />
 *       <AppRoutes />
 *       <Footer />
 *     </>
 *   );
 * }
 * 
 * function Home() {
 *   return (
 *     <>
 *       <Hero />
 *       <MainText />
 *       <ProductGrid />
 *     </>
 *   );
 * }
 * 
 * Esto ayuda a separar la estructura global de la lógica y presentación específica de cada página,
 * manteniendo la aplicación más organizada y fácil de mantener.
 */
import React from 'react';
import Header from './components/Navbar'; // asumiendo Navbar para consistencia
import Footer from './components/Footer';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  return (
    <>
      <Header />
      <AppRoutes />
      <Footer />
    </>
  );
};

export default App;

