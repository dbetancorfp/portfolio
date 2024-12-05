<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <form @submit.prevent="submitForm">
                    <div class="form-group">
                        <label for="name">Name:</label>
                        <input type="text" id="name" v-model="name" class="form-control" required />
                    </div>
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input type="email" id="email" v-model="email" class="form-control" required />
                    </div>
                    <div class="form-group">
                        <label for="message">Message:</label>
                        <textarea id="message" v-model="message" class="form-control" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary mt-3">Submit</button>
                </form>
            </div>
        </div>

        <!-- Toast de confirmación -->
        <div class="toast-container position-fixed bottom-0 end-0 p-3" style="z-index: 1055" aria-live="polite"
            aria-atomic="true">
            <div class="toast show" :class="toastClass" role="alert" aria-live="assertive" aria-atomic="true"
                v-if="showToast">
                <div class="toast-header">
                    <strong class="me-auto">Notification</strong>
                    <button type="button" class="btn-close" @click="showToast = false" aria-label="Close"></button>
                </div>
                <div class="toast-body">
                    {{ toastMessage }}
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from "vue";
import { messageCollection } from "../firebase.js";
import { addDoc } from "firebase/firestore";

// Variables reactivas
const name = ref("");
const email = ref("");
const message = ref("");
const showToast = ref(false); // Controla si el toast se muestra
const toastMessage = ref(""); // Mensaje del toast
const toastClass = ref("bg-success text-white"); // Clase dinámica para el estilo del toast

// Función para enviar el formulario
async function submitForm() {
    try {
        // Guardar datos en Firestore
        await addDoc(messageCollection, {
            name: name.value,
            email: email.value,
            message: message.value,
        });

        // Limpiar campos
        name.value = "";
        email.value = "";
        message.value = "";

        // Mostrar el toast de éxito
        toastMessage.value = "Your message has been sent successfully!";
        toastClass.value = "bg-success text-white";
        showToast.value = true;

        // Ocultar el toast después de 3 segundos
        setTimeout(() => {
            showToast.value = false;
        }, 3000);
    } catch (error) {
        console.error("Error sending message:", error);

        // Mostrar el toast de error
        toastMessage.value = "An error occurred while sending your message.";
        toastClass.value = "bg-danger text-white";
        showToast.value = true;

        // Ocultar el toast después de 3 segundos
        setTimeout(() => {
            showToast.value = false;
        }, 3000);
    }
}
</script>  