<template>
    <div class="card">
        <div class="card-header">{{ data.title }}</div>
        <div class="card-body">
            <p class="card-text">{{ data.description }}</p>
            <a :href="data.link" class="btn btn-primary">{{ $t('projects.link_text') }}</a>
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