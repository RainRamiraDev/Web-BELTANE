// src/services/contactService.js
import emailjs from 'emailjs-com';

export const sendContactEmail = async (formData, hiddenFormRef) => {
  const templateParams = {
    email: formData.email,
    from_name: formData.name,
  };

  try {
    await emailjs.send(
      'service_5uwa225',
      'template_ftgqcpn',
      templateParams,
      '1yB-L_vQVkMle_VTF'
    );

    // Enviar formulario oculto si existe
    if (hiddenFormRef.current) {
      hiddenFormRef.current.querySelector('input[name="Nombre"]').value = formData.name;
      hiddenFormRef.current.querySelector('input[name="Correo"]').value = formData.email;
      hiddenFormRef.current.querySelector('input[name="Mensaje"]').value = formData.message;

      hiddenFormRef.current.submit();
    }

    return { success: true };
  } catch (error) {
    console.error('EmailJS error:', error);
    return { success: false, error: 'Error al enviar el mensaje. Inténtalo más tarde.' };
  }
};
