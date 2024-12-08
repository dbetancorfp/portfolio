<template>
    <section class="experience-section container">
      <h1 class="text-center">{{ $t('experienceTitle') }}</h1>
      <div class="row g-4 mt-5">
        
        <div v-for="(job, index) in experience" :key="index" class="col-md-4">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">{{ job.title }}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{{ job.company }}</h6>
              <p class="card-text">{{ job.description }}</p>
              <span class="text-muted">{{ job.date }}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="text-center mt-4">
        <button @click="downloadCV" class="btn btn-primary">
          <i class="bi bi-download"></i> {{ $t('downloadCV') }}
        </button>
      </div>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  import jsPDF from "jspdf"; 
  
  interface Job {
    title: string;
    company: string;
    description: string;
    date: string;
  }
  
  export default defineComponent({
    name: "Experience",
    data() {
      return {
        experience: [] as Job[], 
      };
    },
    created() {
      
      this.experience = [
        {
          title: this.$t("experience.0.title") as string,
          company: this.$t("experience.0.company") as string,
          description: this.$t("experience.0.description") as string,
          date: this.$t("experience.0.date") as string,
        },
        {
          title: this.$t("experience.1.title") as string,
          company: this.$t("experience.1.company") as string,
          description: this.$t("experience.1.description") as string,
          date: this.$t("experience.1.date") as string,
        },
        {
          title: this.$t("experience.2.title") as string,
          company: this.$t("experience.2.company") as string,
          description: this.$t("experience.2.description") as string,
          date: this.$t("experience.2.date") as string,
        },
      ];
    },
    methods: {
      downloadCV() {
        const doc = new jsPDF();
  
        
        doc.setFontSize(20);
        doc.text("Curriculum Vitae", 20, 20);
  
       
        doc.setFontSize(12);
        doc.text("Email: josedomingo.rguez.rguez@gmail.com", 20, 30);
  
        
        doc.setFontSize(14);
        let yPosition = 50; 
        this.experience.forEach((job) => {
          doc.text(job.title, 20, yPosition);
          doc.setFontSize(12);
          doc.text(`${job.company} - ${job.date}`, 20, yPosition + 10);
          doc.setFontSize(10);
          doc.text(job.description, 20, yPosition + 20);
          yPosition += 40; 
        });
  
        
        doc.save("curriculum_vitae.pdf");
      },
    },
  });
  </script>
  
  <style scoped>
  .experience-section {
    margin-top: 100px;
  }
  
  h1 {
    color: #0d6efd; 
  }
  
  .card {
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0.1)
  }
  
  .card-body {
    padding: 20px;
  }
  
  .card-title {
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .card-subtitle {
    font-size: 1.2rem;
    color: #777;
  }
  
  .card-text {
    font-size: 1rem;
    color: #555;
  }
  
  .text-center {
    text-align: center;
  }
  
  button {
    margin-top: 20px;
  }
  </style>
  