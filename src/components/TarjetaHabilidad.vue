<template>

    <div class="card text-center">
      <img :src="card.logo" alt="Logo de la habilidad" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">{{ card.name }}</h5>
        <p class="card-text">{{ card.description }}</p>
      </div>
    </div>
  </template>
  
  
  <script lang="ts">
  
  import { defineComponent } from 'vue';
  
  
  export default defineComponent({
  
    name: 'TarjetaHabilidad',
  
    props: {
  
      card: {
  
        type: Object,
  
        required: true,
  
      },
  
    },
  
  });
  
  </script>