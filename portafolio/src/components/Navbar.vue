<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div class="container-fluid">
        <router-link class="navbar-brand js-scroll-trigger" :to="`/${$i18n.locale}/aboutme`">{{ $t('portfolio') }}</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav w-100">
            <li class="nav-item">
              <router-link class="nav-link js-scroll-trigger" :to="`/${$i18n.locale}/aboutme`">
                {{ $t('aboutme') }}
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link js-scroll-trigger" :to="`/${$i18n.locale}/projects`">
                {{ $t('projects') }}
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link js-scroll-trigger" :to="`/${$i18n.locale}/skills`">
                {{ $t('skills') }}
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link js-scroll-trigger" :to="`/${$i18n.locale}/experience`">
                {{ $t('experience') }}
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link js-scroll-trigger" :to="`/${$i18n.locale}/contact`">
                {{ $t('contact') }}
              </router-link>
            </li>
            <li class="nav-item dropdown ms-auto">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                <b-icon-globe />
              </a>
              <ul class="dropdown-menu dropdown-menu-end">
                <li>
                  <button class="dropdown-item" @click="changeLanguage('es')">
                    {{ $t("spanish") }}
                  </button>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <button class="dropdown-item" @click="changeLanguage('en')">
                    {{ $t("english") }}
                  </button>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="mt-5 pt-3"></div>
  </div>
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
.mt-5 {
  margin-top: 4rem;
}
</style>