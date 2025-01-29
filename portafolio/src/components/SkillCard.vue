<template>
  <div class="card shadow-sm">
    <div class="card-body text-center">
      <h5 class="card-title text-primary">{{ description }}</h5>
      <p class="card-text text-muted">{{ text }}</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
      description: {
          type: String,
          required: true,
      },
      ruta: {
          type: String,
          required: true,
      },
      text: {
          type: String,
          required: true,
      }
  },
};
</script>

<style scoped>
.card {
  max-width: 320px;
  transition: transform 0.3s ease-in-out;
}

.card:hover {
  transform: translateY(-5px);
}
</style>