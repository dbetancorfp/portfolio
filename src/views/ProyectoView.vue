<template>
  <div class="container mt-4">
    <h1>{{ $t('PORTFOLIO') }}</h1>
    <div class="row">
      <TarjetaProyecto
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import TarjetaProyecto from '../components/TarjetaProyecto.vue';
import dictionary from '../diccionario.js'; // Asegúrate de que la ruta sea correcta

const { locale } = useI18n();
const projects = ref([]);

onMounted(() => {
  // Cargar los proyectos desde el diccionario según el idioma actual
  projects.value = dictionary[locale.value].PROJECTS_LIST;
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