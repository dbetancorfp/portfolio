<script setup>
  import { useI18n } from "vue-i18n";
  
  const { locale, t } = useI18n();    
  
  const changeLanguage = (lang) => {
  locale.value = lang;
  };
</script>

<template>
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none fs-3">
        <i class="bi bi-file-earmark-person"></i>Jesús Lugo
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item"><RouterLink to="/about" class="nav-link">{{ $t("aboutme") }}</RouterLink></li>
        <li class="nav-item"><RouterLink to="/projects" class="nav-link">{{ $t("projects") }}</RouterLink></li>
        <li class="nav-item"><RouterLink to="/skills" class="nav-link">{{ $t("skills") }}</RouterLink></li>
        <li class="nav-item"><RouterLink to="/experience" class="nav-link">{{ $t("experience") }}</RouterLink></li>
        <li class="nav-item"><RouterLink to="/contact" class="nav-link">{{ $t("contact") }}</RouterLink></li>
      </ul>

      <div class="dropdown">
        <button class="btn btn-outline-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="bi bi-globe-americas"></i>
        </button>
        <ul class="dropdown-menu">
          <li><button class="dropdown-item" @click="changeLanguage('en')">English</button></li>
          <li><button class="dropdown-item" @click="changeLanguage('es')">Español</button></li>
        </ul>
      </div>
    </header>
</template>

<style scoped>

</style>