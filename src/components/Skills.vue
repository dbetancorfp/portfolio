<template>
  <h1>{{ t('skills_title') }}</h1>
  <div class="col-12">{{ t('skills_description') }}</div>
  <div class="row m-3">
      <div class="card col-3 m-3" v-for="skill in skillsList">
          <SkillsCard :skill="skill"/>
      </div>
  </div>
</template>

<script lang="ts">
    export default {
    name: 'Skills'
    }
</script>

<script setup lang="ts">
    import { useI18n } from "vue-i18n";
    import SkillsCard from './SkillsCard.vue';
    import { computed } from "vue";
    const { t, tm  } = useI18n();
    const skillsList = computed(() => tm('skills_content'))
</script>
