<template>
    <div class="container py-5">
      <h1 class="text-center mb-5">Experiencia</h1>
      <div class="timeline">
        <div class="timeline-item" v-for="exp in experiences" :key="exp.id">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <h4>{{ exp.role }}</h4>
            <h5 class="text-muted">{{ exp.company }} | {{ exp.date }}</h5>
            <p>{{ exp.description }}</p>
            <ul>
              <li v-for="task in exp.tasks" :key="task">{{ task }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const experiences = [
    {
      id: 1,
      role: 'Desarrollador Full Stack',
      company: 'MilCajas',
      date: 'Enero 2023 - Actualidad',
      description: 'Desarrollo y mantenimiento de la plataforma de venta de cajas usadas.',
      tasks: [
        'Implementación de nuevas funcionalidades con Laravel y Vue.js.',
        'Optimización del rendimiento de consultas SQL.',
        'Integración de pasarelas de pago y sistemas de envío.',
      ],
    },
    {
      id: 2,
      role: 'Proyecto To-Do App',
      company: 'Proyecto Personal',
      date: 'Septiembre 2022 - Diciembre 2022',
      description: 'Aplicación para gestionar tareas con funcionalidades de autenticación y roles.',
      tasks: [
        'Desarrollo backend con Django.',
        'Creación de un sistema de autenticación personalizado.',
        'Diseño frontend responsivo con Bootstrap.',
      ],
    },
    {
      id: 3,
      role: 'Ciclo DAM',
      company: 'Centro de Formación',
      date: '2020 - 2022',
      description: 'Formación profesional en desarrollo de aplicaciones multiplataforma.',
      tasks: [
        'Proyectos académicos en Java, Kotlin y SQL.',
        'Desarrollo de una app móvil para gestión de inventarios.',
        'Prácticas profesionales en el sector tecnológico.',
      ],
    },
  ];
  </script>
  
  <style scoped>
  .timeline {
    position: relative;
    margin: 2rem 0;
    padding: 0;
    list-style: none;
  }
  
  .timeline-item {
    position: relative;
    margin-bottom: 2rem;
  }
  
  .timeline-dot {
    position: absolute;
    left: 0;
    top: 0;
    width: 20px;
    height: 20px;
    background-color: #007bff;
    border-radius: 50%;
    transform: translateX(-50%);
  }
  
  .timeline-content {
    margin-left: 40px;
    padding: 1rem;
    border-left: 3px solid #007bff;
    background-color: #f8f9fa;
    border-radius: 0.25rem;
  }
  
  .timeline-content h4 {
    margin-bottom: 0.5rem;
  }
  
  .timeline-content h5 {
    margin-bottom: 0.5rem;
    font-weight: normal;
    font-size: 0.9rem;
  }
  
  .timeline-content p {
    margin-bottom: 0.5rem;
  }
  </style>
  