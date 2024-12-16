<template>
  <section class="experience">
    <h2 class="animate__animated animate__fadeInUp">{{ $t('experience.title') }}</h2>
    <div class="experience-container">
      <div class="experience-item animate__animated animate__fadeInLeft">
        <h3>{{ $t('experience.first_title') }}</h3>
        <p>{{ $t('experience.first_content') }}</p>
      </div>
      <div class="experience-item animate__animated animate__fadeInRight">
        <h3>{{ $t('experience.second_content') }}</h3>
        <p>{{ $t('experience.second_content') }}</p>
      </div>
      <div class="experience-item animate__animated animate__fadeInUp">
        <h3>{{ $t('experience.third_content') }}</h3>
        <p>{{ $t('experience.third_content') }}</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'Experience',
};
</script>

<style scoped>
.experience {
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

.experience h2 {
  margin-bottom: 2rem;
  font-size: 2.5rem;
  color: white;
  text-transform: uppercase;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-stroke: 1px white;
}

.experience-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}

.experience-item {
  background: rgba(255, 255, 255, 0.671);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 300px;
  color: #0dbdd4;
}

.experience-item h3 {
  margin-bottom: 1rem;
  color: #000;
}

.experience-item p {
  font-size: 1rem;
  color: #000000;
}
</style>
