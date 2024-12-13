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
    import { useI18n } from 'vue-i18n';

    const { locale, messages } = useI18n();

    const skillCards = messages.value[locale.value].skillCards as Array<SkillCard>;
</script>