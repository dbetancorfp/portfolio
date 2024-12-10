<template>
    <div class="resume-section-content text-center">
      <h1 class="mb-0">
        Nauzet
        <span class="text-primary">Pestano</span>
      </h1>
      <div class="subheading mb-5">
        3542 Berry Street · Cheyenne Wells, CO 80810 · (317) 585-8468 ·
        <a href="mailto:name@email.com">nauzet@email.com</a>
      </div>
      <p class="lead mb-5">
        {{ $t('textabaout') }}
      </p>
      <div class="social-icons d-flex justify-content-center gap-3">
        <a class="social-icon" href="#!"><i class="fab fa-linkedin-in"></i></a>
        <a class="social-icon" href="#!"><i class="fab fa-github"></i></a>
        <a class="social-icon" href="#!"><i class="fab fa-twitter"></i></a>
        <a class="social-icon" href="#!"><i class="fab fa-facebook-f"></i></a>
      </div>
    </div>

</template>

<script setup lang="ts">
</script>

<style scoped>
.social-icon {
  font-size: 1.5rem;
  color: #0073b1; 
}
</style>
