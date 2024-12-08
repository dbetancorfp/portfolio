<template>
  <div>
    <h1>{{ $t("navbar.experience") }}</h1>
    <div class="experiencia-container">
      <div class="experiencia-item" v-for="(item, index) in experienciaItems" :key="index">
        <h3>{{ item.titulo }}</h3>
        <p>{{ item.empresa }}</p>
        <p>{{ item.fecha }}</p>
        <ul>
          <li v-for="(responsabilidad, rIndex) in item.responsabilidades" :key="rIndex">{{ responsabilidad }}</li>
        </ul>
      </div>
    </div>
    <a href="../cv/nichole_louisCV.pdf" class="btn-descargar" download>{{ $t("experiencia.btn") }}</a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'Experience',
  setup() {
    const { t } = useI18n();

    const experienciaItems = [
      {
        titulo: t("experiencia.cientifico_datos.titulo"),
        empresa: t("experiencia.cientifico_datos.empresa"),
        fecha: t("experiencia.cientifico_datos.fecha"),
        responsabilidades: [
          t("experiencia.cientifico_datos.responsabilidades.0"),
          t("experiencia.cientifico_datos.responsabilidades.1"),
          t("experiencia.cientifico_datos.responsabilidades.2"),
          t("experiencia.cientifico_datos.responsabilidades.3"),
        ],
      },
      {
        titulo: t("experiencia.desarrollador_web.titulo"),
        empresa: t("experiencia.desarrollador_web.empresa"),
        fecha: t("experiencia.desarrollador_web.fecha"),
        responsabilidades: [
          t("experiencia.desarrollador_web.responsabilidades.0"),
          t("experiencia.desarrollador_web.responsabilidades.1"),
          t("experiencia.desarrollador_web.responsabilidades.2"),
        ],
      },
    ];

    return {
      experienciaItems,
    };
  },
});
</script>


<style scoped>
#experience {
  padding: 3rem 1.5rem;
  background-color: #f9f9f9;
  text-align: center;
}

#experience h1 {
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 2rem;
  text-transform: uppercase;
  position: relative;
}

#experience h1::after {
  content: '';
  display: block;
  width: 60px;
  height: 4px;
  background-color: #007bff;
  margin: 0.5rem auto 0;
  border-radius: 2px;
}

.experiencia-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
}

.experiencia-item {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 1.5rem;
  width: 100%;
  max-width: 800px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.experiencia-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
}

.experiencia-item h3 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #333;
}

.experiencia-item p {
  font-size: 1rem;
  color: #666;
  margin: 0.3rem 0;
}

.experiencia-item ul {
  margin-top: 1rem;
  list-style-type: disc;
  padding-left: 1.5rem;
  text-align: left;
}

.experiencia-item ul li {
  font-size: 1rem;
  color: #444;
  margin-bottom: 0.5rem;
}

.btn-descargar {
  display: inline-block;
  padding: 12px 25px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 5px;
  margin-top: 2rem;
  transition: background-color 0.3s, transform 0.2s;
}

.btn-descargar:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

@media (min-width: 768px) {
  .experiencia-container {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
  }
}
</style>
