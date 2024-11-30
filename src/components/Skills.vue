<script setup>
    import { useI18n } from "vue-i18n";
    import SkillCard from "./SkillCard.vue";

    const locale = useI18n();    
</script>

<template>
    <header class="bg-success text-white text-center py-4">
      <h1 class="mb-0">{{ locale.t("skills") }}</h1>
    </header>

    <section>
        <div class="row row-cols-3">
            <div v-for="skill in locale.getLocaleMessage(locale.locale.value)['skill-cards']" class="col">
                <SkillCard :logo="skill.logo" :name="skill.name" :description="skill.description" :level="skill.level"/>
            </div>
        </div>
    </section>
</template>