<script setup lang="ts">
import ProjectCard from '@/components/ProjectComp/ProjectCard.vue';
import type { Project } from '@/components/ProjectComp/Project';
import { useI18n } from 'vue-i18n';

const { locale, messages } = useI18n();

const projects = messages.value[locale.value].projects as Array<Project>;

</script>

<template>
    <div class="container">
        <div class="row mt-5 d-flex flex-row">
            <div class="col-md-4" v-for="project in projects">
                <ProjectCard :project="project" />
            </div>
        </div>
    </div>
</template>