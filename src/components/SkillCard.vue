<template>
    <div class="card h-100 shadow-sm">
      {{ skill}}
      <img :src="ruta" >
    </div>
  </template>
  
  <script lang="ts">
  export default {
    props: {
      skill: {
        type: String,
        required: true,
      },
      ruta:{
        type:String,
        required: true,
      }
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