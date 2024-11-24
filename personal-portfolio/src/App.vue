<template>
    <Header />
    <main class="container-fluid d-flex flex-column content">
      <router-view />
    </main>
    <Footer class="footer mt-auto py-3 bg-dark" />
</template>

<script lang="ts">
  import Header from './components/header.vue';
  import Footer from './components/footer.vue';

  export default {
    name: 'App',
    components: {
      Header,
      Footer,
    },
  };
</script>

<style>
  .content {
    flex: 1;
  }
</style>