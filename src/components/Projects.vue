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

    const projectCards: Array<ProjectCard> = [
        {
            title: 'MasterPCBuilder',
            description: 'Es un montador de pcs, pero te coge piezas de multiples tiendas',
            link: 'https://github.com/OwenHernandez/Master-PCBuilder'
        },
    ];
</script>