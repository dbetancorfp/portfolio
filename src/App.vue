<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { ref, computed } from 'vue';

const { locale } = useI18n();
const currentLanguage = computed(() => (locale.value === 'es' ? 'Español' : 'English'));

const changeLanguage = (lang: string) => {
  locale.value = lang; // Cambiar idioma
  localStorage.setItem('language', lang); // Guardar preferencia en localStorage
};
</script>

<template>

<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <router-link to="/" class="navbar-brand">Moises</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/" class="nav-link">About Me</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/projects" class="nav-link">Projects</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/skills" class="nav-link">Skills</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/experience" class="nav-link">Experience</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="nav-link">Contact</router-link>
        </li>
      </ul>
    </div>
    
    <div class="dropdown ms-auto">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="languageDropdown"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {{ currentLanguage }}
      </button>
      <ul class="dropdown-menu" aria-labelledby="languageDropdown">
        <li>
          <button class="dropdown-item" @click="changeLanguage('es')">Español</button>
        </li>
        <li>
          <button class="dropdown-item" @click="changeLanguage('en')">English</button>
        </li>
      </ul>
    </div>

  </div>
</nav>

<router-view></router-view>
</template>
