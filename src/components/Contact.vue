<template>
  <div class="container py-5">
    <h1 class="text-center mb-5">Contáctame</h1>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <form @submit.prevent="sendMessage">
          <div class="mb-3">
            <label for="name" class="form-label">Nombre</label>
            <input
              type="text"
              id="name"
              v-model="form.name"
              class="form-control"
              placeholder="Tu nombre"
              required
            />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Correo electrónico</label>
            <input
              type="email"
              id="email"
              v-model="form.email"
              class="form-control"
              placeholder="Tu correo"
              required
            />
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Mensaje</label>
            <textarea
              id="message"
              v-model="form.message"
              class="form-control"
              rows="5"
              placeholder="Escribe tu mensaje"
              required
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary w-100">Enviar</button>
        </form>
        <div
          v-if="successMessage"
          class="alert alert-success mt-4"
          role="alert"
        >
          {{ successMessage }}
        </div>
        <div v-if="errorMessage" class="alert alert-danger mt-4" role="alert">
          {{ errorMessage }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/friebaseConfig";

const form = ref({
  name: "",
  email: "",
  message: "",
});

const successMessage = ref("");
const errorMessage = ref("");

const sendMessage = async () => {
  try {
    const docRef = await addDoc(collection(db, "messages"), {
      name: form.value.name,
      email: form.value.email,
      message: form.value.message,
      timestamp: new Date(),
    });
    successMessage.value = "Tu mensaje ha sido enviado con éxito.";
    errorMessage.value = "";
    form.value.name = "";
    form.value.email = "";
    form.value.message = "";
  } catch (error) {
    errorMessage.value =
      "Hubo un error al enviar el mensaje. Inténtalo de nuevo.";
    successMessage.value = "";
    console.error("Error al enviar mensaje:", error);
  }
};
</script>

<style scoped>
form {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
</style>
