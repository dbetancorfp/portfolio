<template>
    <div class="container">
        <div class="row">
            <div class="col-4 mb-3 mt-3" v-for="skillCard in skillCards" :key="skillCard.name">
                <div class="card">
                    <div class="card-header">
                        <i :class="skillCard.logo"></i> {{ skillCard.name }}
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">{{ skillCard.description }}</h5>
                        <p class="card-text">{{ skillCard.experience }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { SkillCard } from './SkillCard';

    const skillCards: Array<SkillCard> = [
        {
            logo: 'fa-brands fa-java',
            name: 'Java',
            description: 'Usado en el proyecto MasterPCBuilder',
            experience: '+2 años'
        },
        {
            logo: 'fa-brands fa-react',
            name: 'React',
            description: 'Usado en el proyecto MasterPCBuilder',
            experience: '+1 años'
        },
        {
            logo: 'devicon-javascript-plain',
            name: 'JS',
            description: 'Usado en el proyecto MasterPCBuilder',
            experience: '+2 años'
        },
        {
            logo: 'devicon-typescript-plain',
            name: 'TS',
            description: 'Usado en el proyecto MasterPCBuilder',
            experience: '+2 años'
        },
        {
            logo: 'devicon-html5-plain',
            name: 'HTML',
            description: 'Usado en el proyecto MasterPCBuilder',
            experience: '+3 años'
        },
        {
            logo: 'devicon-css3-plain',
            name: 'CSS',
            description: 'Usado en el proyecto MasterPCBuilder',
            experience: '+3 años'
        },
        {
            logo: 'devicon-mysql-original',
            name: 'MySQL',
            description: 'Usado en el proyecto MasterPCBuilder',
            experience: '+3 años'
        },
        {
            logo: 'devicon-mongodb-plain',
            name: 'MongoDB',
            description: 'Usado en el proyecto MasterPCBuilder',
            experience: '+1 años'
        }
    ];
</script>