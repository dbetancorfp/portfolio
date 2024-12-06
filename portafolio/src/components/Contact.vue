<template>
  <section id="contact" class="contact-container">
    <h2>{{ $t('contact') }}</h2>

    <!-- Información de contacto -->
    <div class="contact-info">
      <p>
        <strong>{{ $t('name') }}:</strong> Aday
      </p>
      <p>
        <strong>{{ $t('email') }}:</strong>
        <a href="mailto:your.email@example.com">your.email@example.com</a>
      </p>
      <p>
        <strong>{{ $t('phone') }}:</strong> +123 456 789
      </p>
    </div>

    <!-- Redes sociales -->
    <div class="social-media">
      <h3>{{ $t('followMe') }}</h3>
      <div class="social-links">
        <a href="https://twitter.com/your_username" target="_blank" class="social-link">
          <i class="bi bi-twitter-x"></i>
        </a>
        <a href="https://www.linkedin.com/in/your_username" target="_blank" class="social-link">
          <i class="bi bi-linkedin"></i>
        </a>
        <a href="https://github.com/your_username" target="_blank" class="social-link">
          <i class="bi bi-github"></i>
        </a>
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
/* Estilos de la página de contacto */
.contact-container {
  padding: 3rem;
  text-align: center;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 2rem auto;
}

.contact-container h2 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
}

.contact-info {
  font-size: 1.2rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 2rem;
}

.contact-info p {
  margin: 0.8rem 0;
}

.contact-info a {
  color: #007bff;
  text-decoration: none;
}

.contact-info a:hover {
  text-decoration: underline;
}

.social-media {
  margin-top: 3rem;
}

.social-media h3 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.social-link {
  display: inline-block;
}

.social-icon {
  width: 40px;
  height: 40px;
}

@media (min-width: 768px) {
  .contact-container {
    padding: 4rem;
  }
}
</style>
