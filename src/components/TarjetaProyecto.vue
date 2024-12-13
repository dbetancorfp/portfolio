<template>
  <div class="card h-100 shadow-sm">
    <div class="card-body text-center">
      <h5 class="card-title fw-bold">{{ title }}</h5>
      <p class="card-text text-muted">{{ description }}</p>
      <a :href="link" target="_blank" class="btn btn-primary mt-3">Ver más</a>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.card {
  border-radius: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}
</style>
<!-- <template>
  <div class="tarjeta-proyecto">
    <h3>{{ $t(proyecto.title) }}</h3> 
    <p>{{ $t(proyecto.description) }}</p> 
    <a :href="proyecto.link" target="_blank" rel="noopener noreferrer">
      Ver Proyecto
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Proyecto } from "@/types";

export default defineComponent({
  name: "TarjetaProyecto",
  props: {
    proyecto: {
      type: Object as PropType<Proyecto>,
      required: true,
    },
  },
});
</script>

<style scoped>
.tarjeta-proyecto {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  max-width: 300px;
  text-align: center;
}
a {
  color: #007bff;
  text-decoration: none;
}
</style> -->
