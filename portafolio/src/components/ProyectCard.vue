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
        viewMore: {
            type: String,
            required: true,
        }
    },
};
</script>


<template>
  <div class="container">
      <div class="card h-100 shadow-sm">
          <div class="card-body text-center">
              <h3 class="card-title fw-bold">{{ title }}</h3>
              <p class="card-text text-muted">{{ description }}</p>
              <a :href="link" target="_blank"
                  class="btn btn-primary mt-3 d-flex align-items-center justify-content-center">
                  {{ viewMore }}
                  <b-icon-box-arrow-up-right class="ms-2" />
              </a>
          </div>
      </div>
  </div>
</template>

<style scoped>
/* Estilos aquí */
</style>
