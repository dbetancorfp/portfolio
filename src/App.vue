<template>
  <Navbar></Navbar>
  <main>
    <router-view /> 
  </main>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Projects from "./components/Projects.vue";

</script>

<style>

</style>
