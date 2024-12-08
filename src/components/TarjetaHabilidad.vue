<template>
  <div class="tarjeta-habilidad">
    <img :src="habilidad.logo" alt="Logo de la habilidad" class="imagen-habilidad" />
    <h3>{{ habilidad.name }}</h3>
    <p>{{ habilidad.description }}</p>
    <div class="nivel">
      <span v-for="n in habilidad.level" :key="n" class="estrella">★</span>
      <span v-for="n in (5 - habilidad.level)" :key="n" class="estrella vacia">☆</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Habilidad } from '../types';

export default defineComponent({
  name: 'TarjetaHabilidad',
  props: {
    habilidad: {
      type: Object as PropType<Habilidad>,
      required: true,
    },
  },
});
</script>

<style scoped>
.tarjeta-habilidad {
  border: 1px solid #ccc;
  padding: 16px;
  margin: 8px;
  text-align: center; 
  border-radius: 8px; 
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); 
  transition: transform 0.2s; 
}

.tarjeta-habilidad:hover {
  transform: scale(1.05); 
}

.nivel {
  font-size: 20px;
}

.estrella {
  color: gold;
}

.estrella.vacia {
  color: lightgray;
}

.imagen-habilidad {
  width: 80px; 
  height: 80px; 
  object-fit: cover; 
  margin-bottom: 10px; 
}
</style>