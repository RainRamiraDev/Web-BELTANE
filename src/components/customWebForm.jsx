// src/components/CustomWebForm.jsx
import React, { useState, useRef, useEffect } from 'react';
import InputPer from '../components/InputPer';
import TextAreaPer from '../components/TextAreaPer';
import { sendContactEmail } from '../services/contactService';
import '../components/css/CustomWebForm.css'

const CustomWebForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectDescription: '',
    goal: '',
    pages: '',
    features: '',
    designInspiration: '',
    budget: '',
    deadline: '',
    hosting: '',
    comments: '',
  });

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validaciones básicas
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.projectDescription.trim() ||
      !formData.goal.trim()
    ) {
      setError('Por favor, completa todos los campos obligatorios.');
      return;
    }

    if (!/^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/.test(formData.name.trim())) {
      setError('El nombre solo puede contener letras y espacios.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setError('El correo electrónico no tiene un formato válido.');
      return;
    }

    if (formData.projectDescription.trim().length < 10) {
      setError('La descripción del proyecto debe tener al menos 10 caracteres.');
      return;
    }

    if (formData.name.trim().length > 50) {
      setError('El nombre no debe superar los 50 caracteres.');
      return;
    }

    if (formData.projectDescription.trim().length > 1000) {
      setError('La descripción no debe superar los 1000 caracteres.');
      return;
    }

    setLoading(true);
    setError(null);

    // Aquí puedes adaptar el envío según tu servicio, agregando los nuevos campos
    const result = await sendContactEmail(formData, hiddenFormRef);

    if (result.success) {
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectDescription: '',
        goal: '',
        pages: '',
        features: '',
        designInspiration: '',
        budget: '',
        deadline: '',
        hosting: '',
        comments: '',
      });
    } else {
      setError(result.error);
    }

    setLoading(false);
  };

  return (
    <>
      <form className="contact-form animate-fadeInUp animate-delay-2" onSubmit={handleSubmit} noValidate>
        <label htmlFor="name">Nombre completo*</label>
        <InputPer
          type="text"
          name="name"
          value={formData.name}
          plac="Tu nombre completo"
          change={handleChange}
          disabled={loading}
        />

        <label htmlFor="email">Correo electrónico*</label>
        <InputPer
          type="email"
          name="email"
          value={formData.email}
          plac="tu@correo.com"
          change={handleChange}
          disabled={loading}
        />

        <label htmlFor="phone">Teléfono / WhatsApp</label>
        <InputPer
          type="tel"
          name="phone"
          value={formData.phone}
          plac="(opcional)"
          change={handleChange}
          disabled={loading}
        />

        <label htmlFor="company">Nombre de la empresa o proyecto</label>
        <InputPer
          type="text"
          name="company"
          value={formData.company}
          plac="Nombre de tu empresa o proyecto"
          change={handleChange}
          disabled={loading}
        />

        <label htmlFor="projectDescription">Descripción breve del proyecto*</label>
        <TextAreaPer
          name="projectDescription"
          value={formData.projectDescription}
          plac="Cuéntanos qué quieres que diseñemos"
          change={handleChange}
          disabled={loading}
        />

        <label htmlFor="goal">Objetivo principal del sitio web*</label>
        <select
          name="goal"
          value={formData.goal}
          onChange={handleChange}
          disabled={loading}
          required
          style={{ padding: '0.75rem 1rem', borderRadius: '0.5rem', fontSize: '1rem', fontFamily: 'inherit' }}
        >
          <option value="">Selecciona una opción</option>
          <option value="services">Presentar servicios/productos</option>
          <option value="ecommerce">Tienda online / e-commerce</option>
          <option value="portfolio">Portafolio profesional</option>
          <option value="blog">Blog / contenido</option>
          <option value="other">Otro</option>
        </select>

        <label htmlFor="pages">Número aproximado de páginas</label>
        <InputPer
          type="number"
          name="pages"
          value={formData.pages}
          plac="Ejemplo: 5"
          change={handleChange}
          disabled={loading}
          min={1}
        />

        <label htmlFor="features">Funcionalidades específicas requeridas</label>
        <TextAreaPer
          name="features"
          value={formData.features}
          plac="Ejemplo: carrito de compra, blog, multilenguaje..."
          change={handleChange}
          disabled={loading}
        />

        <label htmlFor="designInspiration">Diseño preferido / inspiración (links)</label>
        <TextAreaPer
          name="designInspiration"
          value={formData.designInspiration}
          plac="Comparte links o ideas de diseño que te gusten"
          change={handleChange}
          disabled={loading}
        />

        <label htmlFor="budget">Presupuesto estimado (opcional)</label>
        <InputPer
          type="number"
          name="budget"
          value={formData.budget}
          plac="Ejemplo: 1000"
          change={handleChange}
          disabled={loading}
          min={0}
        />

        <label htmlFor="deadline">Plazo o fecha límite</label>
        <InputPer
          type="date"
          name="deadline"
          value={formData.deadline}
          plac=""
          change={handleChange}
          disabled={loading}
        />

        <label>¿Ya tienes dominio y hosting?</label>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ marginRight: '1rem' }}>
            <input
              type="radio"
              name="hosting"
              value="yes"
              checked={formData.hosting === 'yes'}
              onChange={handleChange}
              disabled={loading}
            /> Sí
          </label>
          <label>
            <input
              type="radio"
              name="hosting"
              value="no"
              checked={formData.hosting === 'no'}
              onChange={handleChange}
              disabled={loading}
            /> No
          </label>
        </div>

        <label htmlFor="comments">Comentarios o requerimientos adicionales</label>
        <TextAreaPer
          name="comments"
          value={formData.comments}
          plac="Agrega aquí cualquier detalle extra"
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

      {/* Formulario oculto para enviar por formsubmit.co */}
      <form
        ref={hiddenFormRef}
        action="https://formsubmit.co/contact2beltane@gmail.com"
        method="POST"
        target="_blank"
        style={{ display: 'none' }}
      >
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_subject" value="Nuevo proyecto web personalizado desde el sitio de BELTANE" />
        {/* Los nombres deben coincidir para que el backend los reciba */}
        <input type="hidden" name="Nombre" value={formData.name} />
        <input type="hidden" name="Correo" value={formData.email} />
        <input type="hidden" name="Teléfono" value={formData.phone} />
        <input type="hidden" name="Empresa o Proyecto" value={formData.company} />
        <input type="hidden" name="Descripción del Proyecto" value={formData.projectDescription} />
        <input type="hidden" name="Objetivo" value={formData.goal} />
        <input type="hidden" name="Número de Páginas" value={formData.pages} />
        <input type="hidden" name="Funcionalidades" value={formData.features} />
        <input type="hidden" name="Inspiración" value={formData.designInspiration} />
        <input type="hidden" name="Presupuesto" value={formData.budget} />
        <input type="hidden" name="Fecha Límite" value={formData.deadline} />
        <input type="hidden" name="Dominio y Hosting" value={formData.hosting} />
        <input type="hidden" name="Comentarios" value={formData.comments} />
      </form>
    </>
  );
};

export default CustomWebForm;
