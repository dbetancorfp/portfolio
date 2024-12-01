<template>
    <table class="table">
        <thead>
            <tr>
            <th scope="col">{{ t('experience_headings.degree') }}</th>
            <th scope="col" class="fs-4">{{ ed.degree }}</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">{{ t('experience_headings.institution') }}</th>
            <td>{{ ed.institution }}</td>
            </tr>
            <tr>
            <th scope="row">{{ t('experience_headings.period') }}</th>
            <td>{{ ed.period }}</td>
            </tr>
            <tr>
            <th scope="row">{{ t('experience_headings.description') }}</th>
            <td>{{ ed.description }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
        import { useI18n } from "vue-i18n";
        interface Ed{
            degree: string,
            institution: string,
            period: string,
            description: Object
        }
        defineProps<{
            ed: Ed;
            }>();
        const { t } = useI18n();
</script>

<script lang="ts">
        export default {
        name: 'EducationCard'
        }
</script>
