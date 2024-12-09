<template>
    <div class="container py-5">
      <h1 class="text-center mb-5">Habilidades</h1>
      <div class="row">
        <div class="col-md-6" v-for="skill in skills" :key="skill.id">
          <div class="mb-4">
            <div class="d-flex justify-content-between">
              <h5 class="mb-1">{{ skill.name }}</h5>
              <span>{{ skill.level }}%</span>
            </div>
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                :style="{ width: skill.level + '%' }"
                :aria-valuenow="skill.level"
                aria-valuemin="0"
                aria-valuemax="100"
              >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const skills = [
    { id: 1, name: 'JavaScript', level: 90 },
    { id: 2, name: 'Vue.js', level: 85 },
    { id: 3, name: 'React', level: 80 },
    { id: 4, name: 'Django', level: 70 },
    { id: 5, name: 'Bootstrap', level: 95 },
    { id: 6, name: 'Firebase', level: 75 },
    { id: 7, name: 'PHP & Laravel', level: 80 },
    { id: 8, name: 'MySQL', level: 85 },
  ];
  </script>
  
  <style scoped>
  .progress {
    height: 1.5rem;
    border-radius: 0.75rem;
    overflow: hidden;
  }
  .progress-bar {
    background-color: #007bff;
  }
  </style>
  