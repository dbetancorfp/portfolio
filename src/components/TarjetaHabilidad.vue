<template>
  <div class="tarjeta-habilidad">
    <img :src="logo" :alt="nombre" class="logo" />
    <h3>{{ nombre }}</h3>
    <p>{{ descripcion }}</p>
    <div class="nivel">
      <div class="nivel-barra" :style="{ width: nivel + '%' }"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    logo: {
      type: String,
      required: true,
    },
    nombre: {
      type: String,
      required: true,
    },
    descripcion: {
      type: String,
      required: true,
    },
    nivel: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.tarjeta-habilidad {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.logo {
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
}
.nivel {
  background-color: #f0f0f0;
  height: 10px;
  border-radius: 5px;
  margin-top: 10px;
  overflow: hidden;
  position: relative;
}
.nivel-barra {
  height: 100%;
  background-color: #4caf50;
  transition: width 0.3s ease;
}
</style>
