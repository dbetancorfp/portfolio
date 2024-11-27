<script setup lang="ts">
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import type {Hability} from '@/components/HabilityComp/Hability';

    defineProps<{
        hability: Hability;
    }>();
</script>

<template>
    <div class="card bg-dark">
        <div class="card-body">
            <h5 class="card-title text-light">
                <font-awesome-icon 
                    :icon="hability.icon" 
                    :style="{ color: hability.color}"/>
                {{ hability.title }}
            </h5>
            <p class="card-text text-light">{{ hability.description }}</p>
        </div>
    </div>
</template>