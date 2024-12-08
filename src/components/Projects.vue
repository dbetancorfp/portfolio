<template>
  <div>
    <h1>{{ $t("navbar.projects") }}</h1>
    <TarjetaProyecto />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TarjetaProyecto from "../components/TarjetaProyecto.vue";

export default defineComponent({
  name: "Proyectos",
  components: {
    TarjetaProyecto,
  },
});
</script>
