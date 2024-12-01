<!-- src/App.vue -->
<template>
  <div id="app">
    <Navbar /> 
    <div class="container-fluid">
      <router-view/>
    </div>
  </div>
</template>



<script lang="ts">
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
  }
}
</script>