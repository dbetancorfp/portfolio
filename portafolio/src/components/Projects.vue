<template>
  <section id="projects">
    <h2>{{ $t('projects.title') }}</h2>
    <div class="project-list">
      <TarjetaProyecto v-for="(project, index) in projects" :key="index" :project="project" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import TarjetaProyecto from '@/components/TarjetaProyecto.vue'

const { t } = useI18n()

// Obtenemos los proyectos como un arreglo puro desde las traducciones.
const projects = t('projects.cards', []) as unknown as Array<{
  title: string
  description: string
  link: string
}>

// Debug para verificar que los datos son correctos.
console.log('Proyectos cargados:', projects)
</script>

<style scoped>
.project-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

h2 {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
}
</style>
