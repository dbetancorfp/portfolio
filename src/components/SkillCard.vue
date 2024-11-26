<script setup>
const props = defineProps(['logo', 'name', 'description', 'level'])
</script>

<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title"><span><img :src="logo" alt="logo" width="64"></span> {{ name }}</h5>
            <p class="card-text">{{ description }}</p>
            <i v-for="n in parseInt(level)" class="bi bi-star-fill"></i>
        </div>
    </div>
</template>