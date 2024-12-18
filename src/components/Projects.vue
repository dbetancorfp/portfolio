<template>
  <section id="projects" class="py-5 bg-light">
    <div class="container">
      <h2 class="text-center mb-5 fw-bold">{{ $t('projects') }}</h2>
      <div class="row g-4">
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3"
          v-for="(project, index) in projects"
          :key="index"
        >
          <TarjetaProyecto
            :title="project.title"
            :description="project.description"
            :link="project.link"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TarjetaProyecto from "./TarjetaProyecto.vue";
import Card from "@/locales/es.json";
import Card2 from "@/locales/en.json";

export default {
  components: {
    TarjetaProyecto,
  },
  data() {
    const currentLang = this.$i18n.locale;
    let mensaje = '';

    if (currentLang === 'es') {
      mensaje = Card.cards
    } else if (currentLang === 'en') {
      mensaje = Card2.cards
    }

    return {
      projects: mensaje,
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
