<script setup>
    import { useI18n } from "vue-i18n";
    import ProjectCard from "./ProjectCard.vue";

    const locale = useI18n();    
</script>

<template>
    <header class="bg-success text-white text-center py-4">
      <h1 class="mb-0">{{ locale.t("projects") }}</h1>
    </header>

    <section>
        <div class="row row-cols-3">
            <div v-for="project in locale.getLocaleMessage(locale.locale.value)['project-cards']" class="col">
                <ProjectCard :title="project.title" :description="project.description" :url="project.url"/>
            </div>
        </div>
    </section>
</template>