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
        <a href="mailto:your.email@example.com"> aday18005@gmail.com</a>
      </p>
      <p>
        <strong>{{ $t('phone') }}:</strong> +34 603-56-88-59
      </p>
    </div>

    <!-- Formulario de contacto -->
    <div class="contact-form">
      <h3>{{ $t('sendMessage') }}</h3>
      <form @submit.prevent="">
        <div class="form-group">
          <label for="name">{{ $t('name') }}</label>
          <input v-model="form.name" type="text" id="name" required />
        </div>

        <div class="form-group">
          <label for="email">{{ $t('email') }}</label>
          <input v-model="form.email" type="email" id="email" required />
        </div>

        <div class="form-group">
          <label for="subject">{{ $t('subject') }}</label>
          <input v-model="form.subject" type="text" id="subject" required />
        </div>

        <div class="form-group">
          <label for="message">{{ $t('message') }}</label>
          <textarea v-model="form.message" id="message" required></textarea>
        </div>

        <button type="submit" class="btn-submit">{{ $t('send') }}</button>
      </form>
      <p v-if="successMessage" class="success-message">{{ $t('messageSent') }}</p>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
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
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
// Importar Firebase y configurar Firestore
// import { getFirestore, collection, addDoc } from 'firebase/firestore'
// import { getApp } from 'firebase/app'

// Configuración de Firebase
// const app = getApp()
// const db = getFirestore(app)

// Configuración de Vue I18n
const { t } = useI18n()

// Datos del formulario
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const successMessage = ref(false)
const errorMessage = ref('')

// Función para enviar el mensaje
// const sendMessage = async () => {
//   try {
//     // Guardar el mensaje en Firestore
//     await addDoc(collection(db, 'messages'), {
//       name: form.value.name,
//       email: form.value.email,
//       subject: form.value.subject,
//       message: form.value.message,
//       timestamp: new Date(),
//     })
//     successMessage.value = true
//     form.value = { name: '', email: '', subject: '', message: '' } // Limpiar el formulario
//   } catch (error) {
//     errorMessage.value = t('errorSendingMessage') || 'Error sending message'
//   }
// }
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

/* Estilos del formulario */
.contact-form {
  margin-top: 2rem;
}

.contact-form h3 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.contact-form .form-group {
  margin-bottom: 1.2rem;
}

.contact-form label {
  display: block;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 0.8rem;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.contact-form button {
  padding: 0.8rem 2rem;
  font-size: 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.contact-form button:hover {
  background-color: #0056b3;
}

.success-message {
  color: green;
  margin-top: 1rem;
}

.error-message {
  color: red;
  margin-top: 1rem;
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
