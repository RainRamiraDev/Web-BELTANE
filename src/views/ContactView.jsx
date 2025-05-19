import React, { useState, useEffect, useRef } from 'react';
import emailjs from 'emailjs-com';
import '../components/css/contectView.css';

const ContactView = () => {
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
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError('Por favor, completa todos los campos.');
      return;
    }

    setLoading(true);
    setError(null);

    const templateParams = {
      email: formData.email,       // coincide con {{email}} en la plantilla
      from_name: formData.name,    // coincide con {{from_name}} en la plantilla
    };

    emailjs
      .send('service_5uwa225', 'template_ftgqcpn', templateParams, '1yB-L_vQVkMle_VTF')
      .then((response) => {
        console.log('EmailJS success:', response.status, response.text);
        // Antes de enviar el formulario oculto, actualizamos sus inputs para que tengan el valor actual
        if (hiddenFormRef.current) {
          // Actualizamos los inputs hidden del formulario con los últimos datos
          hiddenFormRef.current.querySelector('input[name="Nombre"]').value = formData.name;
          hiddenFormRef.current.querySelector('input[name="Correo"]').value = formData.email;
          hiddenFormRef.current.querySelector('input[name="Mensaje"]').value = formData.message;

          hiddenFormRef.current.submit();
        }

        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.error('EmailJS error:', err);
        setError('Error al enviar el mensaje. Inténtalo más tarde.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className="contact-section section container">
      <h1 className="heading-lg text-center animate-fadeInDown">Contacto</h1>
      <p className="paragraph text-center animate-fadeInDown animate-delay-1">
        Ponte en contacto con nosotros para transformar tu proyecto digital.
      </p>

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
          autoComplete="name"
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
          autoComplete="email"
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

      {/* Formulario oculto para enviar a tu correo vía FormSubmit */}
      <form
        ref={hiddenFormRef}
        action="https://formsubmit.co/contact2beltane@gmail.com"
        method="POST"
        target="_blank"
        style={{ display: 'none' }}
      >
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_subject" value="Nuevo mensaje desde el sitio de BELTANE" />
        <input type="hidden" name="Nombre" value={formData.name} />
        <input type="hidden" name="Correo" value={formData.email} />
        <input type="hidden" name="Mensaje" value={formData.message} />
      </form>
    </section>
  );
};

export default ContactView;
