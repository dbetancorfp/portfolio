<template>
  <section id="skills" class="skills-section py-5 position-relative overflow-hidden">
    <div class="container text-center">
      <!-- Section Header -->
      <div class="mb-5">
        <h2 class="display-5 fw-bold mb-3 animate__animated animate__fadeInDown">{{ $t('skills.title') }}</h2>
        <p class="lead text-white-50 animate__animated animate__fadeInUp">{{ $t('skills.content') }}</p>
      </div>

      <!-- Skills Grid -->
      <div class="row g-4 justify-content-center">
        <div 
          v-for="(skill, index) in skills" 
          :key="skill.name" 
          class="col-6 col-md-4 col-lg-3 d-flex justify-content-center"
        >
          <div 
            class="skill-card rounded-circle d-flex flex-column justify-content-center align-items-center p-3 position-relative animate__animated" 
            :class="getAnimationClass(index)"
          >
            <!-- Skill Icon Background -->
            <div 
              class="skill-icon rounded-circle position-relative"
              :style="{ backgroundImage: `url(${skill.image})` }"
            >
              <h3 class="skill-title text-center text-white position-absolute w-100">{{ skill.name }}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface Skill {
  name: string;
  description: string;
  image: string;
}

export default defineComponent({
  name: "Skills",
  setup() {
    const skills = ref<Skill[]>([
      { name: "Python", description: "Coding Language", image: "https://skillicons.dev/icons?i=python" },
      { name: "Django", description: "Back-end development", image: "https://skillicons.dev/icons?i=django&theme=light" },
      { name: "Vue", description: "Front-end development", image: "https://skillicons.dev/icons?i=vue" },
      { name: "JavaScript", description: "Front-end development", image: "https://skillicons.dev/icons?i=js" },
      { name: "TypeScript", description: "Backend development", image: "https://skillicons.dev/icons?i=ts&theme=light" },
      { name: "HTML", description: "Markup Language", image: "https://skillicons.dev/icons?i=html&theme=light" },
      { name: "Bash", description: "Scripting", image: "https://skillicons.dev/icons?i=bash" },
      { name: "Mysql", description: "Data Base Manager", image: "https://skillicons.dev/icons?i=mysql" },
      { name: "Sqlite", description: "Light Data Base Manager", image: "https://skillicons.dev/icons?i=sqlite&theme=dark" },
    ]);

    const getAnimationClass = (index: number): string => {
      const delayClass = `animate__delay-${index % 2}s`; // Adds delay for staggered animations
      return `animate__zoomIn ${delayClass}`;
    };

    return { skills, getAnimationClass };
  },
});
</script>

<style scoped>

h2 {
  margin-top: 3rem;
  color: #ffc107;
}
.skills-section {
  height: 100vh;
  padding: 4rem 2rem;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../../public/assets/wallhaven.png') no-repeat center center/cover;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


.skill-card {
  width: 180px;
  height: 180px;
  background-color: #0000004b;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.274);
  transition: transform 0.3s, background-color 0.3s;
}

.skill-card:hover {
  transform: scale(1.1);
  background-color: rgba(255, 255, 255, 0.2);
}


.skill-icon {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid rgba(36, 95, 105, 0.3);
  position: relative;
}

.skill-title {
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  background: rgba(0, 0, 0, 0.753);
  padding: 5px 10px;
  border-radius: 5px;
  color: #ffc107; 
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}


@media (max-width: 768px) {
  .skill-card {
    width: 150px;
    height: 150px;
  }

  .skill-title {
    font-size: 0.85rem;
  }
}
</style>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
