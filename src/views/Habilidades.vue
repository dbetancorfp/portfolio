<template>
  <div class="container mt-4">
    <h1>My Skills</h1>
    <div class="row">
      <div class="col-md-4" v-for="habilidade in habilidades" :key="habilidade.id">
        <div class="card mb-4">
          <div class="card-body">
            <h5 class="card-title">{{ habilidade.name }}</h5>
            <p class="card-text">{{ habilidade.description }}</p>
            <div class="stars">
              <span v-for="star in habilidade.level" :key="star" class="star">★</span>
              <span v-for="star in 5 - habilidade.level" :key="star" class="star empty">☆</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      habilidades: [] 
    };
  },
  mounted() {
    this.fetchHabilidades(); 
  },
  methods: {
    fetchHabilidades() {
      fetch('/habilidades.json') 
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json(); 
        })
        .then(data => {
          this.habilidades = data.habilidades;
        })
        .catch(error => console.error('Error fetching the habilidades:', error));
    }
  }
};
</script>

<style>
.stars {
  font-size: 24px;
}
.star {
  color: gold;
}
.empty {
  color: lightgray; 
}
</style>