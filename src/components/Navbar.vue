<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div class="container-fluid"> {{ $t("portfolio") }}
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
              <router-link
                class="nav-link"
                v-bind:to="{ name: 'Aboutme', params: { lang: currentLang } }"
              >
                {{ $t("aboutme") }}
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                :to="{ name: 'Projects', params: { lang: currentLang } }"
              >
                {{ $t("projects") }}
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                :to="{ name: 'Skills', params: { lang: currentLang } }"
              >
                {{ $t("skills") }}
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                :to="{ name: 'Experience', params: { lang: currentLang } }"
              >
                {{ $t("experience") }}
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                :to="{ name: 'Contact', params: { lang: currentLang } }"
              >
                {{ $t("contact") }}
              </router-link>
            </li>
            <select  @change="changeLanguage($event.target.value)" class="form-select form-select-sm" aria-label="Small select example" style="width: 150px;">
              <option value="en" :selected="currentLang === 'en'">English</option>
              <option value="es" :selected="currentLang === 'es'">Español</option>
            </select>
          </ul>
        </div>
      </div>
    </nav>
    <!-- Espaciado para evitar que el contenido quede detrás del navbar -->
    <div class="mt-5 pt-3"></div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter, useRoute } from "vue-router";

// Extraer locale y t desde useI18n
const { locale, t } = useI18n();
const router = useRouter();
const route = useRoute();

// Cuando cambie route.params.lang se actualiza currentLang, cambiando de idioma
const currentLang = computed(() => route.params.lang || "es");

// Cambiar el idioma dinámicamente
const changeLanguage = (lang) => {
  if (locale.value !== lang) {
    locale.value = lang; // Actualiza el idioma en Vue I18n
    localStorage.setItem("language", lang); // Guarda el idioma en localStorage
    router.push({ name: route.name, params: { ...route.params, lang } }); // Actualiza la URL
  }
};
</script>

<style scoped>
/* Ajustar el espaciado superior para el contenido dinámico */
.mt-5 {
  margin-top: 4rem; /* Ajusta el valor según la altura del navbar */
}
</style>
