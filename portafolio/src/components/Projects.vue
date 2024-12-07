<script lang="ts">
import { defineComponent, watch, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import TarjetaProyecto from './TarjetaProyecto.vue'

export default defineComponent({
  name: 'Proyectos',
  components: {
    TarjetaProyecto,
  },
  setup() {
    const { t, locale } = useI18n()

    // Estado reactivo para los proyectos
    const proyectos = ref([
      {
        title: t('projects.cards.0.title'), // Traducción del título
        description: t('projects.cards.0.description'), // Traducción de la descripción
        link: 'https://github.com/Ergwynt/supertodo',
      },
      {
        title: t('projects.cards.1.title'),
        description: t('projects.cards.1.description'),
        link: 'https://github.com/Miguelcg03/proyectobasededatos',
      },
    ])

    // Función para actualizar los proyectos
    const actualizarProyectos = () => {
      proyectos.value = [
        {
          title: t('projects.cards.0.title'),
          description: t('projects.cards.0.description'),
          link: 'https://github.com/Ergwynt/supertodo',
        },
        {
          title: t('projects.cards.1.title'),
          description: t('projects.cards.1.description'),
          link: 'https://github.com/Miguelcg03/proyectobasededatos',
        },
      ]
    }

    // Watch para detectar cambios en el idioma
    watch(
      () => locale.value, // Observar el cambio de idioma
      () => {
        // Actualizamos los proyectos al cambiar el idioma
        actualizarProyectos()
      },
    )

    return { proyectos, locale, t, actualizarProyectos }
  },
})
</script>

<template>
  <section class="proyectos bg-light" :key="locale.value">
    <div class="proyectos-header text-center bg-primary text-white py-5">
      <div class="container">
        <h1 class="display-4 mb-3">{{ $t('projects.title') }}</h1>
        <p class="lead">{{ $t('projects.description') }}</p>
      </div>
    </div>
    <div class="container py-5">
      <div class="row">
        <div class="col-md-6 col-lg-4 mb-4" v-for="(proyecto, index) in proyectos" :key="index">
          <TarjetaProyecto :proyecto="proyecto" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Estilo aquí */
</style>
