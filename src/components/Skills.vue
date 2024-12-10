<template>
  <section class="resume-section" id="skills">
    <div class="resume-section-content">
      <h2 class="mb-5">{{ $t('skills') }}</h2>

      <div class="subheading mb-3">{{ $t('languages') }}</div>
        <ul class="list-inline dev-icons">
          <!-- HTML -->
          <li class="list-inline-item">
            <img src="../assets/html5.svg" alt="HTML5" class="icon" />
          </li>

          <!-- CSS -->
          <li class="list-inline-item">
            <img src="../assets/css3.svg" alt="CSS3" class="icon" />
          </li>

          <!-- JavaScript -->
          <li class="list-inline-item">
            <img src="../assets/javascript.svg" alt="JavaScript" class="icon" />
          </li>

          <!-- TypeScript -->
          <li class="list-inline-item">
            <img src="../assets/typescript.svg" alt="TypeScript" class="icon" />
          </li>

          <!-- Vue -->
          <li class="list-inline-item">
            <img src="../assets/vue.svg" alt="Vue.js" class="icon" />
          </li>

          <!-- Laravel -->
          <li class="list-inline-item">
            <img src="../assets/laravel.svg" alt="Laravel" class="icon" />
          </li>

          <!-- Angular -->
          <li class="list-inline-item">
            <img src="../assets/angular.svg" alt="Angular" class="icon" />
          </li>

          <!-- Python -->
          <li class="list-inline-item">
            <img src="../assets/python.svg" alt="Python" class="icon" />
          </li>

          <!-- PHP -->
          <li class="list-inline-item">
            <img src="../assets/php.svg" alt="PHP" class="icon" />
          </li>

          <!-- Django -->
          <li class="list-inline-item">
            <img src="../assets/django.svg" alt="Django" class="icon" />
          </li>

          <!-- React -->
          <li class="list-inline-item">
            <img src="../assets/react.svg" alt="React" class="icon" />
          </li>

          <!-- Android Studio -->
          <li class="list-inline-item">
            <img src="../assets/androidstudio.svg" alt="Android Studio" class="icon" />
          </li>
        </ul>

      <div class="subheading mb-3">{{ $t('workflow') }}</div>
      <ul class="fa-ul mb-0">
        <li>
          <span class="fa-li"><i class="fas fa-check"></i></span>
          {{ $t('workflow1') }}
        </li>
        <li>
          <span class="fa-li"><i class="fas fa-check"></i></span>
          {{ $t('workflow2') }}
        </li>
      </ul>
    </div>
  </section>
</template>
  
<script setup lang="ts">

</script>
  
<style scoped>
.dev-icons {
  font-size: 2rem; 
}

.dev-icons li {
  display: inline-block;
  margin: 10px;
}

.icon {
  width: 40px;
  height: 40px;
  transition: transform 0.3s ease;
}

.icon:hover {
  transform: scale(1.1);
}</style>
  