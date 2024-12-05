<script lang="ts" setup>
import html2pdf from 'html2pdf.js';
import ExperienceCard from '@/components/ExperienceComp/ExperienceCard.vue';
import type { Experience } from '@/components/ExperienceComp/Experience';
import { useI18n } from 'vue-i18n';

function downloadPdf() {
  const content = document.getElementById('pdf-content');

  if (content) {
    const options = {
      margin: 1,
      filename: 'angel_cv_example.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };

    html2pdf().set(options).from(content).save();
  } else {
    console.error('No se encontró el contenido para generar el PDF');
  }
}

const { locale, messages } = useI18n();

const experiences = messages.value[locale.value].experiences as Array<Experience>;

</script>

<template>
  <div class="container mt-5">
    <h2 class="text-center">Experience</h2>
    <ul id="pdf-content" class="list-group text-center mt-4">
      <h2 class="mb-3">Angel Luis Garcia</h2>
      <ExperienceCard v-for="(experience, index) in experiences" :key="index" :experience="experience" />
    </ul>
    <button class="mt-3 btn btn-outline-success" @click="downloadPdf">Descargar En Pdf</button>
  </div>
</template>
  