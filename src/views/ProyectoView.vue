<template>
    <div class="container mt-4">
      <h1>My Projects</h1>
      <div class="row">
        <div class="col-md-4" v-for="project in projects" :key="project.id">
          <div class="card mb-4">
            <div class="card-body">
              <h5 class="card-title">{{ project.name }}</h5>
              <p class="card-text">{{ project.description }}</p>
              <a :href="project.url" class="btn btn-primary">View Project</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        projects: []
      };
    },
    mounted() {
      this.fetchProjects();
    },
    methods: {
      fetchProjects() {
        fetch('./projects.json') 
          .then(response => response.json())
          .then(data => {
            this.projects = data.projects;
          })
          .catch(error => console.error('Error fetching the projects:', error));
      }
    }
  };
  </script>
