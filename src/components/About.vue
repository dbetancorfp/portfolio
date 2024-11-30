<script setup>
  import { useI18n } from "vue-i18n";
  // Extraer locale y t desde useI18n
  const { locale, t } = useI18n(); // Esta t es la que usamos en el Template como $t
</script>

<template>
    <header class="bg-success text-white text-center py-4">
      <h1 class="mb-0">{{ $t("aboutme") }}</h1>
    </header>
  
    <section class="container my-5">
      <div class="row">
        <div class="col-md-4 text-center mb-4">
          <figure>
            <img src="../assets/imgs/book.jpg" class="img-fluid rounded-circle shadow" alt="A picture of my favorite hobby, reading." style="max-width: 250px;">
            <figcaption class="mt-2 text-muted">{{ $t("about-page.tag") }}</figcaption>
          </figure>
        </div>
  
        <div class="col-md-8 lead">
          <p>{{ $t("about-page.p1") }}</p>
          <p>{{ $t("about-page.p2") }}</p>
          <p>{{ $t("about-page.p3") }}</p>
          <p>{{ $t("about-page.p4") }}</p>
        </div>
      </div>
    </section>
  </template>