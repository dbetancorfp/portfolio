<template>
        <h1>{{ t('aboutMe_content.title') }}</h1>
        <div class="row mb-3">
            <div class="card mb-3">
                <div class="row g-3">
                    <div class="col-md-4">
                    <img src="/src/img/noavatar.jpg" class="img-fluid rounded-circle m-4">
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{{ t('aboutMe_content.description') }}</h5>
                        <p class="card-text">{{ t('aboutMe_content.content') }}</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
</template>
<script setup lang="ts">
    import { useI18n } from "vue-i18n";
    const { t }  = useI18n();
</script>
<script lang="ts">
    export default {
    name: 'Aboutme'
    }
</script>