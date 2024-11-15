<template>
  <Navbar></Navbar>
  <!-- Semuestra la navegación de router -->
  <main>
    <router-view /> 
  </main>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
</script>

<style>
/* Estilos adicionales si se requieren */
</style>
