<template>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"
    rel="stylesheet"
  />
  <section>
    <h2>{{ $t('skills.title') }}</h2>
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <TarjetaHabilidad
        v-for="(tecnologia, index) in habilidades"
        :key="index"
        :habilidad="tecnologia.nombre"
        :descripcion="tecnologia.descripcion"
        :icono="tecnologia.icono"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import TarjetaHabilidad from './TarjetaHabilidad.vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'Habilidades',
  components: {
    TarjetaHabilidad,
  },
  setup() {
    const { t } = useI18n()

    const habilidades = computed(() => [
      {
        nombre: t('skills.MySQL.name'),
        descripcion: t('skills.MySQL.description'),
        icono: t('skills.MySQL.icon'),
      },
      {
        nombre: t('skills.Python.name'),
        descripcion: t('skills.Python.description'),
        icono: t('skills.Python.icon'),
      },
      {
        nombre: t('skills.HTML.name'),
        descripcion: t('skills.HTML.description'),
        icono: t('skills.HTML.icon'),
      },
    ])

    return {
      habilidades,
      t,
    }
  },
})
</script>

<style scoped>
h2 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 2rem;
  font-weight: bold;
}

.row {
  margin-top: 20px;
}
</style>
