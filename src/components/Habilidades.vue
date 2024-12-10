<template>

  <div class="habilidades container mt-5">

    <h2 class="text-center">{{ habilidades.title }}</h2>

    <div class="row">

      <TarjetaHabilidad v-for="(card, index) in habilidades.cards"
        :key="index"
        :card="card"
        class="col-md-4 mb-4"
        />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TarjetaHabilidad from './TarjetaHabilidad.vue'; 
import python from '../assets/img/python.png'; 
import Javascript from '../assets/img/Javascript.png'; 

export default defineComponent({
  name: 'Habilidades',
  components: {
    TarjetaHabilidad,
  },
  data() {
    return {
      habilidades: {
        title: "Habilidades",
        cards: [
          {
            logo: python,
            name: "Python",
            description: "Tengo una gran experiencia desarrollando con python y generando webs con Django a traves de codigo pyton"
          },
          {
            logo: Javascript,
            name: "JavaScript",
            description: "Tengo una experiencia basica de Javascript junto con Jquery y Typescript"
          }
        ]
      }
    };
  },
});
</script>
