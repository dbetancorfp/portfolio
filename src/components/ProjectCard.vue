<template>
    <div class="card-body">
        <h5 class="card-title">{{ project.name }}</h5>
        <p class="card-text">{{ project.description }}</p>
        <h5 class="card-title">{{ t('projects_headings') }}</h5>
        <p>
            <router-link to="/skills">
                <img class="m-2" v-for="tech in project.technologies" :src="`src/img/skills/${tech}.png`"/>
            </router-link>
        </p>
        <p>
            <a href="#" class="btn btn-secondary">{{ t('project_link') }}</a>
        </p>
    </div>
</template>

<script setup lang="ts">
    import { useI18n } from "vue-i18n";
    interface Project{
      name: string,
      description: string,
      technologies: Object,
    }
    defineProps<{
        project: Project;
    }>();
    const { t } = useI18n();
</script>

<script lang="ts">
    export default {
    name: 'ProjectCard'
    }
</script>

<style scoped>
    img{
        max-width: 50px;
    }
</style>
