<template>
  <section class="skills-section container">
    <h1 class="text-center">{{ $t('skillsTitle') }}</h1>
    <div class="row g-4 mt-5">
     
      <div v-for="(skill, index) in skills" :key="index" class="col-md-4">
        <div class="card h-100">
          <div class="card-body text-center">
           
            <img :src="getImagePath(skill.image)" class="card-img-top mb-3" :alt="skill.title" />
            <h5 class="card-title">{{ skill.title }}</h5>
            <p class="card-text">{{ skill.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, nextTick } from "vue";

interface Skill {
  title: string;
  description: string;
  image: string;
}

export default defineComponent({
  name: "Skills",
  data() {
    return {
      skills: [] as Skill[], 
    };
  },

  methods: {
    
    getImagePath(imageName: string): string {
      return new URL(`../assets/${imageName}`, import.meta.url).href;
    },
  },

  mounted() {
    nextTick(() => {
      this.skills = [
        {
          title: this.$t("habilidades[0].title") as string,
          description: this.$t("habilidades[0].description") as string,
          image: 'js.png',
        },
        {
          title: this.$t("habilidades[1].title") as string,
          description: this.$t("habilidades[1].description") as string,
          image: 'vue.png', 
        },
        {
          title: this.$t("habilidades[2].title") as string,
          description: this.$t("habilidades[2].description") as string,
          image: 'node.png',
        },
        {
          title: this.$t("habilidades[3].title") as string,
          description: this.$t("habilidades[3].description") as string,
          image: 'css3.png',
        },
        {
          title: this.$t("habilidades[4].title") as string,
          description: this.$t("habilidades[4].description") as string,
          image: 'django.png',
        },
        {
          title: this.$t("habilidades[5].title") as string,
          description: this.$t("habilidades[5].description") as string,
          image: 'python.png',
        },
        {
          title: this.$t("habilidades[6].title") as string,
          description: this.$t("habilidades[6].description") as string,
          image: 'ts.png',
        },
      ];
    });
  },
});
</script>

<style scoped>
.skills-section {
  margin-top: 100px;
}

h1 {
  color: #0d6efd; 
}

.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.card-body {
  padding: 20px;
}

.card-title {
  font-size: 1.5rem;
  font-weight: bold;
}

.card-text {
  font-size: 1rem;
  color: #555;
}

.card-img-top {
  width: 50px;  
  height: 50px;
  object-fit: cover;
  margin-bottom: 15px;  
}
</style>
