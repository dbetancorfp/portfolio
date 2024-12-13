<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="card" v-for="projectCard in projectCards" :key="projectCard.title">
                    <h5 class="card-header">{{ projectCard.title }}</h5>
                    <div class="card-body">
                        <p class="card-text">{{ projectCard.description }}</p>
                        <a :href="projectCard.link" class="btn btn-primary">Github</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ProjectCard } from './ProjectCard.ts';
    import { useI18n } from 'vue-i18n';

    const { locale, messages } = useI18n();

    const projectCards = messages.value[locale.value].projectCards as Array<ProjectCard>;
</script>