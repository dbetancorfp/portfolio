<template>
        <img :src="skill.logo" class="card-img-top img-fluid">
        <div class="card-body">
            <h5 class="card-title">{{ skill.name }}</h5>
            <div class="progress" role="progressbar" aria-label="Success example" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar progress-bar-striped bg-warning" :style="{width: skill.level}"></div>
            </div>
            <p class="card-text">{{ skill.description }}</p>
        </div>
</template>

<script setup lang="ts">
    interface Skill{
      name: string,
      logo: string,
      description: string,
      level: string,
    }
    defineProps<{
      skill: Skill;
    }>();
</script>

<script lang="ts">
    export default {
      name: 'SkillsCard'
    }
</script>
