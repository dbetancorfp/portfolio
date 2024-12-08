<script setup>
import Card from './Card.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

console.log(t('cards')); // Verifica los datos de las tarjetas
</script>

<template>
  <div class="card-list">
    <Card
      v-for="(card, index) in (t('cards') || [])"
      :key="index"
      :title="card.title || ''"
      :description="card.description || ''"
      :link="card.link || ''"
    />
  </div>
</template>

<style scoped>
.card-list {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
}
</style>
