<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import ProjectCard from './ProyectCard.vue';
import dataEn from '../locales/en.json';
import dataEs from '../locales/es.json';

export default defineComponent({
  components: {
    ProjectCard,
  },
  data() {
    const { locale } = useI18n();
    return {
      projects: (locale.value === 'es' ? dataEs.projects.cards : dataEn.projects.cards) || [],
    };
  },
});
</script>

<template>
  <section id="projects" class="py-5 bg-light">
    <div class="container">
      <h2 class="text-center mb-5 fw-bold">{{ $t('projects.title') }}</h2>
      <p class="text-center mb-5">{{ $t('projects.description') }}</p>
      <div class="row g-4">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="col-md-4"
        >
          <ProjectCard
            :title="project.title"
            :description="project.description"
            :link="project.link"
            :viewMore="$t('projects.viewMore')"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Estilo aquí */
</style>