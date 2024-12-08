<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
      <div class="container">
        <a class="navbar-brand" href="/about">{{ $t('navbar.brand') }}</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <RouterLink to="/about" class="nav-link">{{ $t('navbar.about') }}</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/projects" class="nav-link">{{ $t('navbar.projects') }}</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/skills" class="nav-link">{{ $t('navbar.skills') }}</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/experiences" class="nav-link">{{ $t('navbar.experiences') }}</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/contact" class="nav-link">{{ $t('navbar.contact') }}</RouterLink>
            </li>
            <li class="nav-item ms-auto">
              <button @click="toggleLanguage" class="btn btn-outline-secondary">{{ currentLanguage }}</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentLanguage: 'EN',
      };
    },
    methods: {
      toggleLanguage() {
        if (this.currentLanguage === 'EN') {
          this.$i18n.locale = 'es';
          this.currentLanguage = 'ES';
        } else {
          this.$i18n.locale = 'en';
          this.currentLanguage = 'EN';
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .navbar {
    font-family: 'Arial', sans-serif;
  }
  
  .nav-link {
    color: #555;
    transition: color 0.3s;
  }
  
  .nav-link:hover {
    color: #007bff;
  }
  
  .navbar-brand {
    font-weight: bold;
    font-size: 1.5rem;
  }
  
  .btn-outline-secondary {
    border-radius: 20px;
  }
  
  @media (max-width: 992px) {
    .navbar-toggler {
      border-color: #007bff;
    }
  }


  .navbar-nav {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .navbar {
    text-align: center;
  }

  .navbar-toggler {
    margin-left: auto;
    margin-right: auto;
  }



  </style>
  