<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

// Obtener la instancia de i18n
const { locale } = useI18n()

// Función para cambiar el idioma
function cambiarIdioma(idioma: string) {
    console.log(idioma);
    locale.value = idioma
}
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-primary-subtle" data-bs-theme="dark">
        <div class="container-fluid">
            <router-link to="/" class="navbar-brand text-light">Angel</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link text-light">{{ $t("nav.aboutme") }}</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/proyectos" class="nav-link text-light">{{ $t("nav.projects") }}</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/habilidades" class="nav-link text-light">{{ $t("nav.skills") }}</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/experiencia" class="nav-link text-light">{{ $t("nav.experience") }}</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/contacto" class="nav-link text-light">{{ $t("nav.contact") }}</router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="text-center">
            <button @click="cambiarIdioma('es')" class="btn btn-outline-primary m-2">Español</button>
            <button @click="cambiarIdioma('en')" class="btn btn-outline-secondary m-2">English</button>
        </div>
    </nav>
</template>