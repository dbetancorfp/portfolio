<template>
  <section id="about">
    <section class="about-section">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-4 text-center">
                    <img src="../img/avatar.png" class="img-fluid rounded-circle" alt="Profile">
                </div>
                <div class="col-md-8">
                    <div class="about-info">
                      <p><strong>{{ $t('name') }}:</strong> David Luis Mora</p>
                      <p><strong>{{ $t('birthdate') }}:</strong> 11-04-2000</p>
                      <p><strong>{{ $t('address') }}:</strong> Canarias, Tenerife</p>
                      <p><strong>{{ $t('email') }}:</strong> davidluismora8@gmail.com</p>
                      <p><strong>{{ $t('phone') }}:</strong> +34 65483034</p>
                       
                    </div>
                    <p class="project-count mt-4">10 projecto completo</p>
                    <a href="#" class="btn btn-download mt-2">Descargar CV</a>
                </div>
            </div>
        </div>
    </section>
  </section>
</template>

<script setup></script>

<style scoped>
#about {
  background-color: black;
  color: white;
  padding: 50px 0;  
  margin: 0;
}
.about-section {
  padding: 20px;
}

.btn-download {
  background-color: slateblue ;
  color: white;
  font-weight: bold;
}

.btn-download:hover {
  background-color: #ec971f;
}
/* Estilos específicos */
</style>
