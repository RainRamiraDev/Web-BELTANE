// src/components/ContactForm.jsx
import React, { useState, useRef, useEffect } from 'react';
import InputPer from '../components/InputPer';
import TextAreaPer from '../components/TextAreaPer';
import { sendContactEmail } from '../services/contactService';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const hiddenFormRef = useRef(null);

  useEffect(() => {
    if (submitted || error) {
      const timer = setTimeout(() => {
        setSubmitted(false);
        setError(null);
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [submitted, error]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

// Validación: campos vacíos
  if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
  setError('Por favor, completa todos los campos.');
  return;
}
// Validación: solo letras en nombre
if (!/^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/.test(formData.name.trim())) {
  setError('El nombre solo puede contener letras y espacios.');
  return;
}

// Validación: email válido
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(formData.email.trim())) {
  setError('El correo electrónico no tiene un formato válido.');
  return;
}

// Validación: longitud mínima y máxima
if (formData.message.trim().length < 10) {
  setError('El mensaje debe tener al menos 10 caracteres.');
  return;
}

if (formData.name.trim().length > 50) {
  setError('El nombre no debe superar los 50 caracteres.');
  return;
}

if (formData.message.trim().length > 500) {
  setError('El mensaje no debe superar los 500 caracteres.');
  return;
}


    setLoading(true);
    setError(null);

    const result = await sendContactEmail(formData, hiddenFormRef);

    if (result.success) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } else {
      setError(result.error);
    }

    setLoading(false);
  };

  return (
    <>
      <form className="contact-form animate-fadeInUp animate-delay-2" onSubmit={handleSubmit} noValidate>
        <label htmlFor="name">Nombre</label>
        <InputPer
          type="text"
          name="name"
          value={formData.name}
          plac="Tu nombre"
          change={handleChange}
          disabled={loading}
        />

        <label htmlFor="email">Correo electrónico</label>
        <InputPer
          type="email"
          name="email"
          value={formData.email}
          plac="tu@correo.com"
          change={handleChange}
          disabled={loading}
        />

        <label htmlFor="message">Mensaje</label>
        <TextAreaPer
          name="message"
          value={formData.message}
          plac="Escribe tu mensaje aquí..."
          change={handleChange}
          disabled={loading}
        />

       <div className="button-container">
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Enviando...' : 'Enviar'}
        </button>
      </div>

        {submitted && <p className="submit-message success">¡Gracias por contactarnos! Te responderemos pronto.</p>}
        {error && <p className="submit-message error">{error}</p>}
      </form>

      {/* Formulario oculto */}
      <form
        ref={hiddenFormRef}
        action="https://formsubmit.co/contact2beltane@gmail.com"
        method="POST"
        target="_blank"
        style={{ display: 'none' }}
      >
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_subject" value="Nuevo mensaje desde el sitio de BELTANE" />
        <input type="hidden" name="Nombre" />
        <input type="hidden" name="Correo" />
        <input type="hidden" name="Mensaje" />
      </form>
    </>
  );
};

export default ContactForm;
