<template>
  <section id="experience" class="experience-container">
    <h2>{{ $t('experience') }}</h2>

    <!-- Experiencia laboral -->
    <div class="experience-list">
      <div class="experience-item">
        <h3>{{ $t('jobTitle1') }}</h3>
        <p class="company">{{ $t('company1') }}</p>
        <p class="duration">{{ $t('duration1') }}</p>
        <p>{{ $t('jobDescription1') }}</p>
      </div>
      <div class="experience-item">
        <h3>{{ $t('jobTitle2') }}</h3>
        <p class="company">{{ $t('company2') }}</p>
        <p class="duration">{{ $t('duration2') }}</p>
        <p>{{ $t('jobDescription2') }}</p>
      </div>
      <!-- Puedes añadir más experiencias laborales según sea necesario -->
    </div>

    <!-- Botón para descargar CV -->
    <div class="download-btn">
      <button @click="downloadCV">{{ $t('downloadCV') }}</button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { jsPDF } from 'jspdf' // Importar jsPDF para generar el PDF

const { t } = useI18n()

// Función para descargar el CV en formato PDF
const downloadCV = () => {
  const doc = new jsPDF()

  // Añadir contenido al PDF
  doc.setFontSize(18)
  doc.text('Curriculum Vitae', 20, 20)

  doc.setFontSize(14)
  doc.text('Aday', 20, 30)
  doc.text('Email: aday18005@gmail.com', 20, 40)

  doc.setFontSize(12)
  doc.text('Experience', 20, 50)
  doc.text('Job Title 1: Frontend Developer', 20, 60)
  doc.text('Company: Tech Corp', 20, 70)
  doc.text('Duration: 2021 - Present', 20, 80)
  doc.text(
    'Job Description: Worked on building responsive websites using Vue.js, HTML, CSS, and JavaScript.',
    20,
    90,
  )

  doc.text('Job Title 2: Web Developer', 20, 110)
  doc.text('Company: Web Solutions', 20, 120)
  doc.text('Duration: 2019 - 2021', 20, 130)
  doc.text(
    'Job Description: Developed dynamic websites and web applications using PHP, MySQL, and JavaScript.',
    20,
    140,
  )

  // Añadir más experiencias laborales aquí si es necesario

  // Guardar el PDF
  doc.save('CV_Aday.pdf')
}
</script>

<style scoped>
/* Estilos de la sección de experiencia */
.experience-container {
  padding: 3rem;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 2rem auto;
  text-align: center;
}

.experience-container h2 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
}

.experience-list {
  text-align: left;
}

.experience-item {
  margin-bottom: 2rem;
}

.experience-item h3 {
  font-size: 1.8rem;
  color: #333;
}

.experience-item p {
  font-size: 1.2rem;
  color: #555;
}

.download-btn {
  margin-top: 3rem;
}

.download-btn button {
  padding: 0.8rem 2rem;
  font-size: 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.download-btn button:hover {
  background-color: #0056b3;
}

@media (min-width: 768px) {
  .experience-container {
    padding: 4rem;
  }
}
</style>
