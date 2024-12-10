<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">{{ $t("contacto.title") }}</h1>
    <form @submit.prevent="enviarMensaje" class="shadow p-4 rounded">
      <div class="mb-3">
        <label for="name" class="form-label">{{ $t("contacto.form.name") }}</label>
        <input v-model="form.name" type="text" class="form-control" id="name" required />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">{{ $t("contacto.form.email") }}</label>
        <input v-model="form.email" type="email" class="form-control" id="email" required />
      </div>
      <div class="mb-3">
        <label for="message" class="form-label">{{ $t("contacto.form.message") }}</label>
        <textarea v-model="form.message" class="form-control" id="message" rows="4" required></textarea>
      </div>
      <button type="submit" class="btn btn-primary w-100">{{ $t("contacto.form.submit") }}</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { db } from '../firebase.js'; 
import { collection, addDoc } from 'firebase/firestore'; 

export default defineComponent({
  name: 'Contacto',
  setup() {
    const form = reactive({
      name: '',
      email: '',
      message: '',
    });

    const enviarMensaje = async () => {
      try {
        const mensajesRef = collection(db, 'mensajes');
        await addDoc(mensajesRef, form);
        alert('Mensaje enviado correctamente.');
        form.name = '';
        form.email = '';
        form.message = '';
      } catch (error) {
        console.error('Error al enviar el mensaje: ', error);
        alert('Error al enviar el mensaje. Por favor, inténtelo de nuevo.');
      }
    };

    return {
      form,
      enviarMensaje,
    };
  },
});
</script>