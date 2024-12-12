<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
const isEnglish = ref(locale.value === 'en');

const toggleLanguage = () => {
  isEnglish.value = !isEnglish.value;
  locale.value = isEnglish.value ? 'en' : 'es'; // Toggle between English and Spanish
};
</script>

<template>
    <nav class="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    <div class="container-fluid">
      <h3><b>{{ $t('PORTFOLIO') }}</b></h3>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto"> 
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/">{{ $t('HOME') }}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">{{ $t('ABOUTME') }}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Experiencia">{{ $t('EXPERIENCE') }}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Proyecto">{{ $t('PROJECTS') }}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Contacto">{{ $t('CONTACT') }}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Habilidades">{{ $t('SKILL') }}</router-link>
          </li>
        </ul>
        <div class="d-flex align-items-center"> 
          <label class="form-check form-switch me-2"> 
            <input class="form-check-input" type="checkbox" :checked="isEnglish" @change="toggleLanguage">
            <span class="form-check-label">{{ isEnglish ? 'EN' : 'ES' }}</span>
          </label>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
</style>