<template>
  <section id="projects" class="py-5 bg-light">
    <div class="container">
      <h2 class="text-center mb-5 fw-bold">{{ $t('projects') }}</h2>
      <div class="row g-4">
        <div v-for="(project, index) in  projects " :key="index">
          <ProyectoCard :title=project.title
           :description=project.description
          :link=project.link
           />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import ProyectoCard from "./ProyectoCard.vue";
import dataEn from "../locales/en.json";
import dataEs from "../locales/es.json";
import { useI18n } from 'vue-i18n';



export default {
  components: {
    ProyectoCard,
  },
  data() {
    const { locale } = useI18n();
    let cards;
    if (locale.value == "es") {
      cards = dataEs.cards;
    } else {
      cards = dataEn.cards;
    }
    return {
      projects: cards,
    };
  },
};
</script>

<style scoped>
#projects h2 {
  font-size: 2.5rem;
  color: #333;
}
</style>