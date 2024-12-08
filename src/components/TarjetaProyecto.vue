<template>
  <div class="card-container">
    <div class="card" v-for="(card, key) in cards" :key="key">
      <div class="card-body">
        <img :src="card.image" alt="Project Image" class="card-image" />
        <h5 class="card-title">{{ card.title }}</h5>
        <p class="card-text">{{ card.description }}</p>
        <a :href="card.link" class="btn btn-primary" target="_blank">{{ $t("proyectos.btn") }}</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";
import { ProjectCard } from "../types";
import tribu from '../img/tribu.png';
import lumino from '../img/lumino.png';
import todo from '../img/todo.png';

export default defineComponent({
  name: "TarjetaProyecto",
  setup() {
    const { t } = useI18n();
    const cards: Record<string, ProjectCard> = {
      card1: {
        title: t("proyectos.card1.title"),
        description: t("proyectos.card1.description"),
        link: t("proyectos.card1.link"),
        image: tribu,
      },
      card2: {
        title: t("proyectos.card2.title"),
        description: t("proyectos.card2.description"),
        link: t("proyectos.card2.link"),
        image: lumino,
      },
      card3: {
        title: t("proyectos.card3.title"),
        description: t("proyectos.card3.description"),
        link: t("proyectos.card3.link"),
        image: todo,
      }
    };

    return {
      cards,
    };
  },
});
</script>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-around;
}
.card {
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s;
}
.card:hover {
  transform: scale(1.05);
}
.card-body {
  padding: 1rem;
}
.card-image{
  width: 100%; 
  height: 200px; 
  object-fit: cover; 
}
</style>