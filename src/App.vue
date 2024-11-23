<script setup>
  import Navbar from './components/Navbar.vue'
  import { useI18n } from "vue-i18n";
  // Extraer locale y t desde useI18n
  const { locale, t } = useI18n(); // Esta t es la que usamos en el Template como $t
  // Cambiar el idioma dinámicamente
  const changeLanguage = (lang) => {
  locale.value = lang;
  };
</script>

<template>
  <div class="container">
    <header>
      <Navbar/>
    </header>
    <main>
      <RouterView/>
    </main>
  </div>
</template>

<style scoped>

</style>
