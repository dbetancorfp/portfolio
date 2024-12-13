<template>
  <div class="card h-100 shadow-sm">
    
    <h2>{{ name }}</h2>
    <img :src="ruta" >
    <br>
    {{ skill}}
    
  </div>
</template>

<script lang="ts">
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    skill: {
      type: String,
      required: true,
    },
    ruta:{
      type:String,
      required: true,
    }
  },
};
</script>

<style scoped>
.card {
  border-radius: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
img {
width: 200px;
align-self: center;
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}
</style>

<!-- <template>
  <div class="card h-100 shadow-sm">
    <h3>{{ habilidad.name }}</h3>
    <p>{{ habilidad.description }}</p>
    <div class="nivel">
      <span
        v-for="n in 5"
        :key="n"
        :class="{ activo: n <= habilidad.level }"
      >★</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Habilidad } from "@/types";

export default defineComponent({
  name: "TarjetaHabilidad",
  props: {
    habilidad: {
      type: Object as PropType<Habilidad>,
      required: true,
    },
  },
});
</script>

<style scoped>
.card {
  border-radius: 15px;
  padding: 16px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.nivel span {
  color: #ccc;
  font-size: 20px;
}

.nivel .activo {
  color: #ffd700;
}

.logo {
  max-width: 100px;
  height: auto;
  margin-top: 10px;
}
</style> -->
