<template>
    <div class="card skill-card">
      <div class="card-img-container">
        <img :src="skill.image" class="card-img-top" alt="Skill Image" />
      </div>
      <div class="card-body text-center">
        <h5 class="card-title">{{ skill.name }}</h5>
        <p class="card-text">{{ skill.description }}</p>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: "SkillCard",
    props: {
      skill: {
        type: Object,
        required: true,
      },
    },
  });
  </script>
  
  <style scoped>
  .card {
    border-radius: 12px; /* Bordes redondeados */
    background-color: #ffffff; /* Color de fondo claro para la tarjeta */
    border: none; /* Sin borde */
    overflow: hidden; /* Para evitar que la imagen sobresalga */
    padding: 20px; /* Espaciado interno */
    transition: transform 0.3s ease, box-shadow 0.3s ease; /* Transiciones suaves */
    margin-bottom: 20px; /* Margen inferior para separación entre tarjetas */
  }
  
  .card-img-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px; /* Altura fija para el contenedor de la imagen */
    margin-bottom: 15px; /* Margen inferior para separación */
  }
  
  .card-img-top {
    height: 100%; 
    width: auto; 
    max-width: 100%; 
    object-fit: contain; /* Mantener la proporción de la imagen */
  }
  
  .card-title {
    font-weight: 600;
    color: #333; /* Color del texto del título */
    margin: 10px 0; /* Margen superior e inferior para separación */
  }
  
  .card-text {
    font-size: 1rem;
    color: #666; /* Color del texto de la descripción */
    margin: 0; /* Sin margen para un mejor alineamiento */
  }
  
  .card:hover {
    transform: translateY(-5px); /* Efecto de elevación */
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2); /* Sombra más suave */
  }
  </style>