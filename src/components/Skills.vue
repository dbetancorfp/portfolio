<template>
  <div class="habilidades">
    <h2 class="text-center mb-4">{{ $t('skill') }}</h2>
    <div class="container">
      <div class="row">
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
          v-for="(habilidad, index) in habilidades "
          :key="index"
        >
          <TarjetaHabilidad
            :logo="habilidad.logo"
            :nombre="habilidad.nombre"
            :descripcion="habilidad.descripcion"
            :nivel="habilidad.nivel"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TarjetaHabilidad from "./TarjetaHabilidad.vue";
import habilidadesData from "@/locales/es.json";
import habilidadesData2 from "@/locales/en.json";
export default {
  components: {
    TarjetaHabilidad,
  },
  data() {
    const currentLang = this.$i18n.locale;
    let mensaje = '';

    if (currentLang === 'es') {
      mensaje = habilidadesData.habilidades
    } else if (currentLang === 'en') {
      mensaje = habilidadesData2.habilidades
    }

    return {
      habilidades: mensaje,
    };
  },
};

</script>

<style scoped>
.habilidades {
  padding: 20px;
}
</style>
