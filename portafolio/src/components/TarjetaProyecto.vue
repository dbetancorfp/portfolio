<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { Proyecto } from './types/type.ts'

export default defineComponent({
  name: 'TarjetaProyecto',
  props: {
    proyecto: {
      type: Object as PropType<Proyecto>,
      required: true,
    },
  },
})
</script>

<template>
  <div class="tarjeta-proyecto">
    <h3>{{ proyecto.title }}</h3>
    <p>{{ proyecto.description }}</p>
    <a :href="proyecto.link" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
      {{ $t('projects.viewMore') }}
    </a>
  </div>
</template>

<style scoped>
/* Estilos aquí */
</style>
