<script setup>
    import { useI18n } from "vue-i18n";

    const { locale, t } = useI18n();
</script>

<template>
  <section class="container my-5 d-flex align-items-center">
    <div class="row justify-content-center w-100">
      <div class="col-md-4 text-center mb-4">
        <figure>
          <img src="../assets/imgs/girlcoding.jpg" 
               class="img-fluid rounded-circle shadow" 
               alt="A picture of my favorite hobby, reading." 
               style="max-width: 350px;">
        </figure>
      </div>
      <div class="col-md-8 lead">
        <h1>{{ $t("home-page.h") }}</h1>
        <p>{{ $t("home-page.p") }}</p>

        <div class="icon-container">
          <a href="https://github.com/Chugani05" target="_blank" class="icon-link" aria-label="GitHub">
            <i class="bi bi-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/rashi-chugani-4884b0291/" target="_blank" class="icon-link" aria-label="LinkedIn">
            <i class="bi bi-linkedin"></i>
          </a>
          <RouterLink to="/experience" class="icon-link" aria-label="Curriculum Vitae">
            <i class="bi bi-file-earmark-fill"></i>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  display: flex;
  align-items: center;
  min-height: 75vh;
}

.icon-container {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  margin: 1.5rem 0;
}

.icon-link {
  justify-content: center;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: whitesmoke;
  color: #333;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
}

.icon-link i {
  font-size: 2.5rem;
  line-height: 1;
}

.icon-link:hover,
.icon-link:focus {
  color: #198754;
  transform: scale(1.2);
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
}
</style>

