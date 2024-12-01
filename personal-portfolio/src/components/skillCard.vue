<template>
    <div class="card h-100">
        <div class="card-body">
            <p v-html="data.logo"></p>
            <h5 class="text-card">{{ data.name }}</h5>
            <p class="text-card">{{ data.description }}</p>
            <p class="text-card">{{ data.level }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Card',
        props: {
            data: {
                type: Object,
                required: true
            }
        }
    };
</script>