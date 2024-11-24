<template>
  <section id="about">
    <section class="about-section container">
      <div class="row align-items-center">
        <div class="col-md-4 text-center">
          <img src="../img/avatar.png" alt="Profile Picture" class="profile-pic">
        </div>
        <div class="col-md-8">
          <h1>{{ $t('WhoAmI') }}</h1>
          <p>{{ $t('description') }}</p>
          <a href="#" class="btn btn-download mt-4">Download CV</a>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup></script>

<style scoped>
 body {
      background-color: #2b2b2b;
      color: #fff;
      font-family: Arial, sans-serif;
    }
    .about-section {
      padding: 60px 20px;
    }
    .profile-pic {
      max-width: 100%;
      border-radius: 10px;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
    }
    .section-title {
      font-size: 1.5rem;
      font-weight: bold;
      color: #f0ad4e;
    }
    .skill-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
    }
    .stars {
      color: #f0ad4e;
    }
    .btn-download {
      background-color: #f0ad4e;
      color: #fff;
      font-weight: bold;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
    }
    .btn-download:hover {
      background-color: #ec971f;
    }
</style>
