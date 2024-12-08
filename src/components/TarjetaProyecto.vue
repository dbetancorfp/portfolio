<template>
    <div class="card h-100 shadow-sm">
      <div class="card-body text-center">
        <h5 class="card-title fw-bold">{{ title }}</h5>
        <p class="card-text text-muted">{{ description }}</p>
        <a :href="link" target="_blank" class="btn btn-primary mt-3">Ver más</a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      link: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .card {
    border-radius: 15px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
  </style>
  