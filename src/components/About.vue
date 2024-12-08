<template> 
  <section id="about" class="about-section bg-dark text-light d-flex flex-column justify-content-center align-items-center min-vh-100 py-5">
    <div class="container text-center">
      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-6 col-12 mb-4">
          <img 
            src="../../public/assets/profile.webp" 
            alt="Profile Image" 
            class="img-fluid rounded-circle border border-warning shadow-lg" 
          />
        </div>

        <div class="col-lg-7 col-md-6 col-12">
          <h2 class="display-4 text-warning mb-4">{{ $t('about.title') }}</h2>
          <p class="lead text-light">{{ $t('about.content') }}</p>
          
          <div class="d-flex justify-content-center">
            <a href="/contact" class="btn btn-warning btn-lg mx-2">Contact Me</a>
            <a href="/skills" class="btn btn-warning btn-lg mx-2">Skills</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'About',
};
</script>

<style scoped>
.about-section {
  background-color: #333; 
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
}
</style>
