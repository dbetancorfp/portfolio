<template>
    <div class="container mt-5">
        <h2 class="text-center">{{ $t('contact.title') }}</h2>

        <!-- Formulario -->
        <form @submit.prevent="enviarFormulario" class="mt-4">
            <div class="mb-3">
                <label for="nombre" class="form-label">{{ $t('contact.form.nameLabel') }}</label>
                <input type="text" id="nombre" v-model="form.nombre" class="form-control"
                    :placeholder="$t('contact.form.namePlaceholder')" />
            </div>

            <div class="mb-3">
                <label for="correo" class="form-label">{{ $t('contact.form.emailLabel') }}</label>
                <input type="email" id="correo" v-model="form.correo" class="form-control"
                    :placeholder="$t('contact.form.emailPlaceholder')" />
            </div>

            <div class="mb-3">
                <label for="mensaje" class="form-label">{{ $t('contact.form.messageLabel') }}</label>
                <textarea id="mensaje" v-model="form.mensaje" class="form-control"
                    :placeholder="$t('contact.form.messagePlaceholder')" rows="4"></textarea>
            </div>

            <button type="submit" class="btn btn-primary">{{ $t('contact.form.submitButton') }}</button>
        </form>

        <!-- Toast de Bootstrap -->
        <div class="toast-container position-fixed top-0 end-0 p-3" v-if="showToast" :class="toastClass" role="alert"
            aria-live="assertive" aria-atomic="true">
            <div class="toast show">
                <div class="toast-body">
                    {{ toastMessage }}
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { reactive, ref } from "vue";
import { db, collection, addDoc } from "@/firebase"; // Importa Firestore

// Estado del formulario
const form = reactive({
    nombre: "",
    correo: "",
    mensaje: "",
});

// Estado del Toast
const showToast = ref(false);
const toastMessage = ref("");
const toastClass = ref("bg-success text-white"); // Estilo del Toast

// Función para enviar el formulario
async function enviarFormulario() {
    try {
        // Guardar los datos en Firebase Firestore
        await addDoc(collection(db, "Mensajes"), {
            nombre: form.nombre,
            correo: form.correo,
            mensaje: form.mensaje,
            timestamp: new Date(),
        });

        // Mostrar mensaje de éxito
        toastMessage.value = "¡Formulario enviado con éxito!";
        toastClass.value = "bg-success";
    } catch (error) {
        // Mostrar mensaje de error
        toastMessage.value = "Hubo un error al enviar el formulario. Inténtalo nuevamente.";
        toastClass.value = "bg-danger";
    } finally {
        // Mostrar el Toast
        showToast.value = true;

        // Ocultar el Toast después de 5 segundos
        setTimeout(() => {
            showToast.value = false;
        }, 3000);
    }

    // Limpiar el formulario
    form.nombre = "";
    form.correo = "";
    form.mensaje = "";
}
</script>
  
  