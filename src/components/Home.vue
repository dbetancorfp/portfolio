<template>
  <div class="hero">
    <div class="overlay"></div>
    <div class="container animate__animated animate__fadeIn">
      <h1>{{ $t('home.title') }}</h1>
      <p>  {{ $t('home.description') }}.</p>
      <div class="button-group">
        <a href="/experience" class="btn">{{ $t('home.discover') }}</a>
        <a href="/contact" class="btn">{{ $t('home.contact') }}</a>
      </div>
    </div>
  </div>
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
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../../public/assets/wallhaven.png') no-repeat center center/cover;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.container {
  position: relative;
  z-index: 2;
}

.hero h1 {
  font-size: 4rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  background-clip: text;
  -webkit-background-clip: text;
    background: url('../../public/assets/wallhaven.png') no-repeat center;
  background-size: cover;
  -webkit-text-stroke: 1px white;
}

.hero p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.button-group {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.btn {
  font-size: 1.2rem;
  padding: 1rem 2rem;
  background-color: #ffc107;
  color: #333;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
}

.btn:hover {
  background-color: #e0a800;
  color: #fff;
}

.features {
  padding: 4rem 2rem;
  background-color: #f4f4f4;
  text-align: center;
}

.features h2 {
  margin-bottom: 2rem;
  font-size: 2.5rem;
}

.features-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}

.feature {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 300px;
}

.contact {
  padding: 4rem 2rem;
  background-color: #333;
  color: white;
  text-align: center;
}

.contact h2 {
  margin-bottom: 2rem;
  font-size: 2.5rem;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}

form input,
form textarea {
  width: 100%;
  max-width: 400px;
  padding: 0.8rem;
  border: none;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

form button {
  padding: 1rem 2rem;
  background-color: #ffc107;
  color: #333;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

form button:hover {
  background-color: #e0a800;
  color: #fff;
}
</style>
