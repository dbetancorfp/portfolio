<script setup>
    const props = defineProps(['title', 'description', 'url'])
</script>

<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-text">{{ description }}</p>
            <a :href="url" class="card-link">Source code</a>
        </div>
    </div>
</template>