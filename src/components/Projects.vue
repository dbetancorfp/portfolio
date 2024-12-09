<template>
    <div class="container py-5">
      <h1 class="text-center mb-5">Mis Proyectos</h1>
      <div class="row gy-4">
        <div class="col-md-6 col-lg-4" v-for="project in projects" :key="project.id">
          <div class="card h-100 shadow-sm">
            <img :src="project.image" class="card-img-top" :alt="project.title">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">{{ project.title }}</h5>
              <p class="card-text text-muted">{{ project.description }}</p>
              <p class="mt-auto">
                <strong>Tecnologías:</strong> {{ project.technologies.join(', ') }}
              </p>
              <div class="mt-3 d-flex justify-content-center">
                <a :href="project.repoLink" target="_blank" class="btn btn-primary btn-sm">
                  Ver Código
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const projects = [
    {
      id: 1,
      title: 'To-Do App',
      description: 'Una aplicación para gestionar tus tareas diarias con funcionalidades avanzadas.',
      technologies: [ 'Django', 'Bootstrap'],
      image: 'https://mala.ae/wp-content/uploads/2023/02/img.jpg',
      repoLink: 'https://github.com/tuusuario/todo-app',
      liveLink: 'https://todo-app-demo.com',
    },
    {
      id: 2,
      title: 'Pokedex App',
      description: 'Consulta información sobre Pokémon en una aplicación moderna e interactiva.',
      technologies: ['HTML', 'JS', 'Firebase'],
      image: 'https://mala.ae/wp-content/uploads/2023/02/img.jpg',
      repoLink: 'https://github.com/tuusuario/pokedex-app',
      liveLink: 'https://pokedex-app-demo.com',
    },
    {
      id: 3,
      title: 'MilCajas',
      description: 'Una plataforma para la venta de cajas usadas, optimizada para SEO.',
      technologies: ['HTML', 'Bootstrap'],
      image: 'https://mala.ae/wp-content/uploads/2023/02/img.jpg',
      repoLink: 'https://github.com/tuusuario/milcajas',
      liveLink: 'https://milcajas.com',
    },
    {
      id: 4,
      title: 'Portfolio',
      description: 'El portafolio que estás viendo ahora. Un proyecto personal para destacar mis habilidades.',
      technologies: ['Vue.js', 'Bootstrap'],
      image: 'https://mala.ae/wp-content/uploads/2023/02/img.jpg',
      repoLink: 'https://github.com/tuusuario/portfolio',
      liveLink: 'https://tuportfolio.com',
    },
  ];
  </script>
  
  <style scoped>
  .card {
    border-radius: 0.5rem;
  }
  .card img {
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    height: 200px;
    object-fit: cover;
  }
  </style>
  