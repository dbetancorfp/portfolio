<template>
  <div class="card mb-4">
    <div class="card-body">
      <h5 class="card-title">{{ project.name }}</h5>
      <p class="card-text">{{ project.description }}</p>
      <p class="card-text"><small class="text-muted">{{ project.language }}</small></p>
      <a :href="project.url" class="btn btn-primary" target="_blank">View Project</a>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 5px;
}
.card-title {
  font-size: 1.25rem;
  font-weight: bold;
}
.card-text {
  margin-bottom: 0.5rem;
}
</style>