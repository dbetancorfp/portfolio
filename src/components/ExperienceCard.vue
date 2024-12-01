<template>
    <table class="table">
        <thead>
            <tr>
            <th scope="col">{{ t('experience_headings.role') }}</th>
            <th scope="col" class="fs-4">{{ exp.role }}</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">{{ t('experience_headings.company') }}</th>
            <td>{{ exp.company }}</td>
            </tr>
            <tr>
            <th scope="row">{{ t('experience_headings.period') }}</th>
            <td>{{ exp.period }}</td>
            </tr>
            <tr>
            <th scope="row">{{ t('experience_headings.responsibilities') }}</th>
            <td>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item" v-for="resp in exp.responsibilities">{{ resp }}</li>
                </ul>
            </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
        import { useI18n } from "vue-i18n";
        interface Exp{
            role: string,
            company: string,
            period: string,
            responsibilities: Object
        }
        defineProps<{
            exp: Exp;
            }>();
        const { t } = useI18n();
</script>

<script lang="ts">
        export default {
        name: 'ExperienceCard'
        }
</script>
