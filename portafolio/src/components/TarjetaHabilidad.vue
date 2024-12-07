<template>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"
    rel="stylesheet"
  />
  <div class="col-md-4 mb-4">
    <div class="card shadow-sm border-light rounded">
      <div class="card-body d-flex align-items-center">
        <div>
          <div>
            <i :class="icono" style="font-size: 40px; color: #007bff"></i>
          </div>
          <h5 class="card-title fw-bold">{{ habilidad }}</h5>

          <p class="card-text text-muted">{{ descripcion }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TarjetaHabilidad',
  props: {
    habilidad: {
      type: String,
      required: true,
    },
    descripcion: {
      type: String,
      required: true,
    },
    icono: {
      type: String,
      required: true,
    },
  },
})
</script>

<style scoped>
.card {
  background-color: #f8f9fa;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.icon-container {
  background-color: #007bff;
  border-radius: 50%;
  padding: 10px;
}

.card-title {
  font-size: 1.2rem;
  color: #343a40;
}

.card-text {
  font-size: 1rem;
  color: #6c757d;
}

.card-body {
  display: flex;
  align-items: center;
}
</style>
