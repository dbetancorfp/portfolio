<template>

  <div class="container mt-5">
    <h1 class="text-center mb-4">{{ $t("sobreMi.title") }}</h1>
    <div class="text-center mb-4">
      <img src="../assets/img/Foto1.jpeg" alt="Foto de perfil" class="img-fluid rounded-circle" />
    </div>
    <p class="lead text-center">{{ $t("sobreMi.description") }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SobreMi',
});
</script>