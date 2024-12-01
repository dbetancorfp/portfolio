<template>
    <div class="container mt-5">
        <h1 class="text-center mb-4">{{ $t('form.title') }}</h1>
        <form @submit.prevent="submitForm" class="form-control p-4 shadow-sm">
        <!-- Campo de Email -->
        <div class="mb-3">
            <label for="email" class="form-label">{{ $t('form.email') }}:</label>
            <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="form-control"
            />
        </div>
        
        <!-- Campo de Mensaje -->
        <div class="mb-3">
            <label for="message" class="form-label">{{ $t('form.message') }}</label>
            <textarea
                id="message"
                v-model="form.message"
                required
                class="form-control"
                rows="4"
            ></textarea>
        </div>
        
        <!-- Botón Enviar -->
        <button type="submit" class="btn btn-primary w-100">Enviar</button>
        </form>

        <!-- Mensaje de Éxito -->
        <p v-if="successMessage" class="alert alert-success mt-3">{{ successMessage }}</p>

        <!-- Mensaje de Error -->
        <p v-if="errorMessage" class="alert alert-danger mt-3">{{ errorMessage }}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { db } from "../services/firebase.ts";
import { addDoc, collection } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";
import { useI18n } from 'vue-i18n';

export default defineComponent({
    name: "Contact",
    setup() {
    
    // Cargamos i18n
    const { t } = useI18n();

    // Reactividad para el formulario
    const form = reactive({
        email: "",
        message: "",
    });

    // Mensajes de éxito o error
    const successMessage = ref<string | null>(null);
    const errorMessage = ref<string | null>(null);

    // Función para enviar el formulario
    const submitForm = async () => {
        try {
        // Validación
        if (!form.email || !form.message) {
            throw new Error("Por favor, completa todos los campos.");
        }

        // Referencia a la colección
        const messagesCollection = collection(db, "Mensajes de contacto");

        // Agregar documento a Firestore
        await addDoc(messagesCollection, {
            email: form.email,
            message: form.message,
            createdAt: new Date(), // Timestamp opcional
        });

        // Mostrar mensaje de éxito y limpiar formulario
        successMessage.value = t('form.successMessage');
        form.email = "";
        form.message = "";
        errorMessage.value = null;
        } catch (error: any) {
        errorMessage.value =
            error.message || t('form.errorMessage');
        successMessage.value = null;
        }
    };

    return {
        form,
        submitForm,
        successMessage,
        errorMessage,
        };
    },
});
</script>
