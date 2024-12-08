<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

// Definir las propiedades del componente
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="card">
    <!-- Usar la función t() para traducir el título y la descripción -->
    <h2>{{ t(title) }}</h2>
    <p>{{ t(description) }}</p>
    <a :href="link" class="card-link">{{ t('viewMore') }}</a>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  max-width: 300px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.card h2 {
  font-size: 1.5rem;
  margin: 0 0 8px;
}
.card p {
  font-size: 1rem;
  margin: 0 0 12px;
}
.card-link {
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
}
.card-link:hover {
  text-decoration: underline;
}
</style>
