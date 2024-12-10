<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-left" id="sideNav">
      <router-link :to="`/${$i18n.locale}/aboutme`" class="navbar-brand js-scroll-trigger">
        <span class="d-block d-lg-none">Nauzet</span>
        <span class="d-none d-lg-block">
          <img class="img-fluid img-profile rounded-circle mx-auto mb-3" src="../assets/groot.png" alt="..." />
        </span>
      </router-link>
  
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav flex-column">
          <!-- Enlaces de navegación -->
          <li class="nav-item">
            <router-link class="nav-link js-scroll-trigger" :to="`/${$i18n.locale}/aboutme`">{{ $t('aboutme') }}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link js-scroll-trigger" :to="`/${$i18n.locale}/skills`">{{ $t('skills') }}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link js-scroll-trigger" :to="`/${$i18n.locale}/experience`">{{ $t('experience') }}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link js-scroll-trigger" :to="`/${$i18n.locale}/projects`">{{ $t('projects') }}</router-link>
          </li>
          <!-- Dropdown de idiomas -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              {{ $t('language') }}
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#" @click="changeLanguage('es')">Español</a></li>
              <li><a class="dropdown-item" href="#" @click="changeLanguage('en')">English</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { useI18n } from 'vue-i18n'; 
  
  export default defineComponent({
    setup() {
      const { t, locale } = useI18n();
  
      const changeLanguage = (lang: string) => {
        locale.value = lang;  
        const currentPath = window.location.pathname.split('/').slice(2).join('/');
        window.location.href = `/${lang}/${currentPath}`;
      };
  
      return {
        t,
        changeLanguage
      };
    }
  });
  </script>
  
  <style scoped>
    .fixed-left {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 250px;
    z-index: 1050;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .navbar-nav {
    width: 100%;
    padding-top: 10px;
  }

  .nav-item {
    margin-bottom: 10px;
  }

  .navbar-brand img {
    width: 120px;
    height: auto;
    border-radius: 50%;
    margin-bottom: 20px;
  }

  body {
    margin-left: 260px;
  }

  .navbar-nav .nav-link {
    color: white;
    font-size: 16px;
    text-align: center;
  }

  .navbar-nav .nav-link:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  .navbar-nav .nav-item {
    width: 100%;
    text-align: center;
  }
  </style>
  