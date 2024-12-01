<script setup>
  import { useI18n } from "vue-i18n";
  import axios from "axios";
  
  const { locale, t } = useI18n();
  
  function downloadCV() {
    axios({
        url: 'http://localhost:5173/Europass.pdf',
        method: 'GET',
        responseType: 'blob',
    }).then((res) => {
        var FILE = window.URL.createObjectURL(new Blob([res.data]));
        var docUrl = document.createElement('x');
        docUrl.href = FILE;
        docUrl.setAttribute('download', 'file.pdf');
        document.body.appendChild(docUrl);
        docUrl.click();
    });
  }
</script>

<template>
    <section id="experience">
        <div class="row mb-3">
            <div class="col-8">
                <h1>{{ $t("experience") }}</h1>
                <p>{{ $t("experience-page.description") }}</p>
            </div>
            <div class="col d-flex justify-content-center align-items-center">
                <button class="btn btn-primary w-75" v-on:click="downloadCV()">{{ $t("experience-page.download") }}</button>
            </div>
        </div>
        <embed src="/Europass.pdf" type="application/pdf">
    </section>
</template>

<style scoped>
    embed {
        width: 100%;
        height: 70vh;
    }
</style>