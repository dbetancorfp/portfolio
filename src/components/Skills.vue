<template>
  <section class="resume-section" id="skills">
    <div class="resume-section-content">
      <h2 class="mb-5">{{ $t('skills') }}</h2>
      <div class="container">
        <div class="row g-4">
          <div v-for="(skill, index) in  skills " :key="index">
            <SkillCard 
             :name=skill.name
           :skill=skill.description
           :ruta=skill.img
           />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import SkillCard from "./TarjetaHabilidad.vue";
import dataEn from "../locales/en.json";
import dataEs from "../locales/es.json";
import { useI18n } from 'vue-i18n';


export default {
  components: {
    SkillCard,
  },
  data() {
    const { locale } = useI18n();
    let skills;
    if (locale.value == "es") {
      skills = dataEs.skillsCard;
    } else {
      skills = dataEn.skillsCard;
    }
    return {
      skills: skills,
    };
  },
};
</script>
  
<style scoped>
.dev-icons {
  font-size: 2rem;
}

.dev-icons li {
  display: inline-block;
  margin: 10px;
}

.icon {
  width: 40px;
  height: 40px;
  transition: transform 0.3s ease;
}

.icon:hover {
  transform: scale(1.1);
}
</style>
  
