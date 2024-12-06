<script setup>
  import { useI18n } from "vue-i18n";

  const { locale, t } = useI18n();

  // Función para descargar el PDF
  const descargarPDF = () => {
    // Crear un enlace temporal para la descarga
    const link = document.createElement("a");
    link.href = "/CV.pdf"; // Ruta al archivo PDF
    link.download = "CV_Rashi-Chugani.pdf"; // Nombre del archivo al descargar
    link.click();
  };
</script>

<template>
  <header class="bg-success text-white text-center py-4">
    <h1 class="mb-0">{{ $t("experience") }}</h1>
  </header>
  
  <main class="container my-4">
    <div class="row justify-content-center">
      <div class="col-9 col-md-9">
        <iframe src="/CV.pdf#toolbar=0" type="application/pdf" class="w-100" style="height: 500px;" aria-label="CV PDF"></iframe>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col-12 col-md-8 d-flex justify-content-end mx-auto">
        <button class="btn btn-success" @click="descargarPDF">
          {{ $t("experience-page.download") }}
        </button>
      </div>
    </div>
  </main>
</template>
