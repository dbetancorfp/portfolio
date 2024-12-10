<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">{{ $t("experiencia.title") }}</h1>
    <p class="lead text-center mb-4">{{ $t("experiencia.description") }}</p>
    <div class="text-center">
      <a 
        href="../assets/docs/CV César .pdf" 
        class="btn btn-primary btn-lg" 
        download
      >
        Descargar CV
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Experiencia',
});
</script>

