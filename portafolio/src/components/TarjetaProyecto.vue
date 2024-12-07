<template>
  <div class="project-card">
    <h3>{{ project.title }}</h3>
    <p>{{ project.description }}</p>
    <a :href="project.link" target="_blank" rel="noopener noreferrer">
      {{ $t('projects.viewMore') }}
    </a>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

// Definimos la estructura del proyecto.
interface Project {
  title: string
  description: string
  link: string
}

// Recibimos las propiedades desde el componente padre.
defineProps<{
  project: Project
}>()
</script>

<style scoped>
.project-card {
  border: 1px solid #ccc;
  padding: 1.5rem;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
}

.project-card:hover {
  transform: scale(1.02);
}

.project-card h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.project-card p {
  font-size: 1rem;
  color: #666;
  margin-bottom: 1rem;
}

.project-card a {
  font-size: 1rem;
  color: #007bff;
  text-decoration: none;
}

.project-card a:hover {
  text-decoration: underline;
}
</style>
