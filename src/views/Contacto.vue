<template>
    <div class="container mt-5">
        <h2 class="text-center">Contacto</h2>

        <form @submit.prevent="enviarFormulario" class="mt-4">
            <div class="mb-3">
                <label for="nombre" class="form-label">Nombre</label>
                <input type="text" id="nombre" v-model="form.nombre" class="form-control"
                    placeholder="Introduce tu nombre" />
            </div>

            <div class="mb-3">
                <label for="correo" class="form-label">Correo</label>
                <input type="email" id="correo" v-model="form.correo" class="form-control"
                    placeholder="Introduce tu correo" />
            </div>

            <div class="mb-3">
                <label for="mensaje" class="form-label">Mensaje</label>
                <textarea id="mensaje" v-model="form.mensaje" class="form-control" placeholder="Escribe tu mensaje"
                    rows="4"></textarea>
            </div>

            <button type="submit" class="btn btn-primary">Enviar</button>
        </form>
    </div>
</template>
  
<script setup>
    import { reactive } from "vue";

    const form = reactive({
        nombre: "",
        correo: "",
        mensaje: "",
    });

    function enviarFormulario() {
        console.log("Formulario enviado:", form);

        form.nombre = "";
        form.correo = "";
        form.mensaje = "";
    }
</script>
  