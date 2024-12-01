<template>
    <div class="card h-100">
        <div class="card-header">{{ data.title }}</div>
        <div class="card-body d-flex flex-column justify-content-between">
            <p class="card-text">{{ data.description }}</p>
            <p class="card-text">{{ data.tools }}</p>
            <div>
                <a :href="data.link" class="btn btn-primary">{{ $t('projects.link_text') }}</a>
            </div>
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