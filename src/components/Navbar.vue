<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">David Riccio</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" :to="'/'">{{ $t('navbar.home') }}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="'/about'">{{ $t('navbar.about') }}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="'/projects'">{{ $t('navbar.projects') }}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="'/skills'">{{ $t('navbar.skills') }}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="'/contact'">{{ $t('navbar.contact') }}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="'/experience'">{{ $t('navbar.experience') }}</router-link>
          </li>
        </ul>
        <button @click="toggleLanguage" class="btn btn-outline-light ms-3">
          {{ currentLanguage === 'en' ? 'ES' : 'EN' }}
        </button>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'Navbar',
  setup() {
    const { locale } = useI18n();

    const toggleLanguage = () => {
      const newLocale = locale.value === 'en' ? 'es' : 'en';
      locale.value = newLocale;
      localStorage.setItem('locale', newLocale); 
    };

    return {
      toggleLanguage,
      currentLanguage: locale, 
    };
  },
});
</script>

<style scoped>
.navbar-brand{
  text-transform: uppercase;
  color: white;
  background: url(../../public/assets/wallhaven.png);
  -webkit-text-fill-color: transparent;
  background-clip: text;
  background-position: center;
  background-size:cover;
  -webkit-text-stroke: 1px white;
}
.navbar {
  background-color: #333 !important;
}

.navbar-nav .nav-link {
  font-size: 1.1rem;
  font-weight: 500;
}

button {
  background-color: #ffc107;
  border-radius: 30px;
  color: #333;
}

button:hover {
  background-color: #ff8f00;
  color: #fff;
}
</style>
