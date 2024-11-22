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
              <router-link class="nav-link" to="aboutme">{{ $t("aboutme") }}</router-link>
              <!-- <router-link class="nav-link" to="/about">Sobre mí</router-link> -->
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/projects"
                >Proyectos</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/skills"
                >Habilidades</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/experience"
                >Experiencia</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">Contacto</router-link>
            </li>
            <button @click="changeLanguage('en')">English</button>
            <button @click="changeLanguage('es')">Español</button>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Espaciado para evitar que el contenido quede detrás del navbar -->
    <div class="mt-5 pt-3"></div>
  </div>
</template>

<script setup>
  import { useI18n } from "vue-i18n";
 // Extraer locale y t desde useI18n
 const { locale, t } = useI18n(); // Esta t es la que usamos en el Template como $t
 // Cambiar el idioma dinámicamente
 const changeLanguage = (lang) => {
 locale.value = lang;
 };
</script>

<style scoped>
/* Ajustar el espaciado superior para el contenido dinámico */
.mt-5 {
  margin-top: 4rem; /* Ajusta el valor según la altura del navbar */
}
</style>
