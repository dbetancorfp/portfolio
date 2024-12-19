<template>
  <section class="resume-section" id="skills">
    <div class="resume-section-content">
      <h2 class="mb-5">{{ $t('skills') }}</h2>
      <div class="row g-4">
        <div v-for="(skill, index) in skills" :key="index" class="col-md-4">
          <div class="card h-100 shadow-sm">
            <img :src="skill.img" alt="skill image" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">{{ skill.description }}</h5>
              <p class="card-text">{{ skill.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import SkillCard from "./SkillCard.vue";
import dataEn from "../locales/en.json";
import dataEs from "../locales/es.json";
import dataIt from "../locales/it.json";
import dataZh from "../locales/zh.json";
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
    } else if (locale.value == "en") {
      skills = dataEn.skillsCard;
    } else if (locale.value == "it") {
      skills = dataIt.skillsCard;
    } else if (locale.value == "zh") {
      skills = dataZh.skillsCard;
    }
    return {
      skills: skills,
    };
  },
};
</script>

<style scoped>
.row {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.card {
  border-radius: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.card-img-top {
  width: 100%;
  height: 100px;
  object-fit: contain;
}
</style>
