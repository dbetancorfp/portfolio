<template>
  <section class="hero d-flex justify-content-center align-items-center text-center text-white bg-dark" 
           style="background-image: url('/path/to/your/image.jpg'); background-size: cover; background-position: center; height: 100vh;">
    <div class="overlay position-absolute w-100 h-100" style="background: rgba(0, 0, 0, 0.5);"></div>
    <div class="container position-relative z-index-10">
      <h1 class="display-3 fw-bold mb-3 animate__animated animate__fadeInDown">{{ $t('home.title') }}</h1>
      <p class="lead mb-4 animate__animated animate__fadeInUp">{{ $t('home.description') }}</p>
      <a href="/about" class="btn btn-warning btn-lg animate__animated animate__bounceIn">{{ $t('home.learnMore') }}</a>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'Home',
};
</script>

<style scoped>
.hero {
  position: relative;
  height: 100vh; 
  background-color: #333; 
}

.hero h1 {
  text-transform: uppercase;
  color: white;
  background: url(../../public/assets/wallhaven.png);
  -webkit-text-fill-color: transparent;
  background-clip: text;
  background-position: center;
  background-size:cover;
  -webkit-text-stroke: 1px white;

}

.hero p {
  font-size: 1.5rem; 
  animation-duration: 1s;
}

.hero a {
  font-size: 1.2rem;
  padding: 1rem 2rem;
  background-color: #ffc107;
  color: #333;
  transition: background-color 0.3s;
}

.hero a:hover {
  background-color: #e0a800;
  color: #fff;
}


.overlay {
  z-index: 1;
}


.container {
  z-index: 2;
  position: relative;
  text-align: center;
}
</style>

<!-- Asegúrate de incluir Animate.css en tu proyecto para las animaciones -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
