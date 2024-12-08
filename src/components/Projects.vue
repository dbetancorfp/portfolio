<template>
    <section class="projects-section container">
      <h1 class="text-center">{{ $t('projectsTitle') }}</h1>
      <div class="row g-4">
        
        <div v-for="(project, index) in projects" :key="index" class="col-md-4">
          <div class="card h-100">
            
            <img :src="getImagePath(project.image)" class="card-img-top" :alt="project.title">
            <div class="card-body">
              <h5 class="card-title">{{ project.title }}</h5>
              <p class="card-text">{{ project.description }}</p>
            </div>
            <div class="card-footer text-center">
              <a :href="project.link" class="btn btn-primary" target="_blank">
                <i class="bi bi-link"></i> {{ $t('viewProject') }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script lang="ts">
 import { defineComponent, nextTick } from "vue";

interface Project {
  title: string;
  description: string;
  link: string;
  image: string;
}

export default defineComponent({
  name: "Projects",
  data() {
    return {
      projects: [] as Project[], 
    };
  },
  methods: {
    getImagePath(imageName: string): string {
      return new URL(`../assets/${imageName}`, import.meta.url).href;
    },
  },
  mounted() {
   
      this.projects = [
        {
          title: this.$t("projects.0.title") as string,
          description: this.$t("projects.0.description") as string,
          link: "https://github.com/jdrguez/2-Daw/tree/main/DSW/tribu",
          image: "tribu.webp",
        },
        {
          title: this.$t("projects.1.title") as string,
          description: this.$t("projects.1.description") as string,
          link: "https://github.com/jdrguez/Poker-Pro",
          image: "poker.webp",
        },
        {
          title: this.$t("projects.2.title") as string,
          description: this.$t("projects.2.description") as string,
          link: "https://github.com/jdrguez/2-Daw/tree/main/DSW/supertodo",
          image: "todo.webp",
        },
      ];
    
  },
});
  </script>
  
  <style scoped>
  .projects-section {
    margin-top: 100px;
  }
  </style>
  