<template>
  <div class="proyectos container mt-5">
    <h2 class="text-center">{{ proyectos.title }}</h2>
    <div class="row">
      <TarjetaProyecto
        v-for="(card, index) in proyectos.cards"
        :key="index"
        :card="card"
        class="col-md-4 mb-4" 
        />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TarjetaProyecto from './TarjetaProyecto.vue'; // Asegúrate de que la ruta sea correcta

export default defineComponent({
  name: 'Proyectos',
  components: {
    TarjetaProyecto,
  },
  data() {
    return {
      proyectos: {
        title: "Proyectos",
        cards: [
          {
            title: "Tribu",
            description: "Una red social con diferentes usuarios llamados chamanes y donde puedes hacer echos (posts) y waves (comentarios).",
            link: "https://github.com/Cesardrom/tribu"
          },
          {
            title: "Guia LOL",
            description: "Una pagina web donde encontraras todos los personajes del LOL con sus caracteristicas",
            link: "https://github.com/Cesardrom/LOL"
          }
        ]
      }
    };
  },
});
</script>
