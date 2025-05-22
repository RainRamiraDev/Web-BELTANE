import React from 'react';
import CustomWebForm from '../components/customWebForm'; // Asegurate de que este sea el nombre correcto
import '../components/css/customWebView.css'; // Estilos específicos para esta vista (opcional)

const CustomWebView = () => {
  return (
    <section className="custom-web-section section container">
      <h1 className="heading-lg text-center animate-fadeInDown">Formulario de Presupuesto</h1>
      <p className="paragraph text-center animate-fadeInDown animate-delay-1">
        Completa este formulario para contarnos cómo debería ser tu sitio web ideal. ¡Estamos listos para hacerlo realidad!
      </p>

      <CustomWebForm />
    </section>
  );
};

export default CustomWebView;
