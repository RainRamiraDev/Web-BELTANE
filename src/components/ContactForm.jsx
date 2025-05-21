// src/components/ContactForm.jsx
import React, { useState, useRef, useEffect } from 'react';
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

    if (!formData.name || !formData.email || !formData.message) {
      setError('Por favor, completa todos los campos.');
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
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Tu nombre"
          value={formData.name}
          onChange={handleChange}
          required
          disabled={loading}
        />

        <label htmlFor="email">Correo electrónico</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="tu@correo.com"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={loading}
        />

        <label htmlFor="message">Mensaje</label>
        <textarea
          id="message"
          name="message"
          placeholder="Escribe tu mensaje aquí..."
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
          disabled={loading}
        />

        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Enviando...' : 'Enviar'}
        </button>

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
