<template>
  <section
    id="projects"
    class="projects-section bg-dark text-light d-flex flex-column justify-content-center align-items-center py-5"
  >
    <div class="container text-center">
      <!-- Título de la sección -->
      <h2 class="display-4 text-warning mb-4 animate__animated animate__fadeInDown">
        {{ $t('projects.title') }}
      </h2>
      <p class="lead text-light animate__animated animate__fadeInUp">
        {{ $t('projects.content') }}
      </p>

      <!-- Grid de proyectos -->
      <div class="row mt-4">
        <div
          class="col-md-4 mb-4 animate__animated animate__zoomIn"
          v-for="(project, index) in projects"
          :key="project.name"
          :class="getAnimationDelay(index)"
        >
          <div class="card project-card shadow-lg border-0">
            <!-- Imagen del proyecto -->
            <div
              class="card-img-container d-flex justify-content-center align-items-center"
            >
              <img
                :src="project.image"
                class="card-img-top rounded-circle"
                alt="Project Image"
              />
            </div>
            <!-- Contenido de la tarjeta -->
            <div class="card-body text-center">
              <h5 class="card-title text-warning">{{ project.name }}</h5>
              <p class="card-text text-light">{{ project.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: "projects",
  data() {
    return {
      projects: [
        {
          name: "Lumino",
          description: "Virtual Campus",
          image: "../../public/assets/lumino.webp",
        },
        {
          name: "TickTask",
          description: "To-do app",
          image: "../../public/assets/ticktask.webp",
        },
        {
          name: "Tribu",
          description: "Social network",
          image: "../../public/assets/tribu.webp",
        },
      ],
    };
  },
  methods: {
    getAnimationDelay(index: number) {
      // Añade retraso progresivo a las animaciones
      return `animate__delay-${index % 3}s`;
    },
  },
};
</script>

<style scoped>
/* General */

.projects-section {
  min-height: 100vh;
  padding: 3rem 0;
  background-color: #131212;
  color: #fff;
}

/* Títulos */
h2 {
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  color: #ffc107;
}

p {
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  line-height: 1.75;
  color: #e0e0e0;
}

/* Tarjetas */
.project-card {
  border-radius: 15px;
  background-color: #444;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.project-card:hover {
  transform: scale(1.05);
  box-shadow: 0px 8px 15px rgba(255, 193, 7, 0.3);
}

/* Imagen */
.card-img-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  overflow: hidden;
}

.card-img-top {
  height: 150px;
  width: 150px;
  object-fit: cover;
  border: 3px solid #ffc107;
  padding: 5px;
  background-color: #333;
  border-radius: 50%;
}

/* Texto */
.card-title {
  font-size: 1.2rem;
  font-weight: 600;
}

.card-text {
  font-size: 1rem;
  color: #e0e0e0;
}

/* Animaciones personalizadas */
@keyframes bounceHover {
  0% {
    transform: scale(1.05) translateY(0);
  }
  50% {
    transform: scale(1.1) translateY(-10px);
  }
  100% {
    transform: scale(1.05) translateY(0);
  }
}

.project-card:hover {
  animation: bounceHover 1s;
}

/* Responsivo */
@media (max-width: 768px) {
  .project-card {
    margin-bottom: 1.5rem;
  }
  .card-img-top {
    height: 120px;
    width: 120px;
  }
}
</style>
