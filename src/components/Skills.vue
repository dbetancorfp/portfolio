<template>
  <section id="skills" class="skills-section d-flex flex-column justify-content-center align-items-center py-5">
    <div class="container text-center">
      <h2 class="display-4 text-warning mb-4 animate__animated animate__fadeInDown">
        {{ $t('skills.title') }}
      </h2>
      <p class="lead text-light animate__animated animate__fadeInUp">
        {{ $t('skills.content') }}
      </p>
      <div class="row mt-4">
        <SkillCard
          v-for="skill in skills"
          :key="skill.name"
          :skill="skill"
          class="col-md-4 mb-4 animate__animated animate__zoomIn"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SkillCard from './SkillCard.vue'; // Asegúrate de que la ruta sea correcta

export default defineComponent({
  name: "Skills",
  components: {
    SkillCard,
  },
  setup() {
    const skills = [
      { name: "Python", description: "Coding Language", image: "https://skillicons.dev/icons?i=python" },
      { name: "Django", description: "Back-end development", image: "https://skillicons.dev/icons?i=django&theme=light" },
      { name: "Vue", description: "Front-end development", image: "https://skillicons.dev/icons?i=vue" },
      { name: "JavaScript", description: "Front-end development", image: "https://skillicons.dev/icons?i=js" },
      { name: "TypeScript", description: "Backend development", image: "https://skillicons.dev/icons?i=ts&theme=light" },
      { name: "HTML", description: "Markup Language", image: "https://skillicons.dev/icons?i=html&theme=light" },
      { name: "Bash", description: "Scripting", image: "https://skillicons.dev/icons?i=bash" },
      { name: "Mysql", description: "Data Base Manager", image: "https://skillicons.dev/icons?i=mysql" },
      { name: "Sqlite", description: "Light Data Base Manager", image: "https://skillicons.dev/icons?i=sqlite&theme=dark" },
    ];

    return { skills };
  },
});
</script>

<style scoped>
.skills-section {
  background-color: #282c34; /* Color de fondo oscuro */
  min-height: 100vh;
  padding-bottom: 0;
}

h2 {
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  color: #ffc107;
  margin-top: 30px;
}

p {
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  line-height: 1.75;
  color: #e0e0e0;
}

.row {
  margin: 0 -15px; /* Ajusta el margen negativo para compensar el padding de las columnas */
}

.col-md-4 {
  padding: 15px; /* Espaciado entre las columnas */
}
</style>