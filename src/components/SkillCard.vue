<template>
    <div class="card" style="width: 18rem;">
        <img :src="ruta" alt="Skill icon" />
        <div class="card-body">
            <h5 class="card-title">{{ description }}</h5>
            <p class="card-text">{{ text }}</p>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        description: {
            type: String,
            required: true,
        },
        ruta: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        }
    },
};
</script>

<style scoped>
.card {
    border-radius: 15px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    max-width: 250px;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.card-body {
    text-align: center;
}
</style>