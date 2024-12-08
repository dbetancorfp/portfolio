<template>
  <div id="app">
    <Navbar />
    
    <main class="flex-grow-1">
      <router-view />
    </main>
    <Footer></Footer>
    
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default defineComponent({
  name: 'App',
  components: {
    Navbar,
    Footer,
  },
});
</script>

<style scoped>

html, body {
  height: 100%;
  margin: 0;
  overflow-x: hidden; 
}


#app {
  display: flex;
  flex-direction: column; 
  min-height: 100vh; 
}


main {
  flex-grow: 1;
  padding-bottom: 0; 
}



footer {
  margin-top: auto; 
}
</style>
