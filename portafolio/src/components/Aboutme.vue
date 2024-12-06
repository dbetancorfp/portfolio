<template>
  <section id="about" class="about-container">
    <h2 class="about-title">{{ $t('about') }}</h2>
    <div class="about-content">
      <!-- Imagen de perfil -->
      <div class="about-image">
        <img :src="$t('image')" alt="Foto de Aday" class="profile-picture" />
      </div>

      <!-- Información personal -->
      <div class="about-text">
        <h3>{{ $t('content') }}</h3>
        <p>
          {{ $t('description') }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

// Configuración de Vue I18n
const { t } = useI18n()
</script>

<style scoped>
/* Estilos específicos para el componente */
.about-container {
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 2rem auto;
  text-align: center;
}

.about-title {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
}

.about-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.about-image {
  flex-shrink: 0;
}

.profile-picture {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #ddd;
}

.about-text {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
}

.about-text h3 {
  font-size: 1.5rem;
  color: #222;
}

@media (min-width: 768px) {
  .about-content {
    flex-direction: row;
    align-items: flex-start;
    text-align: left;
  }

  .about-image {
    margin-right: 1.5rem;
  }
}
</style>
