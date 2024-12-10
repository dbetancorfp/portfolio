<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#">Portafolio</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/sobremi">{{ $t("sobreMi.title") }}</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/proyectos">{{ $t("proyectos.title") }}</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/habilidades">{{ $t("habilidades.title") }}</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/experiencia">{{ $t("experiencia.title") }}</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contacto">{{ $t("contacto.title") }}</router-link>
            </li>
          </ul>
          <!-- Botón para cambiar de idioma -->
          <button @click="cambiarIdioma" class="btn btn-outline-secondary ms-2">
            {{ idiomaActual === 'es' ? 'English' : 'Español' }}
          </button>
        </div>
      </div>
    </nav>
  </template>
  
  <script lang="ts">

  import { defineComponent, computed } from 'vue';
  
  import { useI18n } from 'vue-i18n';
  
  
  export default defineComponent({
  
    name: 'NavBar',
  
    setup() {
  
      const { locale } = useI18n(); // Obtener el locale actual
  
  
      const cambiarIdioma = () => {
  
        // Cambiar el idioma entre español e inglés
  
        locale.value = locale.value === 'es' ? 'en' : 'es';
  
      };
  
  
      // Usar computed para que idiomaActual sea reactivo
  
      const idiomaActual = computed(() => locale.value);
  
  
      return {
  
        cambiarIdioma,
  
        idiomaActual, // Retornar el idioma actual
  
      };
  
    },
  
  });
  
  </script>
  
  
  <style scoped>
  </style>