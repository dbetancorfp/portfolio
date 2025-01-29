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
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">
  <div class="container py-5">
      <div class="card shadow-lg rounded-3 h-100">
          <div class="card-body d-flex flex-column align-items-center text-center">
              <h3 class="card-title fw-bold text-primary mb-3">{{ title }}</h3>
              <p class="card-text text-muted mb-4">{{ description }}</p>
              <a :href="link" target="_blank"
                  class="btn btn-info d-flex align-items-center justify-content-center px-4 py-2 rounded-pill shadow-sm">
                  {{ viewMore }}
                  <b-icon-box-arrow-up-right class="ms-2" />
              </a>
          </div>
      </div>
  </div>
</template>

<style scoped>
.card {
    background-color: #f8f9fa;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.card-img-top {
    max-height: 200px;
    object-fit: cover;
}

.btn-info {
    background-color: #17a2b8;
    border-color: #17a2b8;
}

.btn-info:hover {
    background-color: #138496;
    border-color: #117a8b;
}
</style>

