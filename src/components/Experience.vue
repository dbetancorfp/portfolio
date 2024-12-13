<template>
    
  </template>
  
  <script lang="ts">
  export default {
    name: 'Home',
  };
  </script>
  
  <style scoped>
  .hero {
    position: relative;
    height: 100vh; 
    background-color: #333; 
  }
  
  .hero h1 {
    text-transform: uppercase;
    color: white;
    background: url(../../public/assets/wallhaven.png);
    -webkit-text-fill-color: transparent;
    background-clip: text;
    background-position: center;
    background-size:cover;
    -webkit-text-stroke: 1px white;
  
  }
  
  .hero p {
    font-size: 1.5rem; 
    animation-duration: 1s;
  }
  
  .hero a {
    font-size: 1.2rem;
    padding: 1rem 2rem;
    background-color: #ffc107;
    color: #333;
    transition: background-color 0.3s;
  }
  
  .hero a:hover {
    background-color: #e0a800;
    color: #fff;
  }
  
  
  .overlay {
    z-index: 1;
  }
  
  
  .container {
    z-index: 2;
    position: relative;
    text-align: center;
  }
  </style>
  
  <!-- Asegúrate de incluir Animate.css en tu proyecto para las animaciones -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
  