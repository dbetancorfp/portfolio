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
import ProyectoCard from "./TarjetaProyecto.vue";
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
<!-- <template>
  <section class="proyectos">
    <h2>{{ $t('project') }}</h2>
    <div class="grid">
      <TarjetaProyecto
        v-for="(proyecto, index) in proyectos"
        :key="index"
        :proyecto="proyecto"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TarjetaProyecto from '@/components/TarjetaProyecto.vue';
import { Proyecto } from '@/types';
import { useI18n } from 'vue-i18n'; 

export default defineComponent({
  name: 'Proyectos',
  components: {
    TarjetaProyecto,
  },
  setup() {
    const { t } = useI18n();

    const proyectos = [
      {
        title: t('project1.title'),
        description: t('project1.description'),
       link: "https://github.com/Shulkiora8/LOL",
      },
      {
        title: t('project2.title'),
        description: t('project2.description'),
        link: "https://github.com/Shulkiora8/Poketrafico"
      },
    ];

    return { proyectos };
  },
});
</script>

<style scoped>
.proyectos {
  padding: 32px;
}
.grid {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
</style> -->
