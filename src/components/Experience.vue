<template>
  <h1 class="m-2">{{ t('experience_title') }}</h1> 
  <div class="col-12">{{ t('experience_description') }} &nbsp; <button class="btn btn-secondary" @click="toPDF()">PDF</button></div>
  
  <div class="row m-3" id="topdf">
  <div class="card col-12 mb-3">
    <div class="row g-3">
        <div class="col-md-4">
        <img src="/src/img/noavatar.jpg" class="rounded-circle m-4">
        </div>
        <div class="col-md-8">
        <div class="card-body">
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col" class="fs-3">{{ t('experience_info.name') }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td><a :href="t('experience_info.linkedin')">LinkedIn</a></td>
                    </tr>
                    <tr>
                    <td><a :href="t('experience_info.github')">GitHub</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
    </div>
    </div>
    <h1>{{ t('experience_headings.experience') }}</h1> 
      <div class="card col-12 mb-3" v-for="exp in expList">
          <ExperienceCard :exp="exp"/>
      </div>
      <h1>{{ t('experience_headings.education') }}</h1> 
      <div class="card col-12 mb-3" v-for="ed in edList">
          <EducationCard :ed="ed"/>
      </div>
  </div>
</template>

<script lang="ts">
    export default {
    name: 'Experience'
    }
</script>

<script setup lang="ts">
    import { useI18n } from "vue-i18n";
    import ExperienceCard from "./ExperienceCard.vue";
    import EducationCard from "./EducationCard.vue";
    import { computed } from "vue";
    import html2pdf from "html2pdf.js";
    const { t, tm  } = useI18n();
    const expList = computed(() => tm('experience_content'));
    const edList = computed(() => tm('education'));
    const toPDF = () => {
        html2pdf(document.getElementById('topdf'))
    }
</script>

<style scope>
img{
    max-width: 150px;
}
</style>