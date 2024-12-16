<template>
  <section id="about" class="about-section py-5 d-flex align-items-center">
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <!-- Imagen del perfil -->
        <div class="col-md-5 text-center mb-4 mb-md-0 animate__animated animate__fadeInLeft">
          <a href="https://github.com/DavidRiccio">
          <div class="profile-container position-relative mx-auto shadow-lg">
            <img
              src="../../public/assets/profile.webp"
              alt="Profile Image"
              class="img-fluid rounded-circle border border-warning"
            />
            <div class="profile-overlay position-absolute d-flex flex-column justify-content-center align-items-center">
              <h3 class="text-warning fw-bold">{{ $t('about.overlayText') }}</h3>
            </div>
          </div>
          </a>
        </div>

        <!-- Texto descriptivo -->
        <div class="col-md-7 text-center text-md-start animate__animated animate__fadeInRight">
          <h2 class="display-4 text-warning fw-bold mb-3">
            {{ $t('about.title') }}
          </h2>
          <p class="lead text-white-50 mb-4">
            {{ $t('about.content') }}
          </p>
          <div class="d-flex flex-wrap justify-content-center justify-content-md-start gap-3">
            <a href="/contact" class="btn btn-warning btn-lg px-4">
              {{ $t('about.contact') }}
            </a>
            <a href="/skills" class="btn btn-outline-warning btn-lg px-4">
              {{ $t('about.skills') }}
            </a>
            <a href="/projects" class="btn btn-outline-warning btn-lg px-4">
              {{ $t('about.projects') }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: "About",
};
</script>

<style scoped>
/* Sección Principal */
.about-section {
  min-height: 100vh;
  background: linear-gradient(
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.7)
    ),
    url('../../public/assets/wallhaven.png') no-repeat center center/cover;
  color: white;
}

/* Imagen del Perfil */
.profile-container {
  width: 250px;
  height: 250px;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.profile-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-container:hover {
  transform: scale(1.1);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
}

.profile-overlay {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  opacity: 0;
  border-radius: 50%;
  transition: opacity 0.3s ease;
}

.profile-container:hover .profile-overlay {
  opacity: 1;
}

.profile-overlay h3 {
  font-size: 1.25rem;
}

/* Títulos */
h2 {
  font-family: "Poppins", sans-serif;
  font-weight: 700;
}

p {
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  line-height: 1.75;
  color: #e0e0e0;
}

/* Botones */
.btn-warning {
  transition: all 0.3s ease;
}

.btn-warning:hover {
  background-color: #ffcc00;
  transform: translateY(-3px);
}

.btn-outline-warning {
  border: 2px solid #ffc107;
  color: #ffc107;
  transition: all 0.3s ease;
}

.btn-outline-warning:hover {
  background-color: #ffc107;
  color: black;
}

/* Responsividad */
@media (max-width: 768px) {
  .profile-container {
    width: 200px;
    height: 200px;
  }
}
</style>

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
/>
