<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <span class="navbar-brand">Owen</span>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'About', params: { lang: currentLang } }">
                            {{ $t("aboutme") }}
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'Projects', params: { lang: currentLang } }">
                            {{ $t("projects") }}
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'Skills', params: { lang: currentLang } }">
                            {{ $t("skills") }}
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'Experience', params: { lang: currentLang } }">
                            {{ $t("experience") }}
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'Contact', params: { lang: currentLang } }">
                            {{ $t("contact") }}
                        </router-link>
                    </li>
                </ul>
                <div class="btn-group">
                    <button @click="changeLanguage('en')" class="btn btn-outline-dark">English</button>
                    <button @click="changeLanguage('es')" class="btn btn-outline-dark">Español</button>
                </div>
            </div>
        </div>
    </nav>
    <router-view />
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter, useRoute } from "vue-router";
// Extraer locale y t desde useI18n
const { locale, t } = useI18n();
const router = useRouter();
const route = useRoute();
// Cuando cambie route.params.lang se actualiza currentLang, cambiando de idioma
const currentLang = computed(() => route.params.lang || "es");
// Cambiar el idioma dinámicamente
const changeLanguage = (lang) => {
    if (locale.value !== lang) {
        locale.value = lang; // Actualiza el idioma en Vue I18n
        localStorage.setItem("language", lang); // Guarda el idioma en localStorage
        router.push({ name: route.name, params: { ...route.params, lang } }); // Actualiza la URL
    }
};
</script>