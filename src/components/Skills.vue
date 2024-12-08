<template>
  <section id="skills" class="skills-section bg-dark text-light d-flex flex-column justify-content-center align-items-center py-5">
    <div class="container text-center">
      <h2 class="display-4 text-warning mb-4">{{ $t('skills.title') }}</h2>
      <p class="lead text-light">{{ $t('skills.content') }}</p>
      <div class="row mt-4">
        <div class="col-md-4 mb-4" v-for="skill in skills" :key="skill.name">
          <div class="card shadow-lg border-warning">
            <div class="card-img-container d-flex justify-content-center align-items-center">
              <img :src="skill.image" class="card-img-top rounded-circle border-warning" alt="Skill Image" />
            </div>
            <div class="card-body text-center">
              <h5 class="card-title text-warning">{{ skill.name }}</h5>
              <p class="card-text text-warning">{{ skill.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'Skills',
  data() {
    return {
      skills: [
        { name: 'JavaScript', description: 'Front-end development', image: '../../public/assets/js.png' },
        { name: 'Python', description: 'Coding Language', image: '../../public/assets/python.png' },
        { name: 'TypeScript', description: 'Backend development', image: '../../public/assets/typescript.png' },
      ],
    };
  },
}
</script>

<style scoped>

body, html {
  margin: 0;
  padding: 0;
  height: 100%;
}
main{
  background-color: #333;
}

.skills-section {
  background-color: #333; 
  min-height: 100vh; 
  padding-bottom: 0; 
  display: flex;
  justify-content: center;
  align-items: center;
}

h2 {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  color: #ffc107; 
}

p {
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  line-height: 1.75;
  color: #e0e0e0; 
}

.card {
  border-radius: 10px;
  transition: transform 0.3s ease;
}

.card-img-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px; 
}

.card-img-top {
  height: 150px; 
  width: auto; 
  object-fit: contain; 
}

.card-title {
  font-weight: 600;
}

.card-text {
  font-size: 1rem;
  color: #e0e0e0; 
}

.card:hover {
  transform: scale(1.05); 
}

</style>
