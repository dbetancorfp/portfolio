<template>
  <h1 class="m-2">{{ t('projects_title') }}</h1>
  <div class="col-12">{{ t('projects_description') }}</div>
  <div class="row m-3">
      <div class="card col-5 m-3" v-for="project in projectList">
          <ProjectCard :project="project"/>
      </div>
  </div>
</template>

<script lang="ts">
    export default {
    name: 'Projects'
    }
</script>

<script setup lang="ts">
    import { useI18n } from "vue-i18n";
    import ProjectCard from "./ProjectCard.vue";
    import { computed } from "vue";
    const { t, tm  } = useI18n();
    const projectList = computed(() => tm('projects_content'))
</script>
