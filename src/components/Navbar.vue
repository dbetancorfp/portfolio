<template>
  <div class="row fixed-top">
    <nav class="navbar navbar-expand-md navbar bg-dark border-bottom border-body">
      <div class="container">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class='nav-link' to="/projects">{{ t('projects') }}</router-link>
            </li>
            <li class="nav-item">
              <router-link class='nav-link' to="/skills">{{ t('skills') }}</router-link>
            </li>
            <li class="nav-item">
              <router-link class='nav-link' to="/experience">{{ t('experience') }}</router-link>
            </li>
            <li class="nav-item">
              <router-link class='nav-link' to="/about">{{ t('aboutme') }}</router-link>
            </li>
            <li class="nav-item">
              <router-link class='nav-link' to="/contact">{{ t('contact') }}</router-link>
            </li>
          </ul>
          <p><button class='btn' @click="changeLanguage('en')">English</button></p>
          &nbsp;
          <p><button class='btn' @click="changeLanguage('es')">Español</button></p>
        </div>
      </div>
    </nav>
  </div>
  
</template>
  
<script setup lang="ts">
    import { useI18n } from "vue-i18n";
    const { t, locale }  = useI18n();
    const changeLanguage = (lang: string) => {
        locale.value = lang;
      };
</script>

<script lang="ts">
  export default {
    name: 'Projects'
  }
</script>
