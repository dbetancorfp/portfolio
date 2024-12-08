<template>
  <div>
    <h1>{{ $t("navbar.skills") }}</h1>
    <div class="card-container">
      <TarjetaHabilidad v-for="(habilidad, key) in habilidades" :key="key" :habilidad="habilidad" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import TarjetaHabilidad from './TarjetaHabilidad.vue';
import { Habilidad } from '../types';
import pythonLogo from '../img/python.png';
import djangoLogo from '../img/django.png';
import javaLogo from '../img/java.png';
import vueLogo from '../img/vue.png';
import cssLogo from '../img/css.png';
import htmlLogo from '../img/html.png';
import bootLogo from '../img/boot.png';
import typeLogo from '../img/typescript.png';
import bashLogo from '../img/bash.png';

export default defineComponent({
  name: 'Habilidades',
  components: {
    TarjetaHabilidad,
  },
  setup() {
    const { t } = useI18n();
    const habilidades: Habilidad[] = [
      {
        name: t("habilidades[0].name"),
        description: t("habilidades[0].description"),
        level: 5,
        logo: pythonLogo, 
      },
      {
        name: t("habilidades[1].name"),
        description: t("habilidades[1].description"),
        level: 5,
        logo: djangoLogo, 
      },
      {
        name: t("habilidades[2].name"),
        description: t("habilidades[2].description"),
        level: 3,
        logo: javaLogo, 
      },
      {
        name: t("habilidades[3].name"),
        description: t("habilidades[3].description"),
        level: 3,
        logo: vueLogo, 
      },
      {
        name: t("habilidades[4].name"),
        description: t("habilidades[4].description"),
        level: 4,
        logo: cssLogo, 
      },
      {
        name: t("habilidades[5].name"),
        description: t("habilidades[5].description"),
        level: 5,
        logo:htmlLogo, 
      },
      {
        name: t("habilidades[6].name"),
        description: t("habilidades[6].description"),
        level: 5,
        logo: bootLogo, 
      },
      {
        name: t("habilidades[7].name"),
        description: t("habilidades[7].description"),
        level: 4,
        logo: typeLogo, 
      },
      {
        name: t("habilidades[8].name"),
        description: t("habilidades[8].description"),
        level: 4,
        logo: bashLogo, 
      },
    ];

    return {
      habilidades,
    };
  },
});
</script>

<style scoped>
.card-container {
  display: grid; 
  grid-template-columns: repeat(3, 1fr); 
  gap: 1rem; 
  justify-items: center; 
  margin: 0 auto; 
  max-width: 1200px; 
}
</style>