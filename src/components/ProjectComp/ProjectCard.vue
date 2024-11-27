<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.body }}</p>
            <a :href="project.link" class="btn btn-primary">Ver Proyecto</a>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Project } from '@/components/ProjectComp/Project';

defineProps<{
    project: Project;
}>();
</script>
