const servicesData = [
  {
    id: 1,
    title: 'Diseño Web a Medida',
    description: 'Páginas web personalizadas con identidad propia.',
    images: ['/assets/services/web-design.jpg']
  },
  {
    id: 2,
    title: 'Marketing Digital',
    description: 'Estrategias para potenciar tu marca y ventas.',
    images: ['/assets/services/marketing.jpg']
  },
  {
    id: 3,
    title: 'Automatización de Procesos',
    description: 'Herramientas para ahorrar tiempo y aumentar eficiencia.',
    images: ['/assets/services/automation.jpg']
  }
];

export function fetchServices() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(servicesData);
    }, 500); // Simula tiempo de respuesta
  });
}
