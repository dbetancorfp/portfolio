<script setup>
import Navbar from './components/Navbar.vue'
import { RouterView } from 'vue-router';
</script>

<template>
    <nav>
      <Navbar></Navbar>
    </nav>
    <RouterView></RouterView>
</template>

<style scoped>

</style>
