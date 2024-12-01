<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col-4 mb-3" v-for="(skill, key) in skillList" :key="key">
                <Card :data="skill"/>
            </div>
        </div>
    </div>
</template>

<script>
    import Card from '../components/skillCard.vue';

    export default {
        name: 'Skills',
        components: { Card },
        computed: {
            skillList() {
                const skills = this.$i18n.messages[this.$i18n.locale].skills.data;
                return Object.entries(skills).map(([key, value]) => value);
            }
        }
    }
</script>