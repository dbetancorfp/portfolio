<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div class="container-fluid">
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
              <router-link class="nav-link" to="/about">{{ $t('navbar.about') }}</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/projects">{{ $t('navbar.projects') }}</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/skills">{{ $t('navbar.skills') }}</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/experience">{{ $t('navbar.experience') }}</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">{{ $t('navbar.contact') }}</router-link>
            </li>
          </ul>
          <button @click="switchLanguage" class="btn btn-outline-secondary ms-auto">
            {{ currentLanguage === 'es' ? $t('navbar.switchToEnglish') : $t('navbar.switchToSpanish') }}
          </button>
        </div>
      </div>
    </nav>

   
    <div class="mt-5 pt-3"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
const currentLanguage = ref(locale.value);

const switchLanguage = () => {
  currentLanguage.value = currentLanguage.value === 'es' ? 'en' : 'es';
  locale.value = currentLanguage.value; 
};
</script>

<style scoped>

.mt-5 {
  margin-top: 4rem; 
}
</style>