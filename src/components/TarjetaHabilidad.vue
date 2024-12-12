<template>
  <div class="tarjeta-habilidad">
    <img v-if="habilidad.logo" :src="habilidad.logo" alt="Logo de {{ habilidad.name }}" class="logo" />
    <h3>{{ habilidad.name }}</h3>
    <p class="descripcion">{{ habilidad.description }}</p>
    <div class="nivel">
      <span v-for="n in habilidad.level" :key="n" class="nivel-indicador">★</span>
      <span v-for="n in (5 - habilidad.level)" :key="n + 100" class="nivel-indicador vacio">☆</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TarjetaHabilidad',
  props: {
    habilidad: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.tarjeta-habilidad {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  text-align: center;
  background-color: #f9f9f9;
  transition: transform 0.2s;
}

.tarjeta-habilidad:hover {
  transform: scale(1.05);
}

.logo {
  width: 50px;
  height: 50px;
  margin-bottom: 12px;
}

.descripcion {
  font-size: 0.9rem;
  color: #555;
  margin: 8px 0;
}

.nivel {
  margin-top: 8px;
}

.nivel-indicador {
  color: gold;
  font-size: 1.2rem;
}

.nivel-indicador.vacio {
  color: #ccc; /* Color para las estrellas vacías */
}
</style>