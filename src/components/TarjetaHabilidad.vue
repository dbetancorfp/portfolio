<!-- src/components/TarjetaHabilidad.vue -->
<template>
    <div class="tarjeta-habilidad">
      <img :src="habilidad.logo" alt="Logo" class="logo" />
      <h3>{{ habilidad.name }}</h3>
      <p>{{ habilidad.description }}</p>
      <div class="nivel">
        <span v-for="n in habilidad.level" :key="n" class="nivel-indicador">★</span>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'TarjetaHabilidad',
    props: {
      habilidad: {
        type: Object,
        required: true,
      },
    },
  });
  </script>
  
  <style scoped>
  .tarjeta-habilidad {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    margin: 16px;
    text-align: center;
  }
  .logo {
    width: 50px;
    height: 50px;
  }
  .nivel {
    margin-top: 8px;
  }
  .nivel-indicador {
    color: gold;
  }
  </style>