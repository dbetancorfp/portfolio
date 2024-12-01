<template>
    <div class="container my-4 text-center">
        <a href="/documents/Isaias-CV.pdf" download="Isaias-CV.pdf" class="btn btn-primary mb-4">{{ $t('experience.download') }}</a>
        <h3 class="mb-3">📅 My timeline</h3>
        <p>{{ $t('experience.data.exp_1') }}</p>
        <p>{{ $t('experience.data.exp_2') }}</p>
        <p>{{ $t('experience.data.exp_3') }}</p>
    </div>
</template>

<script>
    export default {
        name: 'Experience'
    }
</script>