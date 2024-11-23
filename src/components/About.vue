<script setup>
    import { useI18n } from "vue-i18n";

    const { locale, t } = useI18n();    
</script>

<template>
    <section id="about">
        <div class="row">
            <div class="col-3 d-flex justify-content-center align-items-center rounded-circle">
                <img src="../assets/img/about-me-image.jpeg" alt="soldier cat">
            </div>
            <div class="col">
                <h1>{{ $t("about-page.title") }}</h1>
                <p>{{ $t("about-page.p1") }}</p>
                <p>{{ $t("about-page.p2") }}</p>
                <p>{{ $t("about-page.p3") }}</p>
                <p>{{ $t("about-page.p4") }}</p>
            </div>
        </div>
    </section>
</template>