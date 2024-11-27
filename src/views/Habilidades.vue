<script lang="ts" setup>
import HabilityCard from '@/components/HabilityComp/HabilityCard.vue';
import type { Hability } from '@/components/HabilityComp/Hability';

let habilities: Array<Hability> = [
    {
        title: "Java",
        description: "Desarrollo de java, por dos años",
        color: "rgb(255, 178, 71)",
        icon: ["fab", "java"]
    },
    {
        title: "React",
        description: "Desarrollo de React, por dos años",
        color: "aqua",
        icon: ["fab", "react"]
    },
    {
        title: "JS",
        description: "Desarrollo de Javascript, por dos años",
        color: "Yellow",
        icon: ["fab", "js"]
    },
    {
        title: "Github",
        description: "Uso de Github, por dos años",
        color: "white",
        icon: ["fab", "github"]
    }
];
</script>

<template>
    <h2 class="text-center mt-4">Habilidades</h2>
    <div class="row mt-1">
        <div class="col-md-4 mb-3" v-for="hability in habilities">
            <HabilityCard :hability="hability" />
        </div>
    </div>
</template>