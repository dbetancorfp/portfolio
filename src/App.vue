<script setup>
  import Navbar from './components/Navbar.vue';
</script>

<template>
  <header>
    <Navbar />
  </header>

  <div class="container">
    <main>
      <Router-view />
    </main>
  </div>
</template>
  
<style scoped>

</style>
