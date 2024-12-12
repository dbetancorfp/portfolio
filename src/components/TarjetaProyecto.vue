<!-- src/components/TarjetaProyecto.vue -->
<template>
    <div class="tarjeta-proyecto">
      <h3>{{ proyecto.title }}</h3>
      <p>{{ proyecto.description }}</p>
      <a :href="proyecto.link" target="_blank">Ver Proyecto</a>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'TarjetaProyecto',
    props: {
      proyecto: {
        type: Object,
        required: true,
      },
    },
  });
  </script>
  
  <style scoped>
  .tarjeta-proyecto {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    margin: 16px;
    text-align: center;
  }
  </style>