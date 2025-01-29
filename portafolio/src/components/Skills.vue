<template>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">
  <section class="resume-section" id="skills">
    <div class="resume-section-content">
      <h1 class="mb-5 text-center">{{ $t('skills') }}</h1>
      <div class="row g-4">
        <div v-for="(skill, index) in skills " :key="index" class="col-lg-4 col-md-6">
          <div class="card h-100 shadow-sm text-center">
            <h1><i :class="skill.icon"></i></h1>
            <h3>{{ skill.name }}</h3>
            <div class="card-body d-flex flex-column justify-content-between">
              <h5 class="card-title text-primary">{{ skill.description }}</h5>
              <p class="card-text text-muted">{{ skill.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import dataEn from "../locales/en.json";
import dataEs from "../locales/es.json";
import { useI18n } from 'vue-i18n';

export default {
  data() {
    const { locale } = useI18n();
    const skills = locale.value === "es" ? dataEs.skills.skill : dataEn.skills.skill;
    return { skills };
  },
};
</script>

<style scoped>
.resume-section {
  padding: 60px 0;
}

.card {
  border-radius: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.card-img-top {
  width: 100%;
  height: 120px;
  object-fit: contain;
}
</style>
