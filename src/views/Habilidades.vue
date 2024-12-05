<script lang="ts" setup>
import HabilityCard from '@/components/HabilityComp/HabilityCard.vue';
import type { Hability } from '@/components/HabilityComp/Hability';

import { useI18n } from 'vue-i18n';

const { locale, messages } = useI18n();

const habilities = messages.value[locale.value].skills as Array<Hability>;
</script>

<template>
    <h2 class="text-center mt-4">{{ $t("nav.skills") }}</h2>
    <div class="row mt-1">
        <div class="col-md-4 mb-3" v-for="hability in habilities">
            <HabilityCard :hability="hability" />
        </div>
    </div>
</template>