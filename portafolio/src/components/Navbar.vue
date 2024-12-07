<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Portafolio</a>
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
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="about">{{ $t('about') }}</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="projects">{{ $t('projects.title') }}</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="skills">{{ $t('skills') }}</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="experience">{{ $t('experience') }}</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="contact">{{ $t('contact') }}</router-link>
            </li>
          </ul>

          <!-- Desplegable para cambiar idioma -->
          <div class="dropdown">
            <button
              class="btn btn-outline-secondary dropdown-toggle"
              type="button"
              id="languageDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              🌐 {{ currentLang === 'en' ? 'English' : 'Español' }}
            </button>
            <ul class="dropdown-menu" aria-labelledby="languageDropdown">
              <li>
                <button class="dropdown-item" @click="changeLanguage('en')">English</button>
              </li>
              <li>
                <button class="dropdown-item" @click="changeLanguage('es')">Español</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

    <!-- Espaciado para evitar que el contenido quede detrás del navbar -->
    <div class="mt-5 pt-3"></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter, useRoute } from 'vue-router'
// Extraer locale y t desde useI18n
const { locale, t } = useI18n()
const router = useRouter()
const route = useRoute()
// Cuando cambie route.params.lang se actualiza currentLang, cambiando de idioma
const currentLang = computed(() => route.params.lang || 'es')
const changeLanguage = (lang: string) => {
  console.log('funciona')
  if (locale.value !== lang) {
    locale.value = lang // Actualiza el idioma en Vue I18n
    localStorage.setItem('language', lang) // Guarda el idioma en localStorage
    router.push({ name: route.name, params: { ...route.params, lang } }) // Actualiza la URL
  }
}
</script>

<style scoped>
/* Ajustar el espaciado superior para el contenido dinámico */
.mt-5 {
  margin-top: 4rem; /* Ajusta el valor según la altura del navbar */
}
</style>
