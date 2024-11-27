<script setup lang="ts">
import ProjectCard from '@/components/ProjectComp/ProjectCard.vue';
import type { Project } from '@/components/ProjectComp/Project';


const projects: Array<Project> = [
    {
        title: 'Antscape',
        body: 'Un proyecto que utiliza java, react y react native para hacer un juegito movil.',
        link: 'https://github.com/Angel-L-G/Ant-Project',
    },
    {
        title: 'E-Commerce App',
        body: 'Aplicación completa de comercio electrónico con Vue.js, Pinia para la gestión del estado y API RESTful.',
        link: 'https://github.com/Angel-L-G',
    },
    {
        title: 'Blog Platform',
        body: 'Una plataforma para bloggers que permite crear, editar y compartir publicaciones. Implementada con Vue Router.',
        link: 'https://github.com/Angel-L-G',
    },
    {
        title: 'Weather App',
        body: 'Aplicación meteorológica interactiva que utiliza APIs externas para mostrar datos del clima en tiempo real.',
        link: 'https://github.com/Angel-L-G',
    },
];
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