// src/views/ContactView.jsx
import React from 'react';
import ContactForm from '../components/ContactForm';
import '../components/css/contectView.css';

const ContactView = () => {
  return (
    <section className="contact-section section container">
      <h1 className="heading-lg text-center animate-fadeInDown">Contacto</h1>
      <p className="paragraph text-center animate-fadeInDown animate-delay-1">
        Ponte en contacto con nosotros para transformar tu proyecto digital.
      </p>

      <ContactForm />
    </section>
  );
};

export default ContactView;
  