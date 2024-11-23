<script setup>

</script>

<template>
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none fs-3">
        <i class="bi bi-file-earmark-person"></i>Jesús Lugo
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item"><RouterLink to="/about" class="nav-link">Sobre mi</RouterLink></li>
        <li class="nav-item"><RouterLink to="/projects" class="nav-link">Proyectos</RouterLink></li>
        <li class="nav-item"><RouterLink to="/skills" class="nav-link">Habilidades</RouterLink></li>
        <li class="nav-item"><RouterLink to="/experience" class="nav-link">Experiencia</RouterLink></li>
        <li class="nav-item"><RouterLink to="/contact" class="nav-link">Contacto</RouterLink></li>
      </ul>
    </header>
</template>

<style scoped>

</style>