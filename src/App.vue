<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/navbar.vue'
</script>

<template>
  <Navbar />
    <div class="container d-flex flex-column">
      
      <RouterView />
    </div>
</template>
