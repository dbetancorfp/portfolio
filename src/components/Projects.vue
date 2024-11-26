<script setup>
    import { useI18n } from "vue-i18n";
    const locale = useI18n();
    const currentLocale = locale.getLocaleMessage(locale.locale.value);
    
</script>

<template>
    <section id="projects">
        <h1>Proyectos</h1>
        <div class="row row-cols-3">
            {{ currentLocale["project-cards"] }}
            <hr>
        </div>
    </section>
</template>