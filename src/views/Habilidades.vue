<template>
  <div class="container mt-4">
    <h1>{{ $t('SKILL') }}</h1>
    <div class="row">
      <TarjetaHabilidad
        v-for="skill in skills"
        :key="skill.id"
        :habilidad="skill"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import TarjetaHabilidad from '../components/TarjetaHabilidad.vue';
import dictionary from '../diccionario.js'; // Asegúrate de que la ruta sea correcta

const { locale } = useI18n();
const skills = ref([]);

// Función para cargar las habilidades según el idioma actual
const loadSkills = () => {
  skills.value = dictionary[locale.value].SKILLS_LIST;
};

// Cargar las habilidades inicialmente
loadSkills();

// Observa los cambios en el locale y actualiza las habilidades
watch(locale, (newLocale) => {
  loadSkills();
});
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: auto;
}
.row {
  display: flex;
  flex-wrap: wrap;
}
</style>