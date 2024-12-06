<script setup lang="ts">
import Navbar from './components/Navbar.vue'
</script>
<template>
  <Navbar></Navbar>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"
    rel="stylesheet"
  />
  <!-- Semuestra la navegación de router -->
  <main>
    <router-view />
  </main>
</template>

<style>
/* Estilos adicionales si se requieren */
</style>
