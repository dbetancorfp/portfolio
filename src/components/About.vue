<template>
  <section id="about" class="about-section">
    <div class="about-content">
      <div class="about-image">
        <img src="../img/perfil.jpg" alt="Nichole Louis" />
      </div>
      <div class="about-text">
        <h2 class="section-title">{{ $t("navbar.about") }}</h2>
        <p class="about-description" v-html="$t('aboutMe.description')"></p>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
/* Estilo general para la sección */
.about-section {
  padding: 4rem 1.5rem;
  background: linear-gradient(to bottom, #ffffff, #f2f2f2);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  max-width: 1000px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  border-radius: 15px;
  overflow: hidden;
  padding: 2rem;
}

.about-image img {
  border-radius: 50%;
  width: 180px;
  height: 180px;
  object-fit: cover;
  border: 4px solid #8a2be2;
  box-shadow: 0 6px 10px rgba(138, 43, 226, 0.3);
  transition: transform 0.3s, box-shadow 0.3s;
}

.about-image img:hover {
  transform: scale(1.1);
  box-shadow: 0 10px 20px rgba(138, 43, 226, 0.5);
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #4a4a4a;
  text-transform: uppercase;
  position: relative;
  text-align: center;
}

.section-title::after {
  content: '';
  width: 50px;
  height: 3px;
  background-color: #8a2be2;
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
}

.about-description {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #6d6d6d;
  max-width: 800px;
}

@media (min-width: 768px) {
  .about-content {
    flex-direction: row;
    gap: 3rem;
  }

  .about-image {
    flex: 1;
  }

  .about-text {
    flex: 2;
    text-align: left;
  }

  .about-description {
    text-align: justify;
  }
}
</style>
