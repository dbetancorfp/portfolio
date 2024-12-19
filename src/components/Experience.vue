<template>
  <section class="resume-section" id="experience">
    <div class="resume-section-content">
      <h2 class="mb-5 text-center">{{ $t("experience") }}</h2>

      <div class="card mb-4">
        <div class="card-body d-flex align-items-center flex-column text-center">
          <h3 class="card-title mb-3 d-flex align-items-center">
            <b-icon-briefcase-fill class="me-1"/>{{ $t('ExperienceTitle') }}
          </h3>
          <h5 class="card-subtitle text-muted mb-3 d-flex align-items-center">
            <b-icon-building class="me-1"/>{{ $t('ExperienceCompany') }}
          </h5>
          <span class="text-muted mb-4 d-flex align-items-center">
            <b-icon-calendar-date class="me-1"/>{{ $t('ExperienceDate') }}
          </span>
          <p class="card-text">{{ $t('ExperienceDescription') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.resume-section {
  padding: 3rem 0;
}

.resume-section-content {
  max-width: 900px;
  margin: 0 auto;
  padding: 1.5rem;
}

h2 {
  font-size: 2rem;
  font-weight: 600;
  color: #495057;
}

.card {
  border-radius: 15px;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}

.card:hover {
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
}

.card-title {
  font-size: 1.8rem;
  font-weight: 600;
  color: #007bff;
}

.card-subtitle {
  font-size: 1.2rem;
  color: #6c757d;
}

.card-text {
  font-size: 1rem;
  color: #495057;
  line-height: 1.6;
}

.card i {
  font-size: 1.3rem;
  color: #007bff;
}

.card .bi {
  margin-right: 10px;
}
</style>
