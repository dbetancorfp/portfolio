<template>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ card.title }}</h5>
        <p class="card-text">{{ card.description }}</p>
        <a :href="card.link" class="btn btn-primary">Ver proyecto</a>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'TarjetaProyecto',
    props: {
      card: {
        type: Object,
        required: true,
      },
    },
  });
  </script>